interface BenefitItem {
  icon: string;
  label: string;
}

const ICONS: Record<string, string> = {
  check: "✓",
  heart: "♥",
  star: "★",
};

interface BenefitListProps {
  items: BenefitItem[];
  dark?: boolean;
}

export function BenefitList({ items, dark }: BenefitListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cta text-cta-text text-xs font-bold">
            {ICONS[item.icon] ?? item.icon}
          </span>
          <span
            className={`font-body text-sm ${
              dark ? "text-background" : "text-foreground"
            }`}
          >
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
