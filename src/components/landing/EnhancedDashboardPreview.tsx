import { TrendingUp, TrendingDown, DollarSign, PieChart, Activity, Sparkles, Bell, Zap, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function EnhancedDashboardPreview() {
  const [activeTab, setActiveTab] = useState<'overview' | 'revenue' | 'insights'>('overview');

  return (
    <div className="relative">
      {/* Enhanced multi-layer glow */}
      <div className="absolute -inset-16 bg-gradient-to-br from-blue-500/[0.15] via-indigo-500/[0.08] to-violet-500/[0.05] rounded-3xl blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute -inset-12 bg-gradient-to-tl from-cyan-400/[0.1] to-blue-400/[0.05] rounded-2xl blur-2xl"></div>
      
      {/* Focus Light - Subtle visual guidance toward key metrics */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-blue-500/[0.06] rounded-full blur-[60px]"></div>
      </div>
      
      {/* Floating decorative shapes */}
      <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl"></div>

      {/* Browser chrome mockup */}
      <div className="relative z-10 group">
        {/* Browser header */}
        <div className="bg-gray-100 rounded-t-xl border border-gray-200/80 border-b-0 px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 ml-4 h-5 bg-white rounded-md border border-gray-200 px-2 flex items-center">
            <div className="w-2 h-2 text-gray-400 mr-1.5"></div>
            <span className="text-[9px] text-gray-500">app.dosina.com/dashboard</span>
          </div>
        </div>

        {/* Main Dashboard Card */}
        <div 
          className="bg-white rounded-b-xl border border-gray-200/80 border-t-0 p-6 relative transition-transform duration-300 group-hover:scale-[1.02]"
          style={{ 
            boxShadow: '0 20px 40px -8px rgb(0 0 0 / 0.12), 0 0 0 1px rgb(0 0 0 / 0.02), 0 0 80px -20px rgb(37 99 235 / 0.3)',
          }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-transparent rounded-b-xl pointer-events-none"></div>

          {/* Header */}
          <div className="flex items-center justify-between mb-5 relative">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center" style={{ boxShadow: '0 4px 12px rgb(37 99 235 / 0.4)' }}>
                <Activity className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <span className="text-[13px] font-bold text-gray-900 block">Q4 2021 Overview</span>
                {/* "AI Is Alive" Signal - Subtle status indicator */}
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{ animationDuration: '2s' }}></div>
                  <span className="text-[10px] text-gray-500">Insights updated moments ago</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-200/50">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 8px rgb(16 185 129 / 0.6)' }}></div>
              <span className="text-[11px] font-bold text-emerald-700">LIVE</span>
            </div>
          </div>

          {/* Enhanced Tabs */}
          <div className="flex gap-1.5 mb-5 p-1 bg-gray-100/80 rounded-lg border border-gray-200/50">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 px-3 py-2 rounded-md text-[12px] font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-white text-gray-900 shadow-sm border border-gray-200/50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('revenue')}
              className={`flex-1 px-3 py-2 rounded-md text-[12px] font-semibold transition-all ${
                activeTab === 'revenue'
                  ? 'bg-white text-gray-900 shadow-sm border border-gray-200/50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              Revenue
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`flex-1 px-3 py-2 rounded-md text-[12px] font-semibold transition-all ${
                activeTab === 'insights'
                  ? 'bg-white text-gray-900 shadow-sm border border-gray-200/50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              Insights
            </button>
          </div>

          {/* Content */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              {/* Enhanced Bento grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-blue-50 to-blue-50/30 border border-blue-200/70 rounded-lg p-4 hover:border-blue-300 transition-all group/card">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center">
                      <DollarSign className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">Revenue</span>
                  </div>
                  <div className="text-[24px] font-bold text-gray-900 mb-1.5">$2.4M</div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                    <TrendingUp className="w-2.5 h-2.5" />
                    +15%
                  </span>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-50/30 border border-orange-200/70 rounded-lg p-4 hover:border-orange-300 transition-all group/card">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-5 h-5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-md flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">Profit</span>
                  </div>
                  <div className="text-[24px] font-bold text-gray-900 mb-1.5">$192K</div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-700 text-[10px] font-bold border border-rose-200">
                    <TrendingDown className="w-2.5 h-2.5" />
                    -33%
                  </span>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-50/30 border border-purple-200/70 rounded-lg p-4 hover:border-purple-300 transition-all group/card">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-md flex items-center justify-center">
                      <PieChart className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">Margin</span>
                  </div>
                  <div className="text-[24px] font-bold text-gray-900 mb-1.5">8%</div>
                  <span className="text-[10px] text-gray-600 font-medium">-4 pts YoY</span>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-emerald-50/30 border border-emerald-200/70 rounded-lg p-4 hover:border-emerald-300 transition-all group/card">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-5 h-5 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-md flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">Score</span>
                  </div>
                  <div className="text-[24px] font-bold text-gray-900 mb-1.5">68</div>
                  <span className="text-[10px] text-emerald-700 font-semibold">Good Health</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'revenue' && (
            <div className="space-y-4">
              <div className="relative flex items-end justify-between gap-2.5 h-32 bg-gradient-to-br from-gray-50 to-gray-50/50 border border-gray-200/70 rounded-lg p-4">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-transparent rounded-lg"></div>
                <div className="w-1/4 flex flex-col items-center gap-1.5 relative">
                  <div className="w-full bg-gradient-to-t from-blue-600 to-blue-500 rounded-t-md relative" style={{ height: '45%' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-t-md"></div>
                  </div>
                  <span className="text-[10px] text-gray-500 font-semibold">Q1</span>
                </div>
                <div className="w-1/4 flex flex-col items-center gap-1.5 relative">
                  <div className="w-full bg-gradient-to-t from-blue-600 to-blue-500 rounded-t-md relative" style={{ height: '60%' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-t-md"></div>
                  </div>
                  <span className="text-[10px] text-gray-500 font-semibold">Q2</span>
                </div>
                <div className="w-1/4 flex flex-col items-center gap-1.5 relative">
                  <div className="w-full bg-gradient-to-t from-blue-600 to-blue-500 rounded-t-md relative" style={{ height: '75%' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-t-md"></div>
                  </div>
                  <span className="text-[10px] text-gray-500 font-semibold">Q3</span>
                </div>
                <div className="w-1/4 flex flex-col items-center gap-1.5 relative">
                  <div className="w-full bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400 rounded-t-md relative" style={{ height: '90%' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30 rounded-t-md"></div>
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-[10px] text-gray-900 font-bold">Q4</span>
                </div>
              </div>
              <div className="text-[12px] text-gray-600 leading-relaxed">
                Consistent growth trajectory with <span className="font-bold text-gray-900">15% QoQ increase</span> in Q4 2021
              </div>
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-emerald-50/30 border border-emerald-200/70 hover:border-emerald-300 transition-all">
                <div className="w-5 h-5 bg-emerald-500 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ boxShadow: '0 2px 8px rgb(16 185 129 / 0.3)' }}>
                  <TrendingUp className="w-3 h-3 text-white" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-gray-900 mb-0.5">Strong Revenue Growth</div>
                  <div className="text-[11px] text-gray-600 leading-relaxed">Revenue increased 15% QoQ, outpacing industry average</div>
                </div>
              </div>
              
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-gradient-to-r from-rose-50 to-rose-50/30 border border-rose-200/70 hover:border-rose-300 transition-all">
                <div className="w-5 h-5 bg-rose-500 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ boxShadow: '0 2px 8px rgb(244 63 94 / 0.3)' }}>
                  <TrendingDown className="w-3 h-3 text-white" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-gray-900 mb-0.5">Margin Compression Alert</div>
                  <div className="text-[11px] text-gray-600 leading-relaxed">Net profit margin dropped to 8% due to increased costs</div>
                </div>
              </div>
              
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-gradient-to-r from-amber-50 to-amber-50/30 border border-amber-200/70 hover:border-amber-300 transition-all">
                <div className="w-5 h-5 bg-amber-500 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ boxShadow: '0 2px 8px rgb(245 158 11 / 0.3)' }}>
                  <span className="text-white text-[10px] font-bold">!</span>
                </div>
                <div>
                  <div className="text-[12px] font-bold text-gray-900 mb-0.5">Cash Flow Watch</div>
                  <div className="text-[11px] text-gray-600 leading-relaxed">Operating cash flow negative, monitor closely</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating notification badges */}
      <div 
        className="absolute -top-4 -right-4 bg-white rounded-lg px-3 py-2 border border-blue-200 shadow-lg z-20 hover:scale-110 transition-transform animate-bounce"
        style={{ 
          animationDuration: '3s',
          boxShadow: '0 8px 24px rgb(37 99 235 / 0.2)'
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center">
            <Bell className="w-3 h-3 text-white" />
          </div>
          <span className="text-[10px] font-bold text-gray-900">3 New Insights</span>
        </div>
      </div>

      <div 
        className="absolute -bottom-4 -left-4 bg-white rounded-lg px-3 py-2 border border-emerald-200 shadow-lg z-20 hover:scale-110 transition-transform"
        style={{ 
          boxShadow: '0 8px 24px rgb(16 185 129 / 0.2)'
        }}
      >
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-500" />
          <span className="text-[10px] font-bold text-gray-900">AI Verified</span>
        </div>
      </div>

      <div 
        className="absolute top-1/2 -left-6 bg-gradient-to-r from-violet-500 to-violet-600 rounded-lg p-2 shadow-lg z-20 hover:scale-110 transition-transform"
        style={{ 
          boxShadow: '0 8px 24px rgb(139 92 246 / 0.4)',
          transform: 'rotate(-8deg)'
        }}
      >
        <Zap className="w-4 h-4 text-white" />
      </div>
    </div>
  );
}