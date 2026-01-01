import { TrendingUp, TrendingDown, AlertCircle, DollarSign } from 'lucide-react';

export function KeyInsightsCard() {
  const insights = [
    {
      icon: TrendingUp,
      text: 'Revenue increased by 15% compared to the previous quarter',
      type: 'positive' as const,
    },
    {
      icon: TrendingDown,
      text: 'Net profit margin dropped to 8% from 12%',
      type: 'negative' as const,
    },
    {
      icon: AlertCircle,
      text: 'Operating expenses rose by 20%',
      type: 'warning' as const,
    },
    {
      icon: DollarSign,
      text: 'Cash flow from operations turned negative',
      type: 'negative' as const,
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8" style={{ boxShadow: 'var(--shadow-md)' }}>
      <h2 className="text-[18px] font-semibold tracking-tight text-gray-900 mb-6">
        Metric Drivers
      </h2>
      
      <div className="space-y-3">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          const bgColor = 
            insight.type === 'positive' ? 'bg-emerald-50/50' :
            insight.type === 'negative' ? 'bg-rose-50/50' :
            'bg-amber-50/50';
          const iconColor = 
            insight.type === 'positive' ? 'text-emerald-600' :
            insight.type === 'negative' ? 'text-rose-600' :
            'text-amber-600';
          const borderColor = 
            insight.type === 'positive' ? 'border-emerald-100' :
            insight.type === 'negative' ? 'border-rose-100' :
            'border-amber-100';
          
          return (
            <div 
              key={index} 
              className={`flex items-start gap-3 p-3.5 rounded-lg border ${borderColor} ${bgColor}`}
            >
              <div className="flex-shrink-0 mt-0.5">
                <Icon className={`w-4 h-4 ${iconColor}`} />
              </div>
              <p className="text-[13px] leading-[1.6] text-gray-700">
                {insight.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}