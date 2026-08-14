"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_ID = "6k8cpUkKK4c";

export function MusicExperience() {
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    document.body.style.overflow = started ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [started]);

  const beginInvitation = () => {
    setStarted(true);
    setPlaying(true);
  };

  const sendCommand = (command: "playVideo" | "pauseVideo") => {
    playerRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: command, args: [] }),
      "https://www.youtube.com",
    );
  };

  const toggleMusic = () => {
    const nextPlaying = !playing;
    setPlaying(nextPlaying);
    sendCommand(nextPlaying ? "playVideo" : "pauseVideo");
  };

  return (
    <>
      {!started && (
        <div className="entry-cover" role="dialog" aria-modal="true" aria-labelledby="entry-title">
          <img src="/naty-caballo-vertical.jpeg" alt="" aria-hidden="true" />
          <div className="entry-shade" />
          <div className="entry-frame" aria-hidden="true" />
          <div className="entry-content">
            <p className="eyebrow light">Estás invitado a</p>
            <p className="entry-xv">Mis XV</p>
            <h2 id="entry-title">Natalia Ivon</h2>
            <p className="entry-last-name">Martinez Jaquez</p>
            <p className="entry-date">19 · Septiembre · 2026</p>
            <button type="button" onClick={beginInvitation}>
              <span aria-hidden="true">♫</span>
              Abrir invitación
            </button>
            <small>La música comenzará al entrar</small>
          </div>
        </div>
      )}

      {started && (
        <>
          <iframe
            ref={playerRef}
            className="ambient-player"
            title="Count on Me de Bruno Mars"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&controls=0&loop=1&playlist=${VIDEO_ID}&enablejsapi=1&playsinline=1&modestbranding=1`}
            allow="autoplay; encrypted-media; picture-in-picture"
          />
          <button
            className="music-toggle"
            type="button"
            onClick={toggleMusic}
            aria-label={playing ? "Pausar Count on Me" : "Reproducir Count on Me"}
          >
            <span className={playing ? "music-bars is-playing" : "music-bars"} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>{playing ? "Pausar música" : "Reproducir música"}</span>
          </button>
        </>
      )}
    </>
  );
}
