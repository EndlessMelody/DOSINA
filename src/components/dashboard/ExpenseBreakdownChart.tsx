import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Cost of Goods Sold', value: 40, color: '#3B82F6' },
  { name: 'S&A Expenses', value: 30, color: '#F97316' },
  { name: 'R&D Costs', value: 20, color: '#10B981' },
  { name: 'Other Expenses', value: 10, color: '#8B5CF6' },
];

export function ExpenseBreakdownChart() {
  return (
    <div className="flex flex-col">
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={95}
            innerRadius={55}
            fill="#8884d8"
            dataKey="value"
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            labelStyle={{ 
              fontSize: '13px', 
              fontWeight: 600, 
              fill: '#111827'
            }}
            strokeWidth={2}
            stroke="#fff"
          >
            {data.map((entry, index) => (
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
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-2.5 h-2.5 rounded-full flex-shrink-0" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-[13px] text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
