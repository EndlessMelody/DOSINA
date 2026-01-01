import { useState, useRef, useEffect } from 'react';

interface ComparisonData {
  current: { period: string; value: string; diff: string };
  previous: { period: string; value: string; diff: string };
  yoy: { period: string; value: string; diff: string };
}

interface ComparisonTooltipProps {
  data: ComparisonData;
  children: React.ReactNode;
}

export function ComparisonTooltip({ data, children }: ComparisonTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      
      // Position tooltip above the trigger, centered
      const left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
      const top = triggerRect.top - tooltipRect.height - 8;
      
      setPosition({ top, left });
    }
  }, [isVisible]);

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-help"
      >
        {children}
      </div>

      {isVisible && (
        <div
          ref={tooltipRef}
          className="fixed z-50 pointer-events-none"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          <div className="bg-gray-900 text-white rounded-lg shadow-xl p-3">
            {/* Mini Table */}
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wide pb-2 pr-4">
                    Period
                  </th>
                  <th className="text-right text-[10px] font-semibold text-gray-400 uppercase tracking-wide pb-2 pr-3">
                    Value
                  </th>
                  <th className="text-right text-[10px] font-semibold text-gray-400 uppercase tracking-wide pb-2">
                    Diff
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Current Row */}
                <tr>
                  <td className="text-[12px] text-gray-300 pt-2 pr-4 whitespace-nowrap">
                    {data.current.period}
                  </td>
                  <td className="text-[12px] font-semibold text-white text-right pt-2 pr-3 whitespace-nowrap">
                    {data.current.value}
                  </td>
                  <td className="text-[12px] font-semibold text-white text-right pt-2 whitespace-nowrap">
                    {data.current.diff}
                  </td>
                </tr>
                
                {/* Previous Row */}
                <tr>
                  <td className="text-[12px] text-gray-300 pt-1.5 pr-4 whitespace-nowrap">
                    {data.previous.period}
                  </td>
                  <td className="text-[12px] text-gray-400 text-right pt-1.5 pr-3 whitespace-nowrap">
                    {data.previous.value}
                  </td>
                  <td className="text-[12px] text-gray-400 text-right pt-1.5 whitespace-nowrap">
                    {data.previous.diff}
                  </td>
                </tr>
                
                {/* YoY Row */}
                <tr className="border-t border-gray-700">
                  <td className="text-[12px] text-gray-300 pt-2 pr-4 whitespace-nowrap">
                    {data.yoy.period}
                  </td>
                  <td className="text-[12px] text-gray-400 text-right pt-2 pr-3 whitespace-nowrap">
                    {data.yoy.value}
                  </td>
                  <td className={`text-[12px] font-semibold text-right pt-2 whitespace-nowrap ${
                    data.yoy.diff.startsWith('+') ? 'text-emerald-400' : 
                    data.yoy.diff.startsWith('-') ? 'text-rose-400' : 
                    'text-gray-400'
                  }`}>
                    {data.yoy.diff}
                  </td>
                </tr>
              </tbody>
            </table>
            
            {/* Arrow pointing down */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 -bottom-1"
              style={{ 
                width: 0, 
                height: 0, 
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid #111827'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
