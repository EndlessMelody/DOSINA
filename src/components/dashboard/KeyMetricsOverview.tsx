import { DollarSign, TrendingUp, Percent, Activity } from 'lucide-react';

export function KeyMetricsOverview() {
  const metrics = [
    {
      icon: DollarSign,
      label: 'Revenue',
      value: '2.4B VND',
      change: '+15%',
      changeType: 'positive' as const,
      comparison: 'vs Q3 2021'
    },
    {
      icon: TrendingUp,
      label: 'Net Profit',
      value: '192M VND',
      change: '-33%',
      changeType: 'negative' as const,
      comparison: 'vs Q3 2021'
    },
    {
      icon: Percent,
      label: 'Profit Margin',
      value: '8%',
      change: '-4 pts',
      changeType: 'negative' as const,
      comparison: 'from 12%'
    },
    {
      icon: Activity,
      label: 'Operating Cash Flow',
      value: '-45M VND',
      change: 'Negative',
      changeType: 'negative' as const,
      comparison: 'First time'
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div 
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-5"
            style={{ boxShadow: 'var(--shadow-sm)' }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <Icon className="w-4 h-4 text-blue-600" />
              </div>
              <div className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                metric.changeType === 'positive' 
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                  : 'bg-rose-50 border-rose-200 text-rose-700'
              }`}>
                {metric.changeType === 'positive' ? '↑' : '↓'} {metric.change}
              </div>
            </div>
            
            <div className="text-[11px] text-gray-500 font-medium mb-1 uppercase tracking-wide">
              {metric.label}
            </div>
            <div className="text-[24px] font-semibold text-gray-900 tracking-tight mb-1">
              {metric.value}
            </div>
            <div className="text-[11px] text-gray-500">
              {metric.comparison}
            </div>
          </div>
        );
      })}
    </div>
  );
}
