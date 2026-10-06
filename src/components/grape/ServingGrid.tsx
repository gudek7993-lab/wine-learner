import { Thermometer, Wine, Hourglass, CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import type { GrapeProfile } from "@/data/types";

export default function ServingGrid({ serving }: { serving: GrapeProfile["serving"] }) {
  const items = [
    { icon: Thermometer, label: "서빙 온도", value: serving.tempC },
    { icon: Wine, label: "글라스", value: serving.glass },
    { icon: Hourglass, label: "디캔팅", value: serving.decant },
    { icon: CalendarBlank, label: "셀러링", value: serving.cellar },
  ];
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
      {items.map(({ icon: Icon, label, value }) => (
        <div key={label} className="bg-surface p-4">
          <dt className="flex items-center gap-1.5 text-xs text-ink-3">
            <Icon size={16} weight="regular" aria-hidden />
            {label}
          </dt>
          <dd className="mt-1.5 text-sm font-semibold text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
