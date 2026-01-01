import { Upload, Sparkles, BarChart3, ArrowRight } from 'lucide-react';
import { TransformationHero } from './TransformationHero';
import { TrustedLogos } from './TrustedLogos';
import { HowItWorks } from './HowItWorks';
import { VisualizationShowcase } from './VisualizationShowcase';
import { FloatingDecorations } from './FloatingDecorations';
import { ScrollRevealFeatures } from './ScrollRevealFeatures';
import { SecurityTrustStrip } from './SecurityTrustStrip';
import { FAQ } from './FAQ';
import { FinalCTA } from './FinalCTA';
import { NavigationLink } from './NavigationLink';
import { ContactModal } from './ContactModal';
import { useState, useEffect, useRef } from 'react';

interface LandingPageProps {
  onTryDemo: () => void;
}

export function LandingPage({ onTryDemo }: LandingPageProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [triggerHeroAnimation, setTriggerHeroAnimation] = useState(false);
  const [triggerFeaturesAnimation, setTriggerFeaturesAnimation] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (element: HTMLElement, offset: number = 0) => {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750; // 700-800ms
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Ease-in-out function
      const ease = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (heroRef.current) {
      smoothScrollTo(heroRef.current);
      // Trigger hero headline animation on arrival
      setTimeout(() => {
        setTriggerHeroAnimation(true);
        setTimeout(() => setTriggerHeroAnimation(false), 250);
      }, 750);
    }
  };

  const handleFeaturesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (featuresRef.current) {
      // Account for sticky header (approximately 80px)
      smoothScrollTo(featuresRef.current, 80);
      // Trigger features animation on arrival
      setTimeout(() => {
        setTriggerFeaturesAnimation(true);
        setTimeout(() => setTriggerFeaturesAnimation(false), 1000);
      }, 750);
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Decorations - Background layer */}
      <FloatingDecorations />

      {/* Enhanced atmospheric background with ambient depth */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Subtle vignette effect - pulls focus to center */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.015) 100%)'
          }}
        ></div>

        {/* Global background treatment - subtle radial gradient behind hero */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 120% 80% at 50% 0%, rgba(229, 237, 246, 0.08) 0%, rgba(237, 242, 247, 0.05) 40%, transparent 70%)'
          }}
        ></div>

        {/* Dot grid pattern */}
        <div className="absolute inset-0 dot-grid opacity-40"></div>
        
        {/* Animated gradient mesh with ambient motion */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-indigo-50/30 to-white"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.08] rounded-full blur-[120px] ambient-float-slow"></div>
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-indigo-500/[0.06] rounded-full blur-[100px] ambient-float-medium" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-[350px] h-[350px] bg-violet-500/[0.04] rounded-full blur-[90px] ambient-float-diagonal" style={{ animationDelay: '8s' }}></div>
        
        {/* Accent shapes */}
        <div className="absolute top-40 right-1/3 w-2 h-2 bg-blue-500/20 rounded-full"></div>
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-indigo-500/20 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-violet-500/20 rounded-full"></div>
      </div>

      {/* Header - Linear discipline */}
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 sticky-nav ${
        isScrolled 
          ? 'border-gray-200/60 bg-white/80 backdrop-blur-xl shadow-sm' 
          : 'border-gray-200/80 bg-white/80 backdrop-blur-xl'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="text-[15px] font-semibold tracking-tight text-gray-900">
            DOSINA
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <NavigationLink href="#home" onClick={handleHomeClick}>
              Home
            </NavigationLink>
            <NavigationLink href="#features" onClick={handleFeaturesClick}>
              Features
            </NavigationLink>
            <NavigationLink href="#contact" onClick={handleContactClick}>
              Contact
            </NavigationLink>
          </nav>

          <button
            onClick={onTryDemo}
            className="bg-blue-600 hover:bg-blue-700 text-white text-[13px] px-4 py-2 rounded-md font-medium btn-primary"
            style={{ boxShadow: 'var(--shadow-blue-sm)' }}
          >
            Try Demo
          </button>
        </div>
      </header>

      {/* Hero Section - Transformation Focus */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10" ref={heroRef}>
        {/* Subtle gradient mesh background - corner accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/[0.06] via-purple-500/[0.05] to-transparent rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT - Text Content - Hero Animation */}
          <div className="space-y-6 hero-text-enter">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200/70 bg-gradient-to-r from-blue-50 to-indigo-50/60 backdrop-blur-sm" style={{ boxShadow: '0 2px 8px rgb(37 99 235 / 0.1), inset 0 1px 0 rgb(255 255 255 / 0.8)' }}>
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" style={{ boxShadow: '0 0 6px rgb(37 99 235 / 0.8)' }}></div>
              <span className="text-[12px] text-gray-800 font-semibold">
                AI-Powered Analysis
              </span>
            </div>
            
            {/* Main Headline - tighter tracking */}
            <h1 
              className="text-[48px] leading-[1.1] font-bold tracking-[-0.02em]"
              style={{
                opacity: triggerHeroAnimation ? 0.9 : 1,
                transform: triggerHeroAnimation ? 'translateY(4px)' : 'translateY(0)',
                transition: 'opacity 200ms ease-out, transform 200ms ease-out'
              }}
            >
              <span className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                Turn Financial Reports into{' '}
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Visual Insights
              </span>
            </h1>
            
            {/* Simple Description - limited width */}
            <p className="text-[18px] leading-relaxed text-gray-600 max-w-[80%]">
              Transform 50-page PDFs into interactive dashboards with AI-powered insights in seconds
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

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onTryDemo}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-[15px] px-8 py-4 rounded-lg transition-all font-semibold inline-flex items-center gap-2.5 group relative overflow-hidden hover:shadow-[0_8px_24px_rgb(37_99_235_/_0.5)]"
                style={{ boxShadow: '0 4px 16px rgb(37 99 235 / 0.4), inset 0 1px 0 rgb(255 255 255 / 0.2)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative">Try with Your Report</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
              </button>
              <p className="text-[12px] text-gray-500 mt-3">No credit card required • Free demo • Secure processing</p>
            </div>
          </div>

          {/* RIGHT - Visual Demo */}
          <div className="relative lg:pl-8 hero-visual-enter">
            {/* Visual Insight Demo */}
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl blur-2xl"></div>
              
              {/* Main container - 2-layer shadow + inner border */}
              <div 
                className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/80 overflow-hidden"
                style={{ 
                  boxShadow: '0 4px 12px rgb(0 0 0 / 0.06), 0 20px 40px rgb(0 0 0 / 0.08)',
                  outline: '1px solid rgba(255, 255, 255, 0.4)',
                  outlineOffset: '-1px'
                }}
              >
                {/* Report snippet at top */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 border-b border-gray-200 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">PDF</span>
                    </div>
                    <span className="text-[11px] font-semibold text-gray-700">Financial_Report_Q4.pdf</span>
                  </div>
                  
                  {/* Snippet of report text - improved contrast */}
                  <div className="bg-white rounded-lg border border-gray-200 p-3 space-y-1.5 opacity-85">
                    <div className="text-[10px] text-gray-800 font-mono leading-tight">
                      "Total revenue for Q4 2021 reached <span className="bg-blue-100/60 text-blue-900 px-0.5 rounded transition-all hover:bg-blue-200/80">$2,400,000</span>, 
                      representing a 15% increase from Q3. Operating 
                      expenses totaled <span className="bg-orange-100/60 text-orange-900 px-0.5 rounded">$2,208,000</span>..."
                    </div>
                  </div>
                  
                  {/* Arrow down - with subtle glow effect */}
                  <div className="flex justify-center my-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-blue-400/40 rounded-full animate-ping" style={{ animationDuration: '2s', animationIterationCount: '3' }}></div>
                      <Sparkles className="w-3 h-3 text-white relative z-10" />
                    </div>
                  </div>
                </div>

                {/* Extracted insights */}
                <div className="p-5 space-y-3">
                  {/* Metric cards */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-50/30 border border-blue-200/70 rounded-lg p-3 hover:shadow-md hover:shadow-blue-200/40 transition-all group">
                      <div className="text-[10px] text-gray-600 font-bold mb-1 uppercase">Revenue</div>
                      <div className="text-[24px] font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">$2.4M</div>
                      
                      {/* 3-month trend sparkline (Oct-Dec) */}
                      <svg viewBox="0 0 90 28" className="w-full h-7 mb-1" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Fill area */}
                        <path
                          d="M 0 16 L 0 14 L 45 10 L 90 4 L 90 20 L 0 20 Z"
                          fill="url(#revenueGradient)"
                        />
                        {/* Line */}
                        <polyline
                          points="0,14 45,10 90,4"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {/* Month labels */}
                        <text x="0" y="26" fontSize="7" fill="#9CA3AF" fontFamily="system-ui, sans-serif">Oct</text>
                        <text x="38" y="26" fontSize="7" fill="#9CA3AF" fontFamily="system-ui, sans-serif">Nov</text>
                        <text x="77" y="26" fontSize="7" fill="#9CA3AF" fontFamily="system-ui, sans-serif">Dec</text>
                      </svg>
                      
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                        ↗ +15%
                      </span>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-orange-50/30 border border-orange-200/70 rounded-lg p-3 hover:shadow-md hover:shadow-orange-200/40 transition-all group">
                      <div className="text-[10px] text-gray-600 font-bold mb-1 uppercase">Expenses</div>
                      <div className="text-[24px] font-bold text-gray-900 mb-1 group-hover:text-orange-700 transition-colors">$2.2M</div>
                      
                      {/* 3-month trend sparkline (Oct-Dec) */}
                      <svg viewBox="0 0 90 28" className="w-full h-7 mb-1" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#F97316" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Fill area */}
                        <path
                          d="M 0 12 L 0 10 L 45 8 L 90 3 L 90 20 L 0 20 Z"
                          fill="url(#expensesGradient)"
                        />
                        {/* Line */}
                        <polyline
                          points="0,10 45,8 90,3"
                          fill="none"
                          stroke="#F97316"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {/* Month labels */}
                        <text x="0" y="26" fontSize="7" fill="#9CA3AF" fontFamily="system-ui, sans-serif">Oct</text>
                        <text x="38" y="26" fontSize="7" fill="#9CA3AF" fontFamily="system-ui, sans-serif">Nov</text>
                        <text x="77" y="26" fontSize="7" fill="#9CA3AF" fontFamily="system-ui, sans-serif">Dec</text>
                      </svg>
                      
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold">
                        ↑ +12%
                      </span>
                    </div>

                    <div className="bg-gradient-to-br from-violet-50 to-violet-50/30 border border-violet-200/70 rounded-lg p-3">
                      <div className="text-[10px] text-gray-600 font-bold mb-1 uppercase">Profit Margin</div>
                      <div className="text-[24px] font-bold text-gray-900 mb-1">8.3%</div>
                      
                      {/* Small bar visualization */}
                      <div className="h-7 mb-1 flex items-end">
                        <div className="w-full bg-gray-200/50 rounded-full h-1.5 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-violet-500 to-violet-400 rounded-full" style={{ width: '8.3%' }}></div>
                        </div>
                      </div>
                      
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-violet-100 text-violet-700 text-[10px] font-bold">
                        ↑ QoQ
                      </span>
                    </div>
                  </div>

                  {/* AI Insights */}
                  <div className="space-y-2">
                    {/* Primary insight */}
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-50/30 border border-emerald-200 rounded-lg p-3 flex items-start gap-2">
                      <div className="w-5 h-5 bg-emerald-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-[10px]">✓</span>
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-gray-900 mb-0.5">Strong Growth Trajectory</div>
                        <div className="text-[10px] text-gray-600">Revenue accelerating QoQ with healthy margins</div>
                      </div>
                    </div>

                    {/* Secondary subtle insight for expenses */}
                    <div className="bg-gradient-to-br from-amber-50/50 to-amber-50/20 border border-amber-200/40 rounded-md p-2 flex items-start gap-1.5">
                      <div className="w-3 h-3 bg-amber-400/80 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-[7px]">i</span>
                      </div>
                      <div>
                        <div className="text-[9px] text-gray-700">Expense growth (+12%) tracking below revenue growth (+15%)</div>
                      </div>
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

      {/* Security Trust Strip */}
      <SecurityTrustStrip />

      {/* How It Works Section - Below Hero, Above Trusted Logos */}
      <HowItWorks />

      {/* Trusted Logos Section */}
      <TrustedLogos />

      {/* Visualization Showcase Section */}
      <VisualizationShowcase />

      {/* Scroll-triggered Features Section */}
      <ScrollRevealFeatures ref={featuresRef} triggerAnimation={triggerFeaturesAnimation} />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section */}
      <FinalCTA onTryDemo={onTryDemo} />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}