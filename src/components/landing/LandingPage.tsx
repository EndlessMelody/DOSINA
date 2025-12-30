import { Upload, Sparkles, BarChart3, ArrowRight, CheckCircle, TrendingUp, TrendingDown } from 'lucide-react';
import { TrustedLogos } from './TrustedLogos';
import { VisualizationShowcase } from './VisualizationShowcase';
import { FloatingDecorations } from './FloatingDecorations';
import { ScrollRevealFeatures } from './ScrollRevealFeatures';
import { StatisticsBadge } from './StatisticsBadge';
import { ProblemSection } from './ProblemSection';
import { HowItWorks } from './HowItWorks';
import { TransformationSection } from './TransformationSection';

interface LandingPageProps {
  onTryDemo: () => void;
}

export function LandingPage({ onTryDemo }: LandingPageProps) {
  return (
    <div className="min-h-screen relative">
      {/* Floating Decorations - Background layer */}
      <FloatingDecorations />

      {/* Enhanced atmospheric background with dot grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Dot grid pattern */}
        <div className="absolute inset-0 dot-grid opacity-40"></div>
        
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-indigo-50/30 to-white"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.08] rounded-full blur-[120px] animate-gradient"></div>
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-indigo-500/[0.06] rounded-full blur-[100px] animate-gradient" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-[350px] h-[350px] bg-violet-500/[0.04] rounded-full blur-[90px] animate-gradient" style={{ animationDelay: '4s' }}></div>
        
        {/* Accent shapes */}
        <div className="absolute top-40 right-1/3 w-2 h-2 bg-blue-500/20 rounded-full"></div>
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-indigo-500/20 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-violet-500/20 rounded-full"></div>
      </div>

      {/* Header - Linear discipline */}
      <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="text-[15px] font-semibold tracking-tight text-gray-900">
            DOSINA
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-[13px] text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Home
            </a>
            <a href="#features" className="text-[13px] text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Features
            </a>
            <a href="#contact" className="text-[13px] text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Contact
            </a>
          </nav>

          <button
            onClick={onTryDemo}
            className="bg-blue-600 hover:bg-blue-700 text-white text-[13px] px-4 py-2 rounded-md transition-colors font-medium"
            style={{ boxShadow: 'var(--shadow-blue-sm)' }}
          >
            Try Demo
          </button>
        </div>
      </header>

      {/* Hero Section - Transformation Focus */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT - Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200/70 bg-gradient-to-r from-blue-50 to-indigo-50/60 backdrop-blur-sm" style={{ boxShadow: '0 2px 8px rgb(37 99 235 / 0.1), inset 0 1px 0 rgb(255 255 255 / 0.8)' }}>
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" style={{ boxShadow: '0 0 6px rgb(37 99 235 / 0.8)' }}></div>
              <span className="text-[12px] text-gray-800 font-semibold">
                AI-Powered Analysis
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-[56px] leading-[1.1] font-bold tracking-[-0.03em]">
              <span className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                From a Ton of Pages of{' '}
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Financial Data
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                To Instant Visual Insights
              </span>
            </h1>
            
            {/* Simple Description */}
            <p className="text-[18px] leading-relaxed text-gray-600">
              Upload your complex financial report. Our AI extracts key metrics, trends, and insights, 
              transforming dense PDFs into interactive dashboards you can understand at a glance.
            </p>

            {/* Quick Features */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Upload className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Upload your report</div>
                  <div className="text-[14px] text-gray-600">PDF, Excel, or CSV formats</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">AI analyzes in 10 seconds</div>
                  <div className="text-[14px] text-gray-600">Extract trends, insights & anomalies</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Get visual dashboards</div>
                  <div className="text-[14px] text-gray-600">Charts, metrics & recommendations</div>
                </div>
              </div>
            </div>

            {/* Statistics Badge */}
            <div className="pt-2">
              <StatisticsBadge />
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onTryDemo}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-[15px] px-8 py-4 rounded-lg transition-all font-semibold inline-flex items-center gap-2.5 group relative overflow-hidden"
                style={{ boxShadow: '0 4px 16px rgb(37 99 235 / 0.4), inset 0 1px 0 rgb(255 255 255 / 0.2)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative">Try with Your Report</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
              </button>
              <p className="text-[13px] text-gray-500 mt-3">No credit card required • Free demo</p>
            </div>
          </div>

          {/* RIGHT - Visual Demo */}
          <div className="relative lg:pl-8">
            {/* Visual Insight Demo */}
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl blur-2xl"></div>
              
              {/* Main container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/80 shadow-xl overflow-hidden" style={{ boxShadow: '0 20px 40px -12px rgb(0 0 0 / 0.15)' }}>
                {/* Report snippet at top */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 border-b border-gray-200 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">PDF</span>
                    </div>
                    <span className="text-[11px] font-semibold text-gray-700">Financial_Report_Q4.pdf</span>
                  </div>
                  
                  {/* Snippet of report text */}
                  <div className="bg-white rounded-lg border border-gray-200 p-3 space-y-1.5 opacity-70">
                    <div className="text-[10px] text-gray-700 font-mono leading-tight">
                      "Total revenue for Q4 2021 reached $2,400,000, 
                      representing a 15% increase from Q3. Operating 
                      expenses totaled $2,208,000..."
                    </div>
                  </div>
                  
                  {/* Arrow down */}
                  <div className="flex justify-center my-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                {/* Extracted insights */}
                <div className="p-5 space-y-3">
                  {/* Metric cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-50/30 border border-blue-200/70 rounded-lg p-3">
                      <div className="text-[10px] text-gray-600 font-bold mb-1 uppercase">Revenue</div>
                      <div className="text-[24px] font-bold text-gray-900 mb-1">$2.4M</div>
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                        <TrendingUp className="w-3 h-3" />
                        +15%
                      </span>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-orange-50/30 border border-orange-200/70 rounded-lg p-3">
                      <div className="text-[10px] text-gray-600 font-bold mb-1 uppercase">Expenses</div>
                      <div className="text-[24px] font-bold text-gray-900 mb-1">$2.2M</div>
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold">
                        <TrendingUp className="w-3 h-3" />
                        +12%
                      </span>
                    </div>
                  </div>

                  {/* Mini chart */}
                  <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-3">
                    <div className="text-[10px] text-gray-600 font-bold mb-3 uppercase">Quarterly Trend</div>
                    <div className="flex items-end justify-between gap-2 h-16">
                      {[45, 60, 75, 90].map((height, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                          <div 
                            className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"
                            style={{ height: `${height}%` }}
                          ></div>
                          <span className="text-[8px] text-gray-500">Q{idx + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key insight */}
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-50/30 border border-emerald-200 rounded-lg p-3 flex items-start gap-2">
                    <div className="w-5 h-5 bg-emerald-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-gray-900 mb-0.5">Strong Growth Trajectory</div>
                      <div className="text-[10px] text-gray-600">Revenue accelerating QoQ with healthy margins</div>
                    </div>
                  </div>
                </div>

                {/* Live indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-100 border border-emerald-200">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-[9px] font-bold text-emerald-700">LIVE</span>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <ProblemSection />

      {/* Transformation Section */}
      <TransformationSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Trusted Logos Section */}
      <TrustedLogos />

      {/* Visualization Showcase Section */}
      <VisualizationShowcase />

      {/* Scroll-triggered Features Section */}
      <ScrollRevealFeatures />
    </div>
  );
}