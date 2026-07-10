import clsx from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "dark" | "light" };
type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "dark" | "light" };

const baseClass =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform duration-300 hover:scale-[1.03] hover:opacity-90 active:scale-[0.98]";

// "dark": botão padrão (fundo preto, texto branco). "light": usado sobre
// fundos escuros, como o card do plano em destaque (fundo branco, texto preto).
const solidVariantClass = {
  dark: "bg-ink text-paper",
  light: "bg-paper text-ink",
};

const outlineClass =
  "inline-flex items-center justify-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper";

export function SolidButton({ className, children, variant = "dark", ...props }: AnchorProps) {
  return (
    <a className={clsx(baseClass, solidVariantClass[variant], className)} {...props}>
      {children}
    </a>
  );
}

export function SolidSubmitButton({
  className,
  children,
  variant = "dark",
  ...props
}: NativeButtonProps) {
  return (
    <button
      className={clsx(baseClass, solidVariantClass[variant], "cursor-pointer border-0", className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function OutlineButton({ className, children, ...props }: AnchorProps) {
  return (
    <a className={clsx(outlineClass, className)} {...props}>
      {children}
    </a>
  );
}
