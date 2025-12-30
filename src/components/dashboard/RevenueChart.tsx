import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { quarter: 'Q1', revenue: 1.8, netProfit: 0.22 },
  { quarter: 'Q2', revenue: 2.0, netProfit: 0.24 },
  { quarter: 'Q3', revenue: 2.1, netProfit: 0.25 },
  { quarter: 'Q4', revenue: 2.4, netProfit: 0.19 },
];

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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
        <YAxis 
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
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '8px 12px',
            fontSize: '12px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}
          formatter={(value: number) => [`${value.toFixed(2)}B VND`, '']}
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
        />
        <Line 
          type="monotone" 
          dataKey="netProfit" 
          stroke="#F97316" 
          strokeWidth={2.5}
          name="Net Profit"
          dot={{ fill: '#F97316', r: 4, strokeWidth: 2, stroke: '#fff' }}
          activeDot={{ r: 5 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
