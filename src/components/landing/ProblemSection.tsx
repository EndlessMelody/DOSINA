import { FileText, Clock, Search, BarChart3, Zap, Sparkles, AlertCircle, CheckCircle } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-[36px] font-bold tracking-tight text-gray-900 mb-4">
          The Challenge with Financial Reports
        </h2>
        <p className="text-[18px] leading-relaxed text-gray-600 max-w-3xl mx-auto">
          Financial reports are getting longer. Your Q4 report contains a ton of pages of dense data, 
          tables, and text. Finding the insights that matter takes hours. What if you could see 
          everything that matters in one visual dashboard?
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - The Struggle */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 border-2 border-gray-200 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-rose-600" />
            </div>
            <h3 className="text-[20px] font-bold text-gray-900">The Struggle</h3>
          </div>

          <div className="space-y-6">
            {/* Stack of Pages */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 mb-1">A Ton of Pages</div>
                <div className="text-[14px] text-gray-600">
                  Stack of financial reports with dense text, tables, and numbers that are hard to navigate
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-10 bg-white border border-gray-300 rounded shadow-sm flex items-center justify-center text-[10px] font-bold text-gray-600"
                        style={{ transform: `translateX(${i * 2}px) rotate(${i * 2}deg)` }}
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-[12px] text-gray-500 ml-2">+ many more...</span>
                </div>
              </div>
            </div>

            {/* Time to Analyze */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 mb-1">4+ Hours to Analyze</div>
                <div className="text-[14px] text-gray-600">
                  Manual analysis takes significant time, reading through pages to find key insights
                </div>
              </div>
            </div>

            {/* Hard to Find Insights */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Search className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 mb-1">Hard to Find Key Insights</div>
                <div className="text-[14px] text-gray-600">
                  Important metrics and trends are buried in dense text and complex tables
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - The Solution */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 border-2 border-blue-200 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-[20px] font-bold text-gray-900">The Solution</h3>
          </div>

          <div className="space-y-6">
            {/* Single Dashboard */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 mb-1">Single Dashboard View</div>
                <div className="text-[14px] text-gray-600">
                  All key metrics, trends, and insights in one interactive, easy-to-understand dashboard
                </div>
                <div className="mt-2 bg-white rounded-lg border border-blue-200 p-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-blue-50 rounded p-2 text-center">
                      <div className="text-[12px] font-bold text-gray-900">Revenue</div>
                      <div className="text-[10px] text-gray-600">$2.4M</div>
                    </div>
                    <div className="bg-indigo-50 rounded p-2 text-center">
                      <div className="text-[12px] font-bold text-gray-900">Profit</div>
                      <div className="text-[10px] text-gray-600">$192K</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 10 Seconds */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 mb-1">10 Seconds</div>
                <div className="text-[14px] text-gray-600">
                  AI-powered analysis extracts insights in seconds, not hours
                </div>
              </div>
            </div>

            {/* AI-Powered Insights */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 mb-1">AI-Powered Insights</div>
                <div className="text-[14px] text-gray-600">
                  Automatic extraction of trends, anomalies, and actionable recommendations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

