import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const singleData = [
  { quarter: 'Q1', revenue: 1.8, netProfit: 0.22, netProfitMargin: 12.2 },
  { quarter: 'Q2', revenue: 2.0, netProfit: 0.24, netProfitMargin: 12.0 },
  { quarter: 'Q3', revenue: 2.1, netProfit: 0.25, netProfitMargin: 11.9 },
  { quarter: 'Q4', revenue: 2.4, netProfit: 0.19, netProfitMargin: 7.9 },
];

const comparisonData = [
  { quarter: 'Q1', revenue: 1.8, previousRevenue: 1.6, netProfitMargin: 12.2, previousMargin: 11.8 },
  { quarter: 'Q2', revenue: 2.0, previousRevenue: 1.8, netProfitMargin: 12.0, previousMargin: 12.5 },
  { quarter: 'Q3', revenue: 2.1, previousRevenue: 1.9, netProfitMargin: 11.9, previousMargin: 12.8 },
  { quarter: 'Q4', revenue: 2.4, previousRevenue: 2.1, netProfitMargin: 7.9, previousMargin: 12.0 },
];

interface RevenueChartProps {
  comparisonMode?: 'single' | 'comparison';
  showRevenue?: boolean;
}

export function RevenueChart({ comparisonMode = 'single', showRevenue = true }: RevenueChartProps) {
  const data = comparisonMode === 'comparison' ? comparisonData : singleData;
  const isSingleMode = comparisonMode === 'single';

  // Create data with revenue animated to zero when hidden
  const chartData = data.map(item => ({
    ...item,
    revenue: showRevenue ? item.revenue : 0,
    previousRevenue: showRevenue && 'previousRevenue' in item ? item.previousRevenue : 0
  }));

  return (
    <div className="relative">
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
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={singleData} margin={{ top: 10, right: 30, left: -20, bottom: 0 }}>
            <CartesianGrid 
              strokeDasharray="0" 
              stroke="#e5e7eb" 
              strokeOpacity={0.5}
              vertical={false}
            />
            <XAxis 
              dataKey="quarter" 
              stroke="#9ca3af"
              tick={{ fill: '#6b7280', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            {/* Left Y-Axis for Revenue */}
            <YAxis 
              yAxisId="left"
              stroke="#9ca3af"
              tick={{ fill: '#6b7280', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
              label={{ 
                value: 'Billion VND', 
                angle: -90, 
                position: 'insideLeft',
                style: { fontSize: 11, fill: '#9ca3af' }
              }}
            />
            {/* Right Y-Axis for Net Profit Margin % */}
            <YAxis 
              yAxisId="right"
              orientation="right"
              stroke="#F97316"
              tick={{ fill: '#F97316', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#F97316', strokeWidth: 1.5 }}
              label={{ 
                value: 'Net Profit %', 
                angle: 90, 
                position: 'insideRight',
                style: { fontSize: 11, fill: '#F97316' }
              }}
              domain={[0, 15]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '8px 12px',
                fontSize: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              formatter={(value: number, name: string) => {
                if (name === 'Revenue') return [`${value.toFixed(2)}B VND`, name];
                if (name === 'Net Profit Margin') return [`${value.toFixed(1)}%`, name];
                return [value, name];
              }}
              labelStyle={{ fontWeight: 600, color: '#111827', marginBottom: '4px', fontSize: '12px' }}
              itemStyle={{ color: '#4b5563', fontSize: '12px' }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '16px', fontSize: '12px' }}
              iconType="circle"
              iconSize={8}
            />
            <Bar 
              dataKey="revenue" 
              fill="#3B82F6" 
              name="Revenue"
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
              yAxisId="left"
            />
            <Line 
              type="monotone" 
              dataKey="netProfitMargin" 
              stroke="#F97316" 
              strokeWidth={2.5}
              name="Net Profit Margin"
              dot={{ fill: '#F97316', r: 4, strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 5 }}
              yAxisId="right"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Comparison Mode Chart */}
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
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={chartData} margin={{ top: 10, right: 30, left: -20, bottom: 0 }}>
            <CartesianGrid 
              strokeDasharray="0" 
              stroke="#e5e7eb" 
              strokeOpacity={0.5}
              vertical={false}
            />
            <XAxis 
              dataKey="quarter" 
              stroke="#9ca3af"
              tick={{ fill: '#6b7280', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            {/* Left Y-Axis for Revenue */}
            <YAxis 
              yAxisId="left"
              stroke="#9ca3af"
              tick={{ fill: '#6b7280', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
              label={{ 
                value: 'Billion VND', 
                angle: -90, 
                position: 'insideLeft',
                style: { fontSize: 11, fill: '#9ca3af' }
              }}
            />
            {/* Right Y-Axis for Net Profit Margin % */}
            <YAxis 
              yAxisId="right"
              orientation="right"
              stroke="#F97316"
              tick={{ fill: '#F97316', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#F97316', strokeWidth: 1.5 }}
              label={{ 
                value: 'Net Profit %', 
                angle: 90, 
                position: 'insideRight',
                style: { fontSize: 11, fill: '#F97316' }
              }}
              domain={[0, 15]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '8px 12px',
                fontSize: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              formatter={(value: number, name: string) => {
                if (name === 'Q4 2021' || name === 'Q3 2021') return [`${value.toFixed(2)}B VND`, name];
                if (name === 'Margin Q4' || name === 'Margin Q3') return [`${value.toFixed(1)}%`, name];
                return [value, name];
              }}
              labelStyle={{ fontWeight: 600, color: '#111827', marginBottom: '4px', fontSize: '12px' }}
              itemStyle={{ color: '#4b5563', fontSize: '12px' }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '16px', fontSize: '12px' }}
              iconType="circle"
              iconSize={8}
            />
            {/* Grouped Bars - Current Period */}
            <Bar 
              dataKey="revenue" 
              fill="#3B82F6" 
              name="Q4 2021"
              radius={[4, 4, 0, 0]}
              maxBarSize={30}
              yAxisId="left"
            />
            {/* Grouped Bars - Previous Period */}
            <Bar 
              dataKey="previousRevenue" 
              fill="#93C5FD" 
              name="Q3 2021"
              radius={[4, 4, 0, 0]}
              maxBarSize={30}
              yAxisId="left"
            />
            {/* Lines for Margins */}
            <Line 
              type="monotone" 
              dataKey="netProfitMargin" 
              stroke="#F97316" 
              strokeWidth={2.5}
              name="Margin Q4"
              dot={{ fill: '#F97316', r: 4, strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 5 }}
              yAxisId="right"
            />
            <Line 
              type="monotone" 
              dataKey="previousMargin" 
              stroke="#FDBA74" 
              strokeWidth={2.5}
              strokeDasharray="5 5"
              name="Margin Q3"
              dot={{ fill: '#FDBA74', r: 4, strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 5 }}
              yAxisId="right"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}