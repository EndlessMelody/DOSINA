import { Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface DatePickerDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  currentPeriod: string;
  onPeriodSelect: (period: string) => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

const periods = [
  { value: 'Q4 2021', label: 'Q4 2021' },
  { value: 'Q3 2021', label: 'Q3 2021' },
  { value: 'Q2 2021', label: 'Q2 2021' },
  { value: 'Q1 2021', label: 'Q1 2021' },
  { value: 'Q4 2020', label: 'Q4 2020' },
  { value: 'Q3 2020', label: 'Q3 2020' },
  { value: 'Q2 2020', label: 'Q2 2020' },
  { value: 'Q1 2020', label: 'Q1 2020' },
];

export function DatePickerDropdown({ 
  isOpen, 
  onClose, 
  currentPeriod, 
  onPeriodSelect,
  buttonRef 
}: DatePickerDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        left: rect.left,
      });
    }
  }, [isOpen, buttonRef]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose, buttonRef]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="fixed z-50 bg-white rounded-lg border border-gray-200 shadow-lg py-1 min-w-[160px]"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="px-2 py-1.5 border-b border-gray-100">
        <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide px-2">
          Select Period
        </div>
      </div>
      
      <div className="py-1 max-h-[280px] overflow-y-auto">
        {periods.map((period) => (
          <button
            key={period.value}
            onClick={() => {
              onPeriodSelect(period.value);
              onClose();
            }}
            className="w-full px-3 py-2 text-left text-[13px] font-medium hover:bg-gray-50 transition-colors flex items-center justify-between group"
          >
            <span className={currentPeriod === period.value ? 'text-blue-600' : 'text-gray-700'}>
              {period.label}
            </span>
            {currentPeriod === period.value && (
              <Check className="w-4 h-4 text-blue-600" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
