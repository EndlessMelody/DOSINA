import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Info } from 'lucide-react';

const singleData = [
  { name: 'Cost of Goods Sold', value: 40, color: '#3B82F6' },
  { name: 'S&A Expenses', value: 30, color: '#F97316' },
  { name: 'R&D Costs', value: 20, color: '#10B981' },
  { name: 'Other Expenses', value: 10, color: '#8B5CF6' },
];

const comparisonData = [
  { name: 'Cost of Goods Sold', current: 40, previous: 38, color: '#3B82F6', colorPrev: '#93C5FD' },
  { name: 'S&A Expenses', current: 30, previous: 28, color: '#F97316', colorPrev: '#FDBA74' },
  { name: 'R&D Costs', current: 20, previous: 22, color: '#10B981', colorPrev: '#6EE7B7' },
  { name: 'Other Expenses', current: 10, previous: 12, color: '#8B5CF6', colorPrev: '#C4B5FD' },
];

// Calculate total expenses (example: $2.2M based on percentages)
const totalExpenses = 2.2;

// Premium label component with hierarchy: percentage bold + color matched, category name below in grey
const renderPremiumLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  name,
  percent,
  fill,
}: any) => {
  const RADIAN = Math.PI / 180;
  
  // Label position - closer to chart with horizontal connector
  const labelRadius = outerRadius + 45;
  const x = cx + labelRadius * Math.cos(-midAngle * RADIAN);
  const y = cy + labelRadius * Math.sin(-midAngle * RADIAN);
  
  // Connector endpoints
  const connectorStartX = cx + (outerRadius + 8) * Math.cos(-midAngle * RADIAN);
  const connectorStartY = cy + (outerRadius + 8) * Math.sin(-midAngle * RADIAN);
  const connectorMidX = cx + (outerRadius + 20) * Math.cos(-midAngle * RADIAN);
  const connectorMidY = cy + (outerRadius + 20) * Math.sin(-midAngle * RADIAN);
  
  // Horizontal line extension
  const horizontalExtension = x > cx ? 15 : -15;
  const connectorEndX = connectorMidX + horizontalExtension;
  
  const textAnchor = x > cx ? 'start' : 'end';

  return (
    <g>
      {/* Connector: dot at start, horizontal line */}
      <circle cx={connectorStartX} cy={connectorStartY} r={2.5} fill={fill} />
      <line
        x1={connectorStartX}
        y1={connectorStartY}
        x2={connectorEndX}
        y2={connectorMidY}
        stroke="#D1D5DB"
        strokeWidth={1.5}
      />
      
      {/* Percentage (larger, bold, color-matched) */}
      <text
        x={x}
        y={y - 8}
        textAnchor={textAnchor}
        fill={fill}
        fontSize="16px"
        fontWeight="700"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      
      {/* Category name (smaller, muted grey) */}
      <text
        x={x}
        y={y + 6}
        textAnchor={textAnchor}
        fill="#6B7280"
        fontSize="12px"
        fontWeight="500"
      >
        {name}
      </text>
    </g>
  );
};

// Comparison mode labels
const renderComparisonLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  name,
  payload,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 35;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
  const x1 = cx + (outerRadius + 5) * Math.cos(-midAngle * RADIAN);
  const y1 = cy + (outerRadius + 5) * Math.sin(-midAngle * RADIAN);
  const x2 = cx + (outerRadius + 20) * Math.cos(-midAngle * RADIAN);
  const y2 = cy + (outerRadius + 20) * Math.sin(-midAngle * RADIAN);

  const textAnchor = x > cx ? 'start' : 'end';

  return (
    <g>
      <path
        d={`M ${x1},${y1} L ${x2},${y2} L ${x},${y}`}
        stroke="#9ca3af"
        strokeWidth={1}
        fill="none"
      />
      <text
        x={x}
        y={y - 12}
        textAnchor={textAnchor}
        fill="#4b5563"
        fontSize="11px"
        fontWeight="400"
      >
        {name}
      </text>
      <text
        x={x}
        y={y + 2}
        textAnchor={textAnchor}
        fill="#111827"
        fontSize="12px"
        fontWeight="700"
      >
        {`Q4: ${payload.current}%`}
      </text>
      <text
        x={x}
        y={y + 14}
        textAnchor={textAnchor}
        fill="#6b7280"
        fontSize="11px"
        fontWeight="600"
      >
        {`Q3: ${payload.previous}%`}
      </text>
    </g>
  );
};

