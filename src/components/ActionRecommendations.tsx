import { Target, AlertCircle, TrendingUp } from 'lucide-react';

export function ActionRecommendations() {
  const recommendations = [
    {
      priority: 'high' as const,
      category: 'Cash Flow',
      title: 'Improve Working Capital Management',
      description: 'Implement stricter payment collection policies and negotiate extended payment terms with suppliers',
      impact: 'Could improve cash flow by 15-20%',
      impactMetric: '+15-20%',
      impactLabel: 'Cash Flow',
      timeline: 'Immediate action required'
    },
    {
      priority: 'high' as const,
      category: 'Cost Control',
      title: 'Review S&A Expense Structure',
      description: 'Conduct thorough analysis of 20% increase in sales & administrative expenses to identify optimization opportunities',
      impact: 'Potential 5-8% margin improvement',
      impactMetric: '+5-8%',
      impactLabel: 'Margin',
      timeline: 'Within 30 days'
    },
    {
      priority: 'medium' as const,
      category: 'Growth',
      title: 'Maintain Revenue Momentum',
      description: 'Continue market expansion strategies while implementing cost efficiency measures',
      impact: 'Sustained 10-15% growth',
      impactMetric: '+10-15%',
      impactLabel: 'Growth',
      timeline: 'Ongoing strategy'
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6" style={{ boxShadow: 'var(--shadow-md)' }}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
          <Target className="w-4.5 h-4.5 text-blue-600" />
        </div>
        <div>
          <h2 className="text-[18px] font-semibold tracking-tight text-gray-900">
            Recommended Actions
          </h2>
          <p className="text-[12px] text-gray-500 mt-0.5">
            AI-suggested priorities based on financial analysis
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {recommendations.map((rec, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg border ${
              rec.priority === 'high' 
                ? 'bg-rose-50/50 border-rose-200' 
                : 'bg-amber-50/50 border-amber-200'
            }`}
          >
            {/* 2-Column Grid Layout */}
            <div className="grid grid-cols-[70%_30%] gap-4 items-center">
              {/* Left Column: Title + Description */}
              <div className="flex items-start gap-3">
                <AlertCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                  rec.priority === 'high' ? 'text-rose-600' : 'text-amber-600'
                }`} />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded ${
                      rec.priority === 'high'
                        ? 'bg-rose-100 text-rose-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {rec.priority} priority
                    </span>
                    <span className="text-[11px] text-gray-500">• {rec.category}</span>
                  </div>
                  <h3 className="text-[14px] font-semibold text-gray-900 leading-tight mb-2">
                    {rec.title}
                  </h3>
                  
                  <p className="text-[13px] text-gray-600 leading-[1.5] mb-3">
                    {rec.description}
                  </p>
                  
                  <div className="text-[12px] text-gray-500">
                    ⏱ {rec.timeline}
                  </div>
                </div>
              </div>

              {/* Right Column: Impact Metric (30%, vertically centered) */}
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[24px] font-bold text-emerald-600 leading-none mb-1">
                    {rec.impactMetric}
                  </div>
                  <div className="text-[11px] text-gray-600 font-medium">
                    {rec.impactLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="text-[13px] text-blue-600 hover:text-blue-700 font-medium transition-colors">
          View all recommendations (8) →
        </button>
      </div>
    </div>
  );
}