import clsx from "clsx";

/**
 * Embed real do player Matterport (iframe oficial). Carregado só quando
 * ativado pelo usuário (ver TechBlock) — evita pesar o carregamento
 * inicial da página com o player 3D antes que alguém peça pra interagir.
 */
export default function MatterportEmbed({
  src,
  title,
  className,
}: {
  src: string;
  title: string;
  className?: string;
}) {
  return (
    <iframe
      src={src}
      title={title}
      className={clsx("h-full w-full border-0", className)}
      allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
      allowFullScreen
    />
  );
}
