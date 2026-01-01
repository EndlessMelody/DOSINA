import { Upload, Brain, BarChart3, FileText, Table2, FileSpreadsheet, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center gap-4 mb-12 text-center">
            <h2 className="text-[36px] font-bold text-gray-900 tracking-tight">
              How It Works
            </h2>
            <p className="text-[18px] text-gray-600 max-w-2xl">
              Transform your complex financial reports into clear visual insights in three simple steps
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid with Connector Line */}
        <ScrollReveal delay={100}>
          <div className="relative">
            {/* Connector Line - Behind cards */}
            <div className="hidden md:block absolute top-0 left-0 right-0 h-0 pointer-events-none" style={{ top: '-20px' }}>
              <svg className="w-full h-1" viewBox="0 0 100 2" preserveAspectRatio="none" style={{ position: 'absolute', top: '0', left: '16.66%', width: '66.66%' }}>
                <defs>
                  <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#A855F7" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="1" x2="100" y2="1" stroke="url(#connectorGradient)" strokeWidth="2.5" strokeDasharray="8 4" />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 - Upload */}
              <div className="bg-white rounded-xl p-8 flex flex-col gap-4 border border-gray-200 card-hover" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
                {/* Icon Container with Number Badge */}
                <div className="relative">
                  <div className="w-full h-28 bg-blue-50 rounded-t-xl -mx-8 -mt-8 mb-4 flex items-center justify-center">
                    <Upload className="w-15 h-15 text-blue-600" strokeWidth={2} fill="currentColor" fillOpacity={0.1} />
                  </div>
                  {/* Number Badge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-blue-600 text-[18px] border-2 border-gray-200">
                    1
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center space-y-3">
                  <h3 className="font-bold text-gray-900 text-[18px]">
                    Upload
                  </h3>
                  <p className="text-gray-600 text-[15px]">
                    Upload your financial report with a ton of pages
                  </p>
                  <p className="text-gray-500 text-[13px]">
                    PDF, Excel, or CSV formats supported
                  </p>
                </div>

                {/* File Format Tags */}
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50">
                    <FileText className="w-3.5 h-3.5 text-gray-600" />
                    <span className="text-[12px] text-gray-700 font-medium">PDF</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50">
                    <Table2 className="w-3.5 h-3.5 text-gray-600" />
                    <span className="text-[12px] text-gray-700 font-medium">Excel</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-gray-600" />
                    <span className="text-[12px] text-gray-700 font-medium">CSV</span>
                  </div>
                </div>
              </div>

              {/* Card 2 - AI Analysis */}
              <div className="bg-white rounded-xl p-8 flex flex-col gap-4 border border-gray-200 card-hover" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
                {/* Icon Container with Number Badge */}
                <div className="relative">
                  <div className="w-full h-28 bg-purple-50 rounded-t-xl -mx-8 -mt-8 mb-4 flex items-center justify-center">
                    <Brain className="w-15 h-15 text-purple-600" strokeWidth={2} fill="currentColor" fillOpacity={0.1} />
                  </div>
                  {/* Number Badge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-purple-600 text-[18px] border-2 border-gray-200">
                    2
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center space-y-3">
                  <h3 className="font-bold text-gray-900 text-[18px]">
                    AI Analysis
                  </h3>
                  <p className="text-gray-600 text-[15px]">
                    AI extracts key metrics, trends, and insights
                  </p>
                  <p className="text-gray-500 text-[13px]">
                    Analyzing all pages in 10 seconds
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2 mt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-gray-600">Analyzing pages...</span>
                    <span className="text-[12px] text-purple-600 font-semibold">10 seconds</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-600 to-purple-500 rounded-full transition-all duration-1000" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Visual Dashboard */}
              <div className="bg-white rounded-xl p-8 flex flex-col gap-4 border border-gray-200 card-hover" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
                {/* Icon Container with Number Badge */}
                <div className="relative">
                  <div className="w-full h-28 bg-emerald-50 rounded-t-xl -mx-8 -mt-8 mb-4 flex items-center justify-center">
                    <BarChart3 className="w-15 h-15 text-emerald-600" strokeWidth={2} fill="currentColor" fillOpacity={0.1} />
                  </div>
                  {/* Number Badge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-emerald-600 text-[18px] border-2 border-gray-200">
                    3
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center space-y-3">
                  <h3 className="font-bold text-gray-900 text-[18px]">
                    Visual Dashboard
                  </h3>
                  <p className="text-gray-600 text-[15px]">
                    Get interactive dashboards with insights
                  </p>
                  <p className="text-gray-500 text-[13px]">
                    Charts, metrics, and recommendations
                  </p>
                </div>

                {/* Mini Chart Visualization */}
                <div className="flex items-end justify-center gap-1.5 h-16 mt-2">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 bg-emerald-200 rounded-t" style={{ height: '50%' }}></div>
                    <span className="text-[9px] text-gray-500">Rev</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 bg-emerald-400 rounded-t" style={{ height: '75%' }}></div>
                    <span className="text-[9px] text-gray-500">Pro</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 bg-emerald-600 rounded-t" style={{ height: '95%' }}></div>
                    <span className="text-[9px] text-gray-500">Grw</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}