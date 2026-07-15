import { useEffect, useRef } from "react";
import clsx from "clsx";

/**
 * Gravação real de navegação num tour Matterport (Residência Condomínio
 * Jardim Versailles) — usada como prévia no painel "Virtual Experience".
 * Mesma lógica de pausa por visibilidade de aba do HeroVideo.
 */
export default function TourPreviewVideo({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function handleVisibility() {
      if (!video) return;
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    }

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      poster="/video/tour-preview-poster.jpg"
      className={clsx("h-full w-full object-cover", className)}
    >
      <source src="/video/tour-preview.webm" type="video/webm" />
      <source src="/video/tour-preview.mp4" type="video/mp4" />
    </video>
  );
}
