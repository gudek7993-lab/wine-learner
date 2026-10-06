import type { WineStyleFamily } from "@/data/types";
import { styleById } from "@/lib/wine-styles";

export default function StyleSwatch({ style, withLabel = true }: { style: WineStyleFamily; withLabel?: boolean }) {
  const meta = styleById[style];
  return (
    <span className="inline-flex items-center gap-2 text-sm text-ink-2">
      <span
        aria-hidden
        className="h-3.5 w-3.5 rounded-full ring-1 ring-inset ring-black/10"
        style={{ backgroundColor: meta.color }}
      />
      {withLabel && meta.label}
    </span>
  );
}
