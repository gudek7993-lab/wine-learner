interface Column {
  key: string;
  label: string;
}

interface Row {
  label: string;
  values: Record<string, string>;
}

interface ComparisonTableProps {
  title?: string;
  columns: Column[];
  rows: Row[];
}

export default function ComparisonTable({ title, columns, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      {title && <h3 className="text-lg font-bold mb-3">{title}</h3>}
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-burgundy-50">
            <th className="p-3 text-left font-semibold text-burgundy-700 border-b border-cream-200" />
            {columns.map((col) => (
              <th
                key={col.key}
                className="p-3 text-left font-semibold text-burgundy-700 border-b border-cream-200"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-cream-100 hover:bg-cream-50">
              <td className="p-3 font-medium text-burgundy-800">{row.label}</td>
              {columns.map((col) => (
                <td key={col.key} className="p-3 text-burgundy-700">
                  {row.values[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
