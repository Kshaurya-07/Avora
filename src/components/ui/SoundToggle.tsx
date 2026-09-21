import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const SoundToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRefs = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleAudio = () => {
    if (isPlaying) {
      // Fade out
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.5);
        setTimeout(() => {
          oscillatorRefs.current.forEach((osc) => {
            try { osc.stop(); } catch (_) {}
          });
          oscillatorRefs.current = [];
          setIsPlaying(false);
        }, 500);
      }
    } else {
      // Create ethereal ambient drone
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.gain.setTargetAtTime(0.04, ctx.currentTime, 1.2); // Soft volume
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Ethereal chord frequencies (F# minor 9th: 185Hz, 220Hz, 277Hz, 330Hz, 440Hz)
      const freqs = [185.0, 220.0, 277.18, 329.63, 440.0];
      const newOscs: OscillatorNode[] = [];

      freqs.forEach((freq) => {
        const osc = ctx.createOscillator();
        const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
        const filter = ctx.createBiquadFilter();
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, ctx.currentTime);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        if (panner) {
          panner.pan.value = (Math.random() - 0.5) * 0.8;
          osc.connect(filter);
          filter.connect(panner);
          panner.connect(masterGain);
        } else {
          osc.connect(filter);
          filter.connect(masterGain);
        }

        osc.start();
        newOscs.push(osc);
      });

      oscillatorRefs.current = newOscs;
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      oscillatorRefs.current.forEach((osc) => {
        try { osc.stop(); } catch (_) {}
      });
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-avora-muted hover:text-avora-charcoal bg-white/70 hover:bg-white/95 border border-avora-border transition-all duration-300 shadow-sm"
      title="Ambient soundscape (Web Audio)"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-avora-lavender animate-pulse" />
          <span className="hidden sm:inline">Sound: On</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Sound: Off</span>
        </>
      )}
    </button>
  );
};
