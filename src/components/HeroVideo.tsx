import { useEffect, useRef } from "react";
import clsx from "clsx";

/**
 * Vídeo de fundo do hero. Toca em loop enquanto a aba está visível;
 * pausa quando o usuário troca de aba/sessão e retoma sozinho quando
 * ele volta (Page Visibility API) — evita gastar recursos com o
 * navegador em segundo plano.
 */
export default function HeroVideo({ className }: { className?: string }) {
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
      poster="/video/hero-poster.jpg"
      className={clsx("h-full w-full object-cover", className)}
    >
      <source src="/video/hero-video.webm" type="video/webm" />
      <source src="/video/hero-video.mp4" type="video/mp4" />
    </video>
  );
}
