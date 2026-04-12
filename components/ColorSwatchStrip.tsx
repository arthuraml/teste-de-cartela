interface ColorSwatchStripProps {
  colors: string[];
  labels?: string[];
}

export function ColorSwatchStrip({ colors, labels }: ColorSwatchStripProps) {
  return (
    <div className="flex gap-3 flex-wrap">
      {colors.map((color, i) => (
        <div key={color} className="flex flex-col items-center gap-1">
          <div
            className="w-10 h-10 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
            style={{ backgroundColor: color }}
          />
          {labels?.[i] && (
            <span className="font-body text-[11px] text-muted">
              {labels[i]}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
