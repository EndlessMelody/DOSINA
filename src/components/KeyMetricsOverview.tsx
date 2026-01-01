import { DollarSign, TrendingUp, Percent, Activity, ChevronDown } from 'lucide-react';
import { ExecutiveSummary } from './ExecutiveSummary';
import { ComparisonTooltip } from './ComparisonTooltip';
import { useState, useEffect } from 'react';

interface KeyMetricsOverviewProps {
  comparisonMode?: 'single' | 'comparison';
  triggerShimmer?: boolean;
}

export function KeyMetricsOverview({ comparisonMode = 'single', triggerShimmer = false }: KeyMetricsOverviewProps) {
  const [isExecutiveSummaryOpen, setIsExecutiveSummaryOpen] = useState(false);
  const [isShimmering, setIsShimmering] = useState(false);

  useEffect(() => {
    if (triggerShimmer) {
      setIsShimmering(true);
      const timer = setTimeout(() => {
        setIsShimmering(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [triggerShimmer]);

  const metrics = [
    {
      icon: DollarSign,
      label: 'Revenue',
      value: '2.4B',
      previousValue: '2.09B',
      currency: 'VND',
      change: '+15%',
      changeType: 'positive' as const,
      comparison: 'vs Q3 2021',
      tooltipData: {
        current: { period: 'Q4 2021', value: '2.4B', diff: '+15%' },
        previous: { period: 'Q3 2021', value: '2.09B', diff: '—' },
        yoy: { period: 'Q4 2020', value: '1.92B', diff: '+25%' }
      }
    },
    {
      icon: TrendingUp,
      label: 'Net Profit',
      value: '192M',
      previousValue: '288M',
      currency: 'VND',
      change: '-33%',
      changeType: 'negative' as const,
      comparison: 'vs Q3 2021',
      tooltipData: {
        current: { period: 'Q4 2021', value: '192M', diff: '-33%' },
        previous: { period: 'Q3 2021', value: '288M', diff: '—' },
        yoy: { period: 'Q4 2020', value: '230M', diff: '-16.5%' }
      }
    },
    {
      icon: Percent,
      label: 'Profit Margin',
      value: '8%',
      previousValue: '12%',
      currency: null,
      change: '-4 pts',
      changeType: 'negative' as const,
      comparison: 'from 12%',
      tooltipData: {
        current: { period: 'Q4 2021', value: '8.0%', diff: '-4 pts' },
        previous: { period: 'Q3 2021', value: '12.0%', diff: '—' },
        yoy: { period: 'Q4 2020', value: '12.0%', diff: '-4 pts' }
      }
    },
    {
      icon: Activity,
      label: 'Operating Cash Flow',
      value: '-45M',
      previousValue: '125M',
      currency: 'VND',
      change: 'Negative',
      changeType: 'negative' as const,
      comparison: 'First time',
      tooltipData: {
        current: { period: 'Q4 2021', value: '-45M', diff: 'Negative' },
        previous: { period: 'Q3 2021', value: '125M', diff: '—' },
        yoy: { period: 'Q4 2020', value: '180M', diff: '-125%' }
      }
    }
  ];

  return (
    <div>
      {/* KPI Cards Grid */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div 
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-5 transition-all duration-200"
              style={{ boxShadow: 'var(--shadow-sm)' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Icon className="w-4 h-4 text-blue-600" />
                </div>
                
                {/* Tooltip-wrapped change badge */}
                <ComparisonTooltip data={metric.tooltipData}>
                  <div className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                    metric.changeType === 'positive' 
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                      : 'bg-rose-50 border-rose-200 text-rose-700'
                  }`}>
                    {metric.changeType === 'positive' ? '↑' : '↓'} {metric.change}
                  </div>
                </ComparisonTooltip>
              </div>
              
              <div className="text-[11px] text-gray-500 font-medium mb-1 uppercase tracking-wide">
                {metric.label}
              </div>
              
              {/* Current Value - with shimmer animation */}
              <div 
                className="flex items-baseline gap-1.5 mb-1 transition-opacity duration-500"
                style={{
                  opacity: isShimmering ? 0.95 : 1,
                  animation: isShimmering ? 'shimmer 1.5s ease-in-out' : 'none'
                }}
              >
                <span className="text-[24px] font-bold text-gray-900 tracking-tight">
                  {metric.value}
                </span>
                {metric.currency && (
                  <span className="text-[14px] text-gray-500">
                    {metric.currency}
                  </span>
                )}
              </div>

              <style>{`
                @keyframes shimmer {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.95; }
                }
              `}</style>

              {/* Comparison Value - Fades in when comparison mode is active */}
              <div 
                className="transition-opacity duration-200 ease-out"
                style={{ 
                  opacity: comparisonMode === 'comparison' ? 1 : 0,
                  height: comparisonMode === 'comparison' ? 'auto' : '0',
                  overflow: 'hidden'
                }}
              >
                <div className="flex items-baseline gap-1.5 mb-1 mt-2 pt-2 border-t border-gray-100">
                  <span className="text-[11px] text-gray-500 font-medium">Q3 2021:</span>
                  <span className="text-[16px] font-semibold text-gray-600 tracking-tight">
                    {metric.previousValue}
                  </span>
                  {metric.currency && (
                    <span className="text-[12px] text-gray-400">
                      {metric.currency}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="text-[11px] text-gray-500">
                {metric.comparison}
              </div>
            </div>
          );
        })}
      </div>

      {/* Collapsible Executive Summary Drawer */}
      <div 
        className="bg-white rounded-lg border border-gray-200 overflow-hidden"
        style={{ boxShadow: 'var(--shadow-sm)' }}
      >
        {/* Header - Always Visible */}
        <button
          onClick={() => setIsExecutiveSummaryOpen(!isExecutiveSummaryOpen)}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
            <span className="text-[13px] font-semibold text-gray-900">
              Executive Summary
            </span>
            <span className="text-[11px] text-gray-500">
              Top 5 insights you need to know
            </span>
          </div>
          <ChevronDown 
            className={`w-4 h-4 text-gray-500 transition-transform ${
              isExecutiveSummaryOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Collapsible Content */}
        {isExecutiveSummaryOpen && (
          <div className="px-4 pb-4 pt-2">
            <ExecutiveSummary isEmbedded={true} />
          </div>
        )}
      </div>
    </div>
  );
}