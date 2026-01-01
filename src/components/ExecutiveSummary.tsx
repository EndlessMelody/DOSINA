import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

interface SummaryItem {
  type: 'positive' | 'negative' | 'warning' | 'info';
  title: string;
  description: string;
  metric?: string;
}

interface ExecutiveSummaryProps {
  isEmbedded?: boolean;
}

export function ExecutiveSummary({ isEmbedded = false }: ExecutiveSummaryProps) {
  const summaryItems: SummaryItem[] = [
    {
      type: 'positive',
      title: 'Strong Revenue Growth',
      description: 'Revenue increased 15% QoQ driven by market expansion',
      metric: '+15% QoQ'
    },
    {
      type: 'negative',
      title: 'Profit Margin Compression',
      description: 'Net profit margin declined from 12% to 8% due to higher OpEx',
      metric: '-4 pts'
    },
    {
      type: 'warning',
      title: 'Cash Flow Alert',
      description: 'Operating cash flow turned negative for the first time',
      metric: 'Negative'
    },
    {
      type: 'warning',
      title: 'Rising Operating Costs',
      description: 'S&A expenses increased 20% impacting bottom line',
      metric: '+20%'
    },
    {
      type: 'info',
      title: 'Inventory Management',
      description: 'COGS efficiency maintained despite revenue growth',
      metric: 'Stable'
    }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'positive': return CheckCircle2;
      case 'negative': return TrendingDown;
      case 'warning': return AlertTriangle;
      default: return Info;
    }
  };

  const getStyles = (type: string) => {
    switch(type) {
      case 'positive': 
        return { 
          icon: 'text-emerald-600', 
          bg: 'bg-emerald-50/50',
          border: 'border-emerald-200',
          metric: 'bg-emerald-100 border-emerald-200 text-emerald-700'
        };
      case 'negative': 
        return { 
          icon: 'text-rose-600', 
          bg: 'bg-rose-50/50',
          border: 'border-rose-200',
          metric: 'bg-rose-100 border-rose-200 text-rose-700'
        };
      case 'warning': 
        return { 
          icon: 'text-amber-600', 
          bg: 'bg-amber-50/50',
          border: 'border-amber-200',
          metric: 'bg-amber-100 border-amber-200 text-amber-700'
        };
      default: 
        return { 
          icon: 'text-blue-600', 
          bg: 'bg-blue-50/50',
          border: 'border-blue-200',
          metric: 'bg-blue-100 border-blue-200 text-blue-700'
        };
    }
  };

  return (
    <div className={isEmbedded ? '' : 'bg-white rounded-lg border border-gray-200 p-6'} style={isEmbedded ? {} : { boxShadow: 'var(--shadow-md)' }}>
      {!isEmbedded && (
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-[18px] font-semibold tracking-tight text-gray-900">
              Executive Summary
            </h2>
            <p className="text-[12px] text-gray-500 mt-0.5">
              Top 5 insights you need to know
            </p>
          </div>
        </div>
      )}
      
      <div className="space-y-2.5">
        {summaryItems.map((item, index) => {
          const Icon = getIcon(item.type);
          const styles = getStyles(item.type);
          
          return (
            <div 
              key={index} 
              className={`flex items-start gap-3 p-3.5 rounded-lg border ${styles.border} ${styles.bg} transition-all hover:shadow-sm`}
            >
              <Icon className={`w-4 h-4 ${styles.icon} flex-shrink-0 mt-0.5`} />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="text-[13px] font-semibold text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                  {item.metric && (
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${styles.metric} flex-shrink-0`}>
                      {item.metric}
                    </span>
                  )}
                </div>
                <p className="text-[12px] text-gray-600 leading-[1.5]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}