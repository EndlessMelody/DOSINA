import { TrendingUp, TrendingDown } from 'lucide-react';

interface BenchmarkIndicatorProps {
  metric: string;
  value: number;
  industryAverage: number;
  unit: string;
}

export function BenchmarkIndicator({ metric, value, industryAverage, unit }: BenchmarkIndicatorProps) {
  const difference = value - industryAverage;
  const percentDiff = ((difference / industryAverage) * 100).toFixed(1);
  const isAbove = difference > 0;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4" style={{ boxShadow: 'var(--shadow-sm)' }}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-[11px] text-gray-500 font-medium uppercase tracking-wide mb-1">
            {metric}
          </div>
          <div className="text-[20px] font-semibold text-gray-900 tracking-tight">
            {value}{unit}
          </div>
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded border text-[11px] font-semibold ${
          isAbove 
            ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
            : 'bg-rose-50 border-rose-200 text-rose-700'
        }`}>
          {isAbove ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {Math.abs(Number(percentDiff))}%
        </div>
      </div>

      {/* Benchmark Bar */}
      <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
        <div 
          className={`absolute left-0 top-0 h-full rounded-full ${
            isAbove ? 'bg-emerald-500' : 'bg-rose-500'
          }`}
          style={{ width: `${Math.min((value / (industryAverage * 1.5)) * 100, 100)}%` }}
        ></div>
        <div 
          className="absolute top-0 w-0.5 h-full bg-blue-600"
          style={{ left: `${(industryAverage / (industryAverage * 1.5)) * 100}%` }}
        ></div>
      </div>

      <div className="flex items-center justify-between text-[11px]">
        <span className="text-gray-600">
          Industry Avg: <span className="font-semibold text-gray-900">{industryAverage}{unit}</span>
        </span>
        <span className={isAbove ? 'text-emerald-600' : 'text-rose-600'}>
          {isAbove ? 'Above' : 'Below'} average
        </span>
      </div>
    </div>
  );
}
