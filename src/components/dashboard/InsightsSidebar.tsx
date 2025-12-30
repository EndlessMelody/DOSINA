import { Lightbulb, TrendingUp, TrendingDown, AlertTriangle, X } from 'lucide-react';
import { useState } from 'react';

interface InsightsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InsightsSidebar({ isOpen, onClose }: InsightsSidebarProps) {
  const insights = [
    {
      type: 'trend' as const,
      title: 'Revenue Growing Steadily',
      description: 'Revenue has increased for 4 consecutive quarters, with Q4 showing +15% growth',
      timestamp: '2 hours ago',
      priority: 'high'
    },
    {
      type: 'warning' as const,
      title: 'Cash Flow Alert',
      description: 'Operating cash flow turned negative. Recommend reviewing AR/AP cycles',
      timestamp: '2 hours ago',
      priority: 'critical'
    },
    {
      type: 'opportunity' as const,
      title: 'Cost Optimization',
      description: 'S&A expenses up 20%. Potential savings of 8-10% identified in overhead',
      timestamp: '3 hours ago',
      priority: 'medium'
    },
    {
      type: 'trend' as const,
      title: 'Margin Compression',
      description: 'Net margin decreased 4 percentage points despite revenue growth',
      timestamp: '3 hours ago',
      priority: 'high'
    },
    {
      type: 'opportunity' as const,
      title: 'COGS Efficiency',
      description: 'COGS as % of revenue remained stable, indicating good operational efficiency',
      timestamp: '4 hours ago',
      priority: 'low'
    }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="fixed right-0 top-0 bottom-0 w-[400px] bg-white border-l border-gray-200 z-50 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-4.5 h-4.5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-[16px] font-semibold text-gray-900">Live Insights</h2>
                <p className="text-[12px] text-gray-500">Real-time analysis updates</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Insights List */}
        <div className="p-6 space-y-4">
          {insights.map((insight, index) => {
            const getIcon = () => {
              switch(insight.type) {
                case 'warning': return AlertTriangle;
                case 'opportunity': return TrendingUp;
                default: return TrendingDown;
              }
            };

            const getStyles = () => {
              switch(insight.priority) {
                case 'critical':
                  return { bg: 'bg-rose-50', border: 'border-rose-200', icon: 'text-rose-600', dot: 'bg-rose-600' };
                case 'high':
                  return { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-600', dot: 'bg-amber-600' };
                case 'medium':
                  return { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', dot: 'bg-blue-600' };
                default:
                  return { bg: 'bg-gray-50', border: 'border-gray-200', icon: 'text-gray-600', dot: 'bg-gray-400' };
              }
            };

            const Icon = getIcon();
            const styles = getStyles();

            return (
              <div
                key={index}
                className={`p-4 rounded-lg border ${styles.border} ${styles.bg} hover:shadow-sm transition-all cursor-pointer`}
              >
                <div className="flex items-start gap-3">
                  <Icon className={`w-4 h-4 ${styles.icon} flex-shrink-0 mt-0.5`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-[13px] font-semibold text-gray-900 leading-tight">
                        {insight.title}
                      </h3>
                      <div className={`w-1.5 h-1.5 ${styles.dot} rounded-full flex-shrink-0 mt-1.5`}></div>
                    </div>
                    <p className="text-[12px] text-gray-600 leading-[1.5] mb-2">
                      {insight.description}
                    </p>
                    <span className="text-[11px] text-gray-500">
                      {insight.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
          <button className="w-full px-4 py-2.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors text-[13px] font-medium">
            View All Insights (12)
          </button>
        </div>
      </div>
    </>
  );
}
