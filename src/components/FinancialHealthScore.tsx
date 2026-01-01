interface FinancialHealthScoreProps {
  score: number;
  trend: 'up' | 'down' | 'stable';
  previousScore: number;
}

export function FinancialHealthScore({ score, trend, previousScore }: FinancialHealthScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', ring: 'stroke-emerald-600' };
    if (score >= 60) return { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', ring: 'stroke-blue-600' };
    if (score >= 40) return { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', ring: 'stroke-amber-600' };
    return { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', ring: 'stroke-rose-600' };
  };

  const colors = getScoreColor(score);
  const scoreDiff = score - previousScore;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 relative overflow-hidden" style={{ boxShadow: 'var(--shadow-md)' }}>
      {/* Radial gradient background - subtle blue to white */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 25% 50%, #EFF6FF 0%, #FAFBFC 50%, #FFFFFF 100%)'
        }}
      />

      {/* Content - Two-zone horizontal layout */}
      <div className="relative z-10 flex items-center gap-8">
        {/* LEFT ZONE - Score Ring (~40% width) */}
        <div className="flex-[0.4] flex flex-col items-center justify-center">
          {/* Circular Score Ring */}
          <div className="relative w-36 h-36 mb-3">
            <svg className="transform -rotate-90 w-36 h-36">
              {/* Background track */}
              <circle
                cx="72"
                cy="72"
                r="64"
                stroke="#E5E7EB"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
              />
              {/* Progress ring */}
              <circle
                cx="72"
                cy="72"
                r="64"
                className={colors.ring}
                strokeWidth="12"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
              />
            </svg>
            {/* Score number only - centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[48px] font-bold text-gray-900 leading-none">{score}</span>
            </div>
          </div>

          {/* Trend indicator - below ring as caption */}
          <div className="text-center">
            <span className={`text-[13px] font-semibold ${scoreDiff >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
              {scoreDiff >= 0 ? '↑' : '↓'} {Math.abs(scoreDiff)} pts vs last week
            </span>
          </div>
        </div>

        {/* RIGHT ZONE - Sub-metrics with progress bars (~60% width) */}
        <div className="flex-[0.6] space-y-5">
          {/* Title section */}
          <div>
            <div className="text-[11px] text-gray-600 font-medium mb-1 uppercase tracking-wide">
              Financial Health Score
            </div>
            <div className={`text-[13px] ${colors.text} font-semibold`}>
              {score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : score >= 40 ? 'Fair' : 'Poor'}
            </div>
          </div>

          {/* Sub-metrics with horizontal progress bars */}
          <div className="space-y-4">
            {/* Profitability - 2/5 = 40% */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[13px] text-gray-700 font-medium">Profitability</span>
                <span className="text-[12px] text-gray-500">2/5</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-500"
                  style={{ width: '40%' }}
                />
              </div>
            </div>

            {/* Liquidity - 3/5 = 60% */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[13px] text-gray-700 font-medium">Liquidity</span>
                <span className="text-[12px] text-gray-500">3/5</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-500"
                  style={{ width: '60%' }}
                />
              </div>
            </div>

            {/* Growth - 4/5 = 80% */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[13px] text-gray-700 font-medium">Growth</span>
                <span className="text-[12px] text-gray-500">4/5</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-500"
                  style={{ width: '80%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}