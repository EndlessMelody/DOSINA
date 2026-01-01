import { BarChart3, ArrowLeftRight } from 'lucide-react';
import { useState } from 'react';

interface ComparisonToggleProps {
  onModeChange: (mode: 'single' | 'comparison') => void;
}

export function ComparisonToggle({ onModeChange }: ComparisonToggleProps) {
  const [mode, setMode] = useState<'single' | 'comparison'>('single');

  const handleToggle = (newMode: 'single' | 'comparison') => {
    setMode(newMode);
    onModeChange(newMode);
  };

  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-lg border border-gray-200 bg-white" style={{ boxShadow: 'var(--shadow-sm)' }}>
      <button
        onClick={() => handleToggle('single')}
        className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-all inline-flex items-center gap-1.5 ${
          mode === 'single'
            ? 'bg-blue-50 text-blue-700 border border-blue-200'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <BarChart3 className="w-3.5 h-3.5" />
        Single Period
      </button>
      <button
        onClick={() => handleToggle('comparison')}
        className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-all inline-flex items-center gap-1.5 ${
          mode === 'comparison'
            ? 'bg-blue-50 text-blue-700 border border-blue-200'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <ArrowLeftRight className="w-3.5 h-3.5" />
        Compare Periods
      </button>
    </div>
  );
}
