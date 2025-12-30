import { BarChart3, PieChart, Sparkles, TrendingUp, AlertTriangle, Lightbulb, Target } from 'lucide-react';
import { useState } from 'react';

export function VisualizationShowcase() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const visualizations = [
    {
      icon: BarChart3,
      title: 'Revenue Trend Analysis',
      color: 'blue',
      features: [
        'Auto-detected growth patterns',
        'YoY & QoQ comparisons',
        'Seasonal trend identification',
        'Forecast projections'
      ],
      chart: (
        <div className="flex items-end justify-between gap-2 h-32 px-3">
          {[40, 55, 70, 85, 95].map((height, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1.5">
              <div 
                className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t transition-all duration-700 hover:from-blue-500 hover:to-blue-300"
                style={{ 
                  height: `${hoveredCard === 0 ? height : height * 0.8}%`,
                  transitionDelay: `${idx * 50}ms`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-t"></div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      icon: PieChart,
      title: 'Profit & Loss Breakdown',
      color: 'purple',
      features: [
        'Automated cost categorization',
        'Margin analysis by segment',
        'Anomaly detection alerts',
        'Drill-down capabilities'
      ],
      chart: (
        <div className="flex items-center justify-center h-32 relative">
          {/* Pie chart representation */}
          <div className="relative w-28 h-28">
            <svg viewBox="0 0 100 100" className="transform -rotate-90">
              {/* Revenue - 40% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="20"
                strokeDasharray="251.2"
                strokeDashoffset="0"
                className="transition-all duration-700"
                style={{ 
                  strokeDashoffset: hoveredCard === 1 ? 0 : 50,
                  opacity: hoveredCard === 1 ? 1 : 0.8
                }}
              />
              {/* Costs - 35% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="20"
                strokeDasharray="251.2"
                strokeDashoffset="-100"
                className="transition-all duration-700"
                style={{ 
                  strokeDashoffset: hoveredCard === 1 ? -100 : -120,
                  opacity: hoveredCard === 1 ? 1 : 0.8
                }}
              />
              {/* Profit - 25% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#10B981"
                strokeWidth="20"
                strokeDasharray="251.2"
                strokeDashoffset="-188"
                className="transition-all duration-700"
                style={{ 
                  strokeDashoffset: hoveredCard === 1 ? -188 : -200,
                  opacity: hoveredCard === 1 ? 1 : 0.8
                }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-[20px] font-bold text-gray-900">100%</div>
                <div className="text-[9px] text-gray-500">Total</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Sparkles,
      title: 'AI-Generated Insights',
      color: 'indigo',
      features: [
        'Executive summary generation',
        'Risk & opportunity alerts',
        'Action recommendations',
        'Industry benchmarking'
      ],
      chart: (
        <div className="space-y-2 px-3 py-2">
          <div className={`flex items-start gap-2 p-2 rounded-lg bg-emerald-50 border border-emerald-200 transition-all duration-300 ${hoveredCard === 2 ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-60'}`}>
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="text-[10px] font-bold text-gray-900">Revenue momentum strong</div>
              <div className="text-[9px] text-gray-600">Growth accelerating QoQ</div>
            </div>
          </div>
          
          <div className={`flex items-start gap-2 p-2 rounded-lg bg-amber-50 border border-amber-200 transition-all duration-300 delay-75 ${hoveredCard === 2 ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-60'}`}>
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="text-[10px] font-bold text-gray-900">Watch cost trends</div>
              <div className="text-[9px] text-gray-600">Operating costs up 12%</div>
            </div>
          </div>
          
          <div className={`flex items-start gap-2 p-2 rounded-lg bg-blue-50 border border-blue-200 transition-all duration-300 delay-150 ${hoveredCard === 2 ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-60'}`}>
            <Lightbulb className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="text-[10px] font-bold text-gray-900">Optimize R&D spend</div>
              <div className="text-[9px] text-gray-600">Potential 8% efficiency gain</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { 
        bg: 'from-blue-50 to-blue-50/30', 
        border: 'border-blue-200/70 hover:border-blue-300',
        iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
        shadow: '0 4px 12px rgb(37 99 235 / 0.15)'
      },
      purple: { 
        bg: 'from-purple-50 to-purple-50/30', 
        border: 'border-purple-200/70 hover:border-purple-300',
        iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
        shadow: '0 4px 12px rgb(147 51 234 / 0.15)'
      },
      indigo: { 
        bg: 'from-indigo-50 to-indigo-50/30', 
        border: 'border-indigo-200/70 hover:border-indigo-300',
        iconBg: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
        shadow: '0 4px 12px rgb(99 102 241 / 0.15)'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-[36px] font-bold tracking-tight text-gray-900 mb-3">
          What You Get
        </h2>
        <p className="text-[16px] text-gray-600 max-w-2xl mx-auto">
          From raw financial data to <span className="font-semibold text-gray-900">actionable visual insights</span> in seconds
        </p>
      </div>

      {/* Interactive Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {visualizations.map((viz, idx) => {
          const Icon = viz.icon;
          const colors = getColorClasses(viz.color);
          
          return (
            <div
              key={idx}
              className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group`}
              style={{ 
                boxShadow: hoveredCard === idx ? colors.shadow : '0 1px 3px rgb(0 0 0 / 0.05)',
              }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 ${hoveredCard === idx ? 'scale-110' : 'scale-100'}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                  {viz.title}
                </h3>
                <ul className="space-y-2">
                  {viz.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-[13px] text-gray-700">
                      <Target className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chart Preview */}
              <div className="bg-white/60 backdrop-blur-sm border-t border-gray-200/50 p-4">
                {viz.chart}
              </div>

              {/* Hover state indicator */}
              <div className={`h-1 bg-gradient-to-r ${viz.color === 'blue' ? 'from-blue-500 to-blue-600' : viz.color === 'purple' ? 'from-purple-500 to-purple-600' : 'from-indigo-500 to-indigo-600'} transition-all duration-300 ${hoveredCard === idx ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <p className="text-[14px] text-gray-600">
          All visualizations are <span className="font-semibold text-gray-900">automatically generated</span> from your uploaded reports
        </p>
      </div>
    </section>
  );
}
