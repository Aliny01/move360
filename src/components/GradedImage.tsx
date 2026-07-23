import { type ImgHTMLAttributes } from "react";
import clsx from "clsx";

/**
 * Aplica o grade de cor quente/dourado consistente exigido no briefing
 * (seção 5) a todas as fotos placeholder, para lerem como um único
 * ensaio fotográfico da marca. Mesmo tratamento deve ser mantido quando
 * as fotos reais do cliente chegarem.
 */
export default function GradedImage({
  className,
  imgClassName,
  src,
  alt,
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & { imgClassName?: string }) {
  return (
    <div className={clsx("relative overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        draggable={false}
        className={clsx(
          "h-full w-full object-cover [filter:saturate(1.08)_sepia(0.16)_contrast(1.04)_brightness(1.02)]",
          imgClassName
        )}
        {...props}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3a2410]/25 via-transparent to-[#3a2410]/5 mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_20%_0%,rgba(255,205,130,0.18),transparent_60%)]" />
    </div>
  );
}
