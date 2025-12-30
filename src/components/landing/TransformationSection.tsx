import { FileText, BarChart3, ArrowRight, Sparkles, Clock, CheckCircle, AlertCircle, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { useState } from 'react';

export function TransformationSection() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-[36px] font-bold tracking-tight text-gray-900 mb-3">
          See the Transformation
        </h2>
        <p className="text-[16px] text-gray-600 max-w-2xl mx-auto">
          From overwhelming financial reports to clear visual insights
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
        {/* BEFORE - Complex PDF Report */}
        <div className="relative group">
          <div className="mb-4">
            <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">Before</span>
          </div>

          <div className="relative">
            {/* Background pages - stacked effect */}
            <div className="absolute top-2 left-2 w-full h-full bg-gray-100 rounded-lg border border-gray-200 opacity-60"></div>
            <div className="absolute top-1 left-1 w-full h-full bg-gray-50 rounded-lg border border-gray-200 opacity-80"></div>
            
            {/* Main PDF page */}
            <div className="relative bg-white rounded-lg border-2 border-gray-300 p-6 shadow-lg">
              {/* PDF Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                <FileText className="w-5 h-5 text-gray-400" />
                <span className="text-[12px] font-semibold text-gray-700">Financial_Report_Q4_2021.pdf</span>
              </div>

              {/* Page Counter Badge */}
              <div className="absolute -top-3 -right-3 bg-rose-100 border-2 border-rose-200 rounded-full px-3 py-1.5 shadow-lg">
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-rose-600" />
                  <span className="text-[12px] font-bold text-rose-700">A ton of pages</span>
                </div>
              </div>

              {/* Dense content preview */}
              <div className="space-y-3 opacity-70">
                <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                <div className="space-y-1.5">
                  <div className="h-2 bg-gray-600 rounded w-full"></div>
                  <div className="h-2 bg-gray-600 rounded w-full"></div>
                  <div className="h-2 bg-gray-600 rounded w-5/6"></div>
                </div>
                <div className="border border-gray-300 rounded overflow-hidden mt-4">
                  <div className="grid grid-cols-4 gap-px bg-gray-300">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="bg-gray-100 h-6"></div>
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5 mt-3">
                  <div className="h-2 bg-gray-600 rounded w-full"></div>
                  <div className="h-2 bg-gray-600 rounded w-4/5"></div>
                </div>
              </div>

              {/* Time Indicator */}
              <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" />
                <span className="text-[11px] font-semibold text-gray-700">Estimated: 4 hours</span>
              </div>

              {/* Complexity Meter */}
              <div className="mt-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-rose-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <span className="text-[10px] font-semibold text-rose-700">High Complexity</span>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER - AI Transformation Arrow */}
        <div className="flex flex-col items-center justify-center lg:px-4 py-8 lg:py-0">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg" 
                 style={{ boxShadow: '0 8px 24px rgb(37 99 235 / 0.4)' }}
                 onMouseEnter={() => setIsAnimating(true)}
                 onMouseLeave={() => setIsAnimating(false)}>
              <ArrowRight className="w-7 h-7 text-white" />
              {isAnimating && (
                <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75"></div>
              )}
            </div>
          </div>

          <div className="mt-4 bg-white border border-blue-200 rounded-lg px-4 py-2 shadow-md">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <div className="text-center">
                <div className="text-[11px] font-bold text-gray-900">AI Analysis</div>
                <div className="text-[10px] text-blue-600 font-semibold">10 seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* AFTER - Visual Dashboard */}
        <div className="relative group">
          <div className="mb-4">
            <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">After</span>
          </div>

          <div className="relative bg-white rounded-xl border-2 border-blue-200 shadow-xl overflow-hidden" 
               style={{ boxShadow: '0 20px 40px -8px rgb(0 0 0 / 0.1), 0 0 0 1px rgb(0 0 0 / 0.02)' }}>
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-3 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                  <span className="text-[12px] font-bold text-gray-900">Q4 2021 Dashboard</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-200">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-[9px] font-bold text-emerald-700">LIVE</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-blue-50 to-blue-50/30 border border-blue-200/70 rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-[9px] font-bold text-gray-600 uppercase">Revenue</span>
                  </div>
                  <div className="text-[20px] font-bold text-gray-900 mb-1">$2.4M</div>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[9px] font-bold border border-emerald-200">
                    <TrendingUp className="w-2.5 h-2.5" />
                    +15%
                  </span>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-50/30 border border-orange-200/70 rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-orange-600" />
                    <span className="text-[9px] font-bold text-gray-600 uppercase">Profit</span>
                  </div>
                  <div className="text-[20px] font-bold text-gray-900 mb-1">$192K</div>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[9px] font-bold border border-rose-200">
                    <TrendingDown className="w-2.5 h-2.5" /> -33%
                  </span>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-50/50 border border-gray-200/70 rounded-lg p-3">
                <div className="flex items-end justify-between gap-2 h-20">
                  {[45, 60, 75, 90].map((height, idx) => (
                    <div key={idx} className="w-1/4 flex flex-col items-center gap-1">
                      <div className="w-full bg-gradient-to-t from-blue-600 to-blue-500 rounded-t" style={{ height: `${height}%` }}></div>
                      <span className="text-[8px] text-gray-500">Q{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Insights */}
              <div className="space-y-2">
                <div className="flex items-start gap-2 p-2 rounded-md bg-emerald-50/60 border border-emerald-200/60">
                  <div className="w-3.5 h-3.5 bg-emerald-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-2 h-2 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-gray-900 mb-0.5">Revenue Growth</div>
                    <div className="text-[9px] text-gray-600">+15% QoQ increase</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Indicator */}
            <div className="px-5 pb-3 flex items-center gap-2 border-t border-gray-200 pt-3">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span className="text-[11px] font-semibold text-gray-700">Generated in: 10 seconds</span>
            </div>

            {/* Clarity Meter */}
            <div className="px-5 pb-4 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
              <span className="text-[10px] font-semibold text-emerald-700">High Clarity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

