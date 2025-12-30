import { BarChart3, Table2 } from 'lucide-react';

interface DataTableToggleProps {
  view: 'chart' | 'table';
  onViewChange: (view: 'chart' | 'table') => void;
}

export function DataTableToggle({ view, onViewChange }: DataTableToggleProps) {
  return (
    <div className="inline-flex items-center gap-0.5 p-0.5 rounded-md border border-gray-200 bg-gray-50">
      <button
        onClick={() => onViewChange('chart')}
        className={`px-2.5 py-1.5 rounded text-[12px] font-medium transition-all inline-flex items-center gap-1.5 ${
          view === 'chart'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <BarChart3 className="w-3.5 h-3.5" />
        Chart
      </button>
      <button
        onClick={() => onViewChange('table')}
        className={`px-2.5 py-1.5 rounded text-[12px] font-medium transition-all inline-flex items-center gap-1.5 ${
          view === 'table'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <Table2 className="w-3.5 h-3.5" />
        Table
      </button>
    </div>
  );
}
