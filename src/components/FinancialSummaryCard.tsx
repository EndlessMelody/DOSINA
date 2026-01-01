import { FileText, AlertTriangle, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export function FinancialSummaryCard() {
  const [tldrMode, setTldrMode] = useState<'stats' | 'ask'>('stats');

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8" style={{ boxShadow: 'var(--shadow-md)' }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
          <FileText className="w-4.5 h-4.5 text-blue-600" />
        </div>
        <h2 className="text-[18px] font-semibold tracking-tight text-gray-900">
          Financial Summary
        </h2>
      </div>
      
      <div className="space-y-4 text-[14px] leading-[1.7] text-gray-600">
        <p>
          The company demonstrated strong top-line growth in Q4 2021, with{' '}
          <span className="font-bold bg-[#DCFCE7] text-[#166534] px-1 rounded">revenue increasing by 15%</span>{' '}
          compared to Q3, reaching 2.4 billion VND. This growth was primarily driven by expanded 
          market penetration and successful product launches.
        </p>
        
        <p>
          However, profitability metrics show concerning trends. The{' '}
          <span className="font-bold bg-[#FEE2E2] text-[#991B1B] px-1 rounded">net profit margin declined from 12% to 8%</span>, reflecting a{' '}
          <span className="font-bold bg-[#FEE2E2] text-[#991B1B] px-1 rounded">33% drop in absolute net profit</span>{' '}
          to 192 million VND. This compression was largely attributed to a 20% surge in operating expenses, 
          particularly in sales and administrative costs.
        </p>
        
        <div className="pt-4 border-t border-gray-100">
          <p>
            Most notably,{' '}
            <span className="font-bold bg-[#FEE2E2] text-[#991B1B] px-1 rounded">cash flow from operations turned negative</span>{' '}
            for the first time in recent quarters, signaling potential liquidity challenges. Management should prioritize{' '}
            <span className="font-bold text-[#111827]">expense optimization and working capital efficiency</span>{' '}
            to restore sustainable profitability while maintaining growth momentum.
          </p>
        </div>
      </div>

      {/* Visual TL;DR Section */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-semibold text-gray-700 uppercase tracking-wide">
            Visual TL;DR
          </span>
          <button 
            onClick={() => setTldrMode(tldrMode === 'stats' ? 'ask' : 'stats')}
            className="text-[11px] text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            {tldrMode === 'stats' ? 'Ask the AI' : 'Show Stats'}
          </button>
        </div>

        {/* Key Stat Row (Default State) */}
        {tldrMode === 'stats' && (
          <div className="grid grid-cols-3 gap-4">
            {/* Revenue Tile */}
            <div className="bg-[#F9FAFB] rounded-lg p-4">
              <div className="text-[11px] text-gray-500 font-medium mb-2">Revenue</div>
              <div className="text-[24px] font-bold text-gray-900 leading-none mb-1.5">$2.4B</div>
              <div className="text-[13px] font-semibold text-[#166534] flex items-center gap-1">
                <span>▲ 15%</span>
              </div>
            </div>

            {/* Net Profit Tile */}
            <div className="bg-[#F9FAFB] rounded-lg p-4">
              <div className="text-[11px] text-gray-500 font-medium mb-2">Net Profit</div>
              <div className="text-[24px] font-bold text-gray-900 leading-none mb-1.5">192M</div>
              <div className="text-[13px] font-semibold text-[#991B1B] flex items-center gap-1">
                <span>▼ 33%</span>
              </div>
            </div>

            {/* Cash Flow Tile */}
            <div className="bg-[#F9FAFB] rounded-lg p-4">
              <div className="text-[11px] text-gray-500 font-medium mb-2">Cash Flow</div>
              <div className="text-[24px] font-bold text-[#991B1B] leading-none mb-1.5 flex items-center gap-2">
                Negative
                <AlertTriangle className="w-5 h-5" />
              </div>
            </div>
          </div>
        )}

        {/* Ask the AI (Secondary State) */}
        {tldrMode === 'ask' && (
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full border border-gray-300 bg-white text-[13px] text-gray-700 hover:border-blue-400 hover:bg-blue-50 transition-all">
              Ask: Why did profit drop 33%?
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 bg-white text-[13px] text-gray-700 hover:border-blue-400 hover:bg-blue-50 transition-all">
              Ask: How to improve cash flow?
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 bg-white text-[13px] text-gray-700 hover:border-blue-400 hover:bg-blue-50 transition-all">
              Ask: What's driving revenue growth?
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
        <span className="text-[11px] text-gray-500">
          Generated by AI • Last updated 2 hours ago
        </span>
        <button 
          onClick={() => window.alert('Opening full financial report...')}
          className="text-[12px] text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          View Full Report →
        </button>
      </div>
    </div>
  );
}