// Center label component for donut hole
const renderCenterLabel = (cx: number, cy: number) => {
  return (
    <g>
      {/* Total value - large and bold */}
      <text
        x={cx}
        y={cy - 5}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#111827"
        fontSize="32px"
        fontWeight="700"
      >
        ${totalExpenses}M
      </text>
      {/* Secondary label - smaller, muted */}
      <text
        x={cx}
        y={cy + 18}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#6B7280"
        fontSize="13px"
        fontWeight="500"
      >
        Total Expenses
      </text>
    </g>
  );
};

interface ExpenseBreakdownChartProps {
  comparisonMode?: 'single' | 'comparison';
}

export function ExpenseBreakdownChart({ comparisonMode = 'single' }: ExpenseBreakdownChartProps) {
  const isSingleMode = comparisonMode === 'single';

  return (
    <div className="flex flex-col relative">
      {/* Single Mode Chart */}
      <div 
        className="transition-opacity duration-200 ease-out"
        style={{ 
          opacity: isSingleMode ? 1 : 0,
          position: isSingleMode ? 'relative' : 'absolute',
          width: '100%',
          pointerEvents: isSingleMode ? 'auto' : 'none'
        }}
      >
        <div className="relative">
          {/* Key Takeaway Badge - Top Right */}
          <div className="absolute top-0 right-0 flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 max-w-[280px]">
            <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[11px] font-semibold text-blue-900 mb-0.5">Key Takeaway</div>
              <p className="text-[12px] text-blue-700 leading-[1.4]">
                COGS represents the largest expense at 40%, followed by S&A at 30%
              </p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={singleData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                innerRadius={65}
                fill="#8884d8"
                dataKey="value"
                label={renderPremiumLabel}
                strokeWidth={3}
                stroke="#ffffff"
                strokeLinecap="round"
              >
                {singleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  fontSize: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                formatter={(value: number) => [`${value}%`, '']}
                labelStyle={{ fontWeight: 600, color: '#111827', fontSize: '12px' }}
                itemStyle={{ color: '#4b5563', fontSize: '12px' }}
              />
              {/* Center label using custom component */}
              {renderCenterLabel(
                typeof window !== 'undefined' ? window.innerWidth * 0.5 : 200,
                200
              )}
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Comparison Mode Chart - Two Donut Charts Side by Side */}
      <div 
        className="transition-opacity duration-200 ease-out"
        style={{ 
          opacity: !isSingleMode ? 1 : 0,
          position: !isSingleMode ? 'relative' : 'absolute',
          top: 0,
          width: '100%',
          pointerEvents: !isSingleMode ? 'auto' : 'none'
        }}
      >
        <div className="grid grid-cols-2 gap-8">
          {/* Q4 2021 - Current */}
          <div>
            <ResponsiveContainer width="100%" height={340}>
              <PieChart>
                <Pie
                  data={comparisonData}
                  cx="50%"
                  cy="45%"
                  labelLine={false}
                  outerRadius={70}
                  innerRadius={45}
                  fill="#8884d8"
                  dataKey="current"
                  strokeWidth={3}
                  stroke="#fff"
                  strokeLinecap="round"
                >
                  {comparisonData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    fontSize: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                  formatter={(value: number) => [`${value}%`, 'Q4 2021']}
                  labelStyle={{ fontWeight: 600, color: '#111827', fontSize: '12px' }}
                  itemStyle={{ color: '#4b5563', fontSize: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="text-center -mt-8">
              <p className="text-[13px] font-semibold text-gray-900">Q4 2021</p>
              <p className="text-[11px] text-gray-500">Current Period</p>
            </div>
          </div>

          {/* Q3 2021 - Previous */}
          <div>
            <ResponsiveContainer width="100%" height={340}>
              <PieChart>
                <Pie
                  data={comparisonData}
                  cx="50%"
                  cy="45%"
                  labelLine={false}
                  outerRadius={70}
                  innerRadius={45}
                  fill="#8884d8"
                  dataKey="previous"
                  strokeWidth={3}
                  stroke="#fff"
                  strokeLinecap="round"
                >
                  {comparisonData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.colorPrev} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    fontSize: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                  formatter={(value: number) => [`${value}%`, 'Q3 2021']}
                  labelStyle={{ fontWeight: 600, color: '#111827', fontSize: '12px' }}
                  itemStyle={{ color: '#4b5563', fontSize: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="text-center -mt-8">
              <p className="text-[13px] font-semibold text-gray-600">Q3 2021</p>
              <p className="text-[11px] text-gray-500">Previous Period</p>
            </div>
          </div>
        </div>

        {/* Legend for Comparison Mode */}
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 justify-center">
          {comparisonData.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.colorPrev }}></div>
              </div>
              <span className="text-[12px] text-gray-700">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
