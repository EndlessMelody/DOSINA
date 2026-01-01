import { Upload, Sparkles, BarChart3, Zap, Shield, Clock } from 'lucide-react';
import { useEffect, useRef, useState, forwardRef } from 'react';

interface ScrollRevealFeaturesProps {
  triggerAnimation?: boolean;
}

export const ScrollRevealFeatures = forwardRef<HTMLDivElement, ScrollRevealFeaturesProps>(
  ({ triggerAnimation = false }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Combine external ref with internal ref
  useEffect(() => {
    if (ref && typeof ref === 'object') {
      ref.current = sectionRef.current;
    }
  }, [ref]);

  useEffect(() => {
    if (triggerAnimation) {
      setShouldAnimate(true);
      setTimeout(() => setShouldAnimate(false), 1000);
    }
  }, [triggerAnimation]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: Upload,
      title: 'Upload Reports',
      description: 'Drag & drop PDF or Excel files',
      color: 'blue',
      delay: '0ms'
    },
    {
      icon: Sparkles,
      title: 'AI Analysis',
      description: 'Automatic insight extraction',
      color: 'purple',
      delay: '100ms'
    },
    {
      icon: BarChart3,
      title: 'Visual Dashboard',
      description: 'Clear charts & summaries',
      color: 'indigo',
      delay: '200ms'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Analysis in under 10 seconds',
      color: 'amber',
      delay: '300ms'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level data protection',
      color: 'emerald',
      delay: '400ms'
    },
    {
      icon: Clock,
      title: 'Save 75% Time',
      description: 'vs manual report analysis',
      color: 'rose',
      delay: '500ms'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-50', icon: 'text-blue-600', gradient: 'from-blue-500 to-blue-600' },
      purple: { bg: 'bg-purple-50', icon: 'text-purple-600', gradient: 'from-purple-500 to-purple-600' },
      indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', gradient: 'from-indigo-500 to-indigo-600' },
      amber: { bg: 'bg-amber-50', icon: 'text-amber-600', gradient: 'from-amber-500 to-amber-600' },
      emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', gradient: 'from-emerald-500 to-emerald-600' },
      rose: { bg: 'bg-rose-50', icon: 'text-rose-600', gradient: 'from-rose-500 to-rose-600' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-[36px] font-bold tracking-tight text-gray-900 mb-3">
          Everything you need
        </h2>
        <p className="text-[16px] text-gray-600">
          Powerful features designed for financial professionals
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const colors = getColorClasses(feature.color);
          
          return (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 ${
                shouldAnimate 
                  ? 'opacity-0 translate-y-2' 
                  : isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                boxShadow: 'var(--shadow-sm)',
                ...(shouldAnimate ? {
                  animation: `featureCardReveal 220ms ease-out ${index * 60}ms forwards`
                } : {
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '700ms',
                  transitionTimingFunction: 'ease-out',
                  transitionDelay: isVisible ? feature.delay : '0ms'
                })
              }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center mb-4`} 
                   style={{ boxShadow: `0 4px 12px -2px ${feature.color === 'blue' ? 'rgb(37 99 235 / 0.3)' : 'rgb(0 0 0 / 0.2)'}` }}>
                <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-[16px] font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes featureCardReveal {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
});