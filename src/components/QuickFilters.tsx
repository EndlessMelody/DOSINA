import { Filter, X } from 'lucide-react';

interface QuickFiltersProps {
  activeFilters: string[];
  onFilterChange: (filters: string[]) => void;
}

export function QuickFilters({ activeFilters, onFilterChange }: QuickFiltersProps) {
  const availableFilters = [
    { id: 'revenue', label: 'Revenue', category: 'Metrics' },
    { id: 'profitability', label: 'Profitability', category: 'Metrics' },
    { id: 'cash-flow', label: 'Cash Flow', category: 'Metrics' },
    { id: 'expenses', label: 'Expenses', category: 'Metrics' },
    { id: 'positive', label: 'Positive Only', category: 'Type' },
    { id: 'warnings', label: 'Warnings', category: 'Type' },
  ];

  const toggleFilter = (label: string) => {
    const newFilters = activeFilters.includes(label) 
      ? activeFilters.filter(f => f !== label)
      : [...activeFilters, label];
    onFilterChange(newFilters);
  };

  const handleClearAll = () => {
    onFilterChange(['Revenue', 'Profitability']);
  };

  // Separate active and inactive chips
  const activeChips = availableFilters.filter(f => activeFilters.includes(f.label));
  const inactiveChips = availableFilters.filter(f => !activeFilters.includes(f.label));

  // Status text based on active filters
  const getStatusText = () => {
    if (activeFilters.length === 0) {
      return '0 filters active • Showing default view';
    } else if (activeFilters.length === 1) {
      return '1 filter active • Showing filtered results';
    } else {
      return `${activeFilters.length} filters active • Showing filtered results`;
    }
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
            onClick={handleClearAll}
            className="text-[12px] text-blue-600 hover:text-blue-700 font-medium transition-colors duration-150"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Chip row with grouped layout */}
      <div className="flex items-center gap-3">
        {/* Active chips group */}
        {activeChips.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {activeChips.map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.label)}
                className="px-3 py-1.5 rounded-md text-[12px] font-medium inline-flex items-center gap-1.5 bg-blue-600 text-white border border-blue-600"
                style={{
                  transition: 'all 250ms ease-out'
                }}
              >
                {filter.label}
                <X className="w-3 h-3" />
              </button>
            ))}
          </div>
        )}

        {/* Separator */}
        {activeChips.length > 0 && inactiveChips.length > 0 && (
          <div className="w-px h-6 bg-gray-200"></div>
        )}

        {/* Inactive chips group */}
        {inactiveChips.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {inactiveChips.map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.label)}
                className="px-3 py-1.5 rounded-md text-[12px] font-medium inline-flex items-center gap-1.5 bg-gray-50 text-gray-600 border border-gray-200"
                style={{
                  transition: 'background-color 120ms ease-out, color 120ms ease-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#EFF6FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F9FAFB';
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Status text - dynamic */}
      <div 
        className="mt-3 pt-3 border-t border-gray-100"
        style={{
          transition: 'opacity 150ms ease-out'
        }}
      >
        <span className="text-[11px] text-gray-500">
          {getStatusText()}
        </span>
      </div>
    </div>
  );
}
