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
    <div className={`${colors.bg} border ${colors.border} rounded-lg p-6`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-[11px] text-gray-600 font-medium mb-1 uppercase tracking-wide">
            Financial Health Score
          </div>
          <div className={`text-[13px] ${colors.text} font-semibold`}>
            {score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : score >= 40 ? 'Fair' : 'Poor'}
          </div>
        </div>
        
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white border border-gray-200">
          <span className={`text-[11px] font-semibold ${scoreDiff >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
            {scoreDiff >= 0 ? '↑' : '↓'} {Math.abs(scoreDiff)} pts
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Score Circle */}
        <div className="relative w-24 h-24">
          <svg className="transform -rotate-90 w-24 h-24">
            <circle
              cx="48"
              cy="48"
              r="45"
              stroke="#e5e7eb"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="48"
              cy="48"
              r="45"
              className={colors.ring}
              strokeWidth="6"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[28px] font-semibold text-gray-900 tracking-tight">{score}</span>
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-gray-600">Profitability</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-3 rounded-sm ${i <= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-gray-600">Liquidity</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-3 rounded-sm ${i <= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-gray-600">Growth</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-3 rounded-sm ${i <= 4 ? 'bg-blue-600' : 'bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
