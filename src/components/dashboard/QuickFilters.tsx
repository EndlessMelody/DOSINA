import { Filter, X } from 'lucide-react';
import { useState } from 'react';

export function QuickFilters() {
  const [activeFilters, setActiveFilters] = useState<string[]>(['Revenue', 'Profitability']);

  const availableFilters = [
    { id: 'revenue', label: 'Revenue', category: 'Metrics' },
    { id: 'profitability', label: 'Profitability', category: 'Metrics' },
    { id: 'cash-flow', label: 'Cash Flow', category: 'Metrics' },
    { id: 'expenses', label: 'Expenses', category: 'Metrics' },
    { id: 'positive', label: 'Positive Only', category: 'Type' },
    { id: 'warnings', label: 'Warnings', category: 'Type' },
  ];

  const toggleFilter = (label: string) => {
    setActiveFilters(prev => 
      prev.includes(label) 
        ? prev.filter(f => f !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4" style={{ boxShadow: 'var(--shadow-sm)' }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-600" />
          <span className="text-[13px] font-semibold text-gray-900">Quick Filters</span>
        </div>
        {activeFilters.length > 0 && (
          <button 
            onClick={() => setActiveFilters([])}
            className="text-[12px] text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {availableFilters.map((filter) => {
          const isActive = activeFilters.includes(filter.label);
          return (
            <button
              key={filter.id}
              onClick={() => toggleFilter(filter.label)}
              className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-all inline-flex items-center gap-1.5 ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'bg-gray-50 text-gray-600 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {filter.label}
              {isActive && <X className="w-3 h-3" />}
            </button>
          );
        })}
      </div>

      {activeFilters.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <span className="text-[11px] text-gray-500">
            {activeFilters.length} filter{activeFilters.length > 1 ? 's' : ''} active • Showing filtered results
          </span>
        </div>
      )}
    </div>
  );
}
