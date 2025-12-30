import { Upload, Brain, BarChart3, FileText, Sparkles, CheckCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Upload,
      title: 'Upload',
      description: 'Upload your financial report with a ton of pages',
      details: 'PDF, Excel, or CSV formats supported',
      color: 'blue',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50'
    },
    {
      number: 2,
      icon: Brain,
      title: 'AI Analysis',
      description: 'AI extracts key metrics, trends, and insights',
      details: 'Analyzing all pages in 10 seconds',
      color: 'indigo',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      borderColor: 'border-indigo-200',
      bgColor: 'bg-indigo-50'
    },
    {
      number: 3,
      icon: BarChart3,
      title: 'Visual Dashboard',
      description: 'Get interactive dashboards with insights',
      details: 'Charts, metrics, and recommendations',
      color: 'emerald',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-200',
      bgColor: 'bg-emerald-50'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-14">
        <h2 className="text-[36px] font-bold tracking-tight text-gray-900 mb-3">
          How It Works
        </h2>
        <p className="text-[16px] text-gray-600 max-w-2xl mx-auto">
          Transform your complex financial reports into clear visual insights in three simple steps
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-emerald-200" style={{ top: '64px' }}></div>

        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className={`bg-white border-2 ${step.borderColor} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10`}>
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className={`w-8 h-8 ${step.bgColor} border-2 ${step.borderColor} rounded-full flex items-center justify-center`}>
                    <span className="text-[14px] font-bold text-gray-900">{step.number}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${step.iconBg} rounded-xl flex items-center justify-center mx-auto mb-6 mt-4`}>
                  <Icon className={`w-8 h-8 ${step.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-[20px] font-bold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-[15px] text-gray-700 mb-2 text-center leading-relaxed">
                  {step.description}
                </p>
                <p className="text-[13px] text-gray-500 text-center">
                  {step.details}
                </p>

                {/* Format Badges for Step 1 */}
                {step.number === 1 && (
                  <div className="mt-6 flex items-center justify-center gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-lg">
                      <FileText className="w-3.5 h-3.5 text-gray-600" />
                      <span className="text-[11px] font-semibold text-gray-700">PDF</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-lg">
                      <FileText className="w-3.5 h-3.5 text-gray-600" />
                      <span className="text-[11px] font-semibold text-gray-700">Excel</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-lg">
                      <FileText className="w-3.5 h-3.5 text-gray-600" />
                      <span className="text-[11px] font-semibold text-gray-700">CSV</span>
                    </div>
                  </div>
                )}

                {/* Progress Indicator for Step 2 */}
                {step.number === 2 && (
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-gray-600">
                      <span>Analyzing pages...</span>
                      <span className="font-semibold text-blue-600">10 seconds</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1.5 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                )}

                {/* Features for Step 3 */}
                {step.number === 3 && (
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-[12px] text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Interactive charts</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Key metrics</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>AI recommendations</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Arrow (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 right-0 translate-x-1/2 z-20">
                  <div className="w-6 h-6 bg-white border-2 border-indigo-200 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-indigo-600" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

