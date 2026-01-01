export function RevenueDataTable() {
  const data = [
    { quarter: 'Q1 2021', revenue: '1.80B', netProfit: '220M', margin: '12.2%', growth: '+8%' },
    { quarter: 'Q2 2021', revenue: '2.00B', netProfit: '240M', margin: '12.0%', growth: '+11%' },
    { quarter: 'Q3 2021', revenue: '2.10B', netProfit: '250M', margin: '11.9%', growth: '+5%' },
    { quarter: 'Q4 2021', revenue: '2.40B', netProfit: '192M', margin: '8.0%', growth: '+15%' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
              Period
            </th>
            <th className="text-right py-3 px-4 text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
              Revenue
            </th>
            <th className="text-right py-3 px-4 text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
              Net Profit
            </th>
            <th className="text-right py-3 px-4 text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
              Margin
            </th>
            <th className="text-right py-3 px-4 text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
              Growth
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr 
              key={index}
              className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
            >
              <td className="py-3 px-4 text-[13px] font-medium text-gray-900">
                {row.quarter}
              </td>
              <td className="py-3 px-4 text-[13px] text-right text-gray-900 font-mono">
                {row.revenue}
              </td>
              <td className="py-3 px-4 text-[13px] text-right text-gray-900 font-mono">
                {row.netProfit}
              </td>
              <td className="py-3 px-4 text-[13px] text-right font-mono">
                <span className={index === 3 ? 'text-rose-600 font-semibold' : 'text-gray-900'}>
                  {row.margin}
                </span>
              </td>
              <td className="py-3 px-4 text-[13px] text-right">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold text-[11px]">
                  ↑ {row.growth}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-[12px] text-gray-500">
          4 periods • VND currency
        </span>
        <button className="text-[12px] text-blue-600 hover:text-blue-700 font-medium">
          Export to Excel →
        </button>
      </div>
    </div>
  );
}
