import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block rounded-full px-8 py-3.5 font-body font-semibold text-base tracking-wide transition-all duration-200 cursor-pointer text-center";
  const variants = {
    primary:
      "bg-cta text-cta-text shadow-[0_6px_18px_rgba(198,167,123,0.25)] hover:bg-cta-hover hover:shadow-[0_8px_24px_rgba(198,167,123,0.35)]",
    ghost:
      "border-2 border-cta text-cta hover:bg-cta hover:text-cta-text",
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
