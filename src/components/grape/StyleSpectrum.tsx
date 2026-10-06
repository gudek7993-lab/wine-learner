import Link from "next/link";
import { allGrapes, getGrapeProfile } from "@/lib/data-loader";
import { wineStyles } from "@/lib/wine-styles";

export default function StyleSpectrum() {
  const columns = wineStyles.map((style) => ({
    style,
    grapes: allGrapes.filter((g) => getGrapeProfile(g.id)?.style === style.id),
  }));

  return (
    <div className="-mx-4 overflow-x-auto px-4 scrollbar-hide snap-x snap-mandatory sm:mx-0 sm:px-0">
      <div className="grid min-w-[880px] grid-cols-6 gap-3">
        {columns.map(({ style, grapes }) => (
          <div key={style.id} className="snap-start overflow-hidden rounded-xl border border-line bg-surface">
            <div className="h-1.5" style={{ backgroundColor: style.color }} aria-hidden />
            <div className="p-4">
              <h3 className="font-semibold text-ink">{style.label}</h3>
              <p className="mt-0.5 text-xs text-ink-3">{style.hint}</p>
              <ul className="mt-4 space-y-0.5">
                {grapes.map((g) => (
                  <li key={g.id}>
                    <Link
                      href={`/grapes/${g.id}`}
                      className="-mx-2 block rounded-lg px-2 py-1.5 text-sm text-ink-2 transition-colors hover:bg-sunken hover:text-ink"
                    >
                      {g.nameKo}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
