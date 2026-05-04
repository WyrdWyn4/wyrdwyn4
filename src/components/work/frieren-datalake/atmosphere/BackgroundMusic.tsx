"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Music2, Pause, Play, Volume2, VolumeX } from "lucide-react";

const MUSIC_SRC =
  "/media/workterm/nasdaq-verafin/datalake-developer-intern/audio/journey-theme.mp3";

const STORAGE_KEY = "frieren-datalake-music";
const TARGET_VOLUME = 0.24;

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isArmed, setIsArmed] = useState(true);

  const clearFadeInterval = useCallback(() => {
    if (fadeIntervalRef.current) {
      window.clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
  }, []);

  const fadeVolume = useCallback(
    (targetVolume: number) => {
      const audio = audioRef.current;
      if (!audio) return;

      clearFadeInterval();

      fadeIntervalRef.current = window.setInterval(() => {
        const difference = targetVolume - audio.volume;
        const step = difference > 0 ? 0.025 : -0.025;

        if (Math.abs(difference) <= 0.03) {
          audio.volume = targetVolume;
          clearFadeInterval();
          return;
        }

        audio.volume = Math.max(0, Math.min(1, audio.volume + step));
      }, 60);
    },
    [clearFadeInterval]
  );

  const startMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    // If user explicitly paused it, do not restart from random page clicks/scrolls.
    if (localStorage.getItem(STORAGE_KEY) === "off") {
      setIsPlaying(false);
      setIsArmed(false);
      return;
    }

    try {
      audio.loop = true;
      audio.muted = false;
      audio.volume = 0;

      await audio.play();

      localStorage.setItem(STORAGE_KEY, "on");
      setIsPlaying(true);
      setIsMuted(false);
      setIsArmed(false);

      fadeVolume(TARGET_VOLUME);
    } catch {
      // Browser may still block in rare cases. Keep armed until another interaction.
      setIsPlaying(false);
      setIsArmed(true);
    }
  }, [fadeVolume]);

  const stopMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    localStorage.setItem(STORAGE_KEY, "off");

    setIsPlaying(false);
    setIsArmed(false);

    fadeVolume(0);

    window.setTimeout(() => {
      audio.pause();
    }, 400);
  }, [fadeVolume]);

  async function handlePlayPause() {
    if (isPlaying) {
      stopMusic();
      return;
    }

    localStorage.setItem(STORAGE_KEY, "on");
    setIsArmed(false);
    await startMusic();
  }

  function handleMuteToggle() {
    const audio = audioRef.current;
    if (!audio) return;

    const nextMuted = !isMuted;
    audio.muted = nextMuted;
    setIsMuted(nextMuted);
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.preload = "auto";
    audio.loop = true;
    audio.volume = 0;

    const userStoppedMusic = localStorage.getItem(STORAGE_KEY) === "off";

    if (userStoppedMusic) {
      setIsPlaying(false);
      setIsArmed(false);
      return;
    }

    setIsArmed(true);

    return () => {
      clearFadeInterval();
    };
  }, [clearFadeInterval]);

  useEffect(() => {
    if (!isArmed) return;

    const startAfterAnyInteraction = () => {
      startMusic();
    };

    window.addEventListener("pointerdown", startAfterAnyInteraction, {
      passive: true,
    });
    window.addEventListener("keydown", startAfterAnyInteraction);
    window.addEventListener("wheel", startAfterAnyInteraction, {
      passive: true,
    });
    window.addEventListener("scroll", startAfterAnyInteraction, {
      passive: true,
    });
    window.addEventListener("touchstart", startAfterAnyInteraction, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointerdown", startAfterAnyInteraction);
      window.removeEventListener("keydown", startAfterAnyInteraction);
      window.removeEventListener("wheel", startAfterAnyInteraction);
      window.removeEventListener("scroll", startAfterAnyInteraction);
      window.removeEventListener("touchstart", startAfterAnyInteraction);
    };
  }, [isArmed, startMusic]);

  return (
    <>
      <audio ref={audioRef} src={MUSIC_SRC} preload="auto" loop />

      <div className="fixed bottom-5 right-5 z-50">
        <div className="flex items-center gap-2 rounded-full border border-[#e8d8a8]/30 bg-[#101423]/70 px-3 py-2 text-[#f7efd7] shadow-[0_0_40px_rgba(16,20,35,0.5)] backdrop-blur-xl">
          <div className="hidden items-center gap-2 px-2 text-xs text-[#e8d8a8] sm:flex">
            <Music2 size={15} />
            <span className="font-mono uppercase tracking-[0.18em]">
              {isPlaying ? "Ambient" : isArmed ? "Starts on Scroll" : "Paused"}
            </span>
          </div>

          <button
            type="button"
            onClick={handlePlayPause}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e8d8a8]/25 bg-[#e8d8a8]/10 transition hover:border-[#e8d8a8]/60 hover:bg-[#e8d8a8]/15"
            aria-label={
              isPlaying ? "Pause background music" : "Play background music"
            }
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>

          <button
            type="button"
            onClick={handleMuteToggle}
            disabled={!isPlaying}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#c9bfea]/25 bg-[#c9bfea]/10 transition hover:border-[#c9bfea]/60 hover:bg-[#c9bfea]/15 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label={isMuted ? "Unmute background music" : "Mute background music"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      </div>
    </>
  );
}