import { TrendingUp, DollarSign } from 'lucide-react';

export function FloatingDecorations() {
  return (
    <>
      {/* Floating Mini Line Chart - Top Right */}
      <div 
        className="absolute top-32 right-12 w-32 h-20 opacity-20 pointer-events-none hidden lg:block float-gentle"
        style={{ filter: 'blur(0.5px)', animationDelay: '0s' }}
      >
        <svg viewBox="0 0 100 60" className="w-full h-full">
          <polyline
            points="0,50 20,45 40,30 60,35 80,15 100,10"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="0" cy="50" r="2" fill="#3B82F6" />
          <circle cx="20" cy="45" r="2" fill="#3B82F6" />
          <circle cx="40" cy="30" r="2" fill="#3B82F6" />
          <circle cx="60" cy="35" r="2" fill="#3B82F6" />
          <circle cx="80" cy="15" r="2" fill="#3B82F6" />
          <circle cx="100" cy="10" r="3" fill="#3B82F6">
            <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Floating Mini Bar Chart - Top Left */}
      <div 
        className="absolute top-44 left-10 w-20 h-16 opacity-15 pointer-events-none hidden lg:block float-diagonal"
        style={{ filter: 'blur(0.5px)', animationDelay: '4s' }}
      >
        <svg viewBox="0 0 80 60" className="w-full h-full">
          <rect x="5" y="30" width="12" height="30" fill="#3B82F6" rx="2" />
          <rect x="22" y="20" width="12" height="40" fill="#6366F1" rx="2" />
          <rect x="39" y="10" width="12" height="50" fill="#8B5CF6" rx="2" />
          <rect x="56" y="5" width="12" height="55" fill="#A855F7" rx="2" />
        </svg>
      </div>

      {/* Floating Mini Pie Chart - Bottom Left */}
      <div 
        className="absolute bottom-40 left-16 w-24 h-24 opacity-15 pointer-events-none hidden lg:block drift-horizontal"
        style={{ filter: 'blur(0.5px)', animationDelay: '1s' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full rotate-slow">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="20"
            strokeDasharray="157"
            strokeDashoffset="0"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="20"
            strokeDasharray="157"
            strokeDashoffset="-63"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#10B981"
            strokeWidth="20"
            strokeDasharray="157"
            strokeDashoffset="-110"
          />
        </svg>
      </div>

      {/* Floating Trending Arrow - Bottom Right */}
      <div 
        className="absolute bottom-32 right-20 w-28 h-28 opacity-15 pointer-events-none hidden xl:block float-gentle"
        style={{ filter: 'blur(0.5px)', animationDelay: '6s' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="arrowGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <path 
            d="M 20 80 L 50 40 L 80 20" 
            fill="none" 
            stroke="url(#arrowGradient)" 
            strokeWidth="4" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon points="80,20 70,25 75,35" fill="url(#arrowGradient)" />
          <circle cx="20" cy="80" r="3" fill="#10B981">
            <animate attributeName="r" values="3;4.5;3" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="40" r="3" fill="#6366F1">
            <animate attributeName="r" values="3;4.5;3" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
          </circle>
        </svg>
      </div>

      {/* Floating Metric Card - Middle Right */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 right-8 opacity-20 pointer-events-none hidden xl:block float-diagonal"
        style={{ filter: 'blur(0.5px)', animationDelay: '2s' }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 p-3 shadow-lg">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-bold text-gray-600">REVENUE</span>
          </div>
          <div className="text-[18px] font-bold text-gray-900">$2.4M</div>
          <div className="flex items-center gap-1 text-emerald-600">
            <TrendingUp className="w-3 h-3" />
            <span className="text-[10px] font-bold">+15%</span>
          </div>
        </div>
      </div>

      {/* Blinking Dots - Strategic Positions */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        {/* Top section blinking dots */}
        <div className="absolute top-[15%] left-[12%] w-2 h-2 bg-blue-400 rounded-full blink-slow" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[22%] left-[25%] w-1.5 h-1.5 bg-indigo-400 rounded-full blink-medium" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-[18%] right-[20%] w-2 h-2 bg-purple-400 rounded-full blink-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[28%] right-[15%] w-1.5 h-1.5 bg-blue-400 rounded-full blink-medium" style={{ animationDelay: '2.2s' }}></div>
        
        {/* Middle section blinking dots */}
        <div className="absolute top-[45%] left-[8%] w-2 h-2 bg-violet-400 rounded-full blink-medium" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[52%] left-[30%] w-1.5 h-1.5 bg-blue-400 rounded-full blink-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[48%] right-[25%] w-2 h-2 bg-indigo-400 rounded-full blink-slow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-[55%] right-[10%] w-1.5 h-1.5 bg-purple-400 rounded-full blink-medium" style={{ animationDelay: '1.8s' }}></div>
        
        {/* Bottom section blinking dots */}
        <div className="absolute bottom-[25%] left-[18%] w-2 h-2 bg-blue-400 rounded-full blink-medium" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-[20%] left-[35%] w-1.5 h-1.5 bg-violet-400 rounded-full blink-slow" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute bottom-[28%] right-[30%] w-2 h-2 bg-indigo-400 rounded-full blink-medium" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-[22%] right-[12%] w-1.5 h-1.5 bg-blue-400 rounded-full blink-slow" style={{ animationDelay: '1.7s' }}></div>
      </div>

      {/* Animated data particles - Subtle blue tones */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        {/* Top left cluster */}
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-blue-400/40 rounded-full particle-drift" style={{ animationDelay: '0s', animationDuration: '10s' }}></div>
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-indigo-400/40 rounded-full particle-drift" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
        
        {/* Top right cluster */}
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400/30 rounded-full particle-drift" style={{ animationDelay: '1s', animationDuration: '11s' }}></div>
        <div className="absolute top-1/5 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full particle-drift" style={{ animationDelay: '3s', animationDuration: '9s' }}></div>
        
        {/* Bottom left cluster */}
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-indigo-400/35 rounded-full particle-drift" style={{ animationDelay: '1.5s', animationDuration: '10.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-violet-400/30 rounded-full particle-drift" style={{ animationDelay: '4s', animationDuration: '11.5s' }}></div>
        
        {/* Bottom right cluster */}
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full particle-drift" style={{ animationDelay: '0.5s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-1/5 right-1/4 w-1.5 h-1.5 bg-purple-400/35 rounded-full particle-drift" style={{ animationDelay: '2.5s', animationDuration: '10s' }}></div>
      </div>

      {/* Gradient orbs for depth - Animated */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none gradient-move" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl pointer-events-none gradient-move" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-violet-400/4 rounded-full blur-3xl pointer-events-none gradient-move" style={{ animationDelay: '8s' }}></div>

      {/* Additional subtle accent points - Static but colorful */}
      <div className="absolute top-1/6 left-1/5 w-2 h-2 bg-blue-300/20 rounded-full blur-sm pointer-events-none hidden lg:block"></div>
      <div className="absolute top-2/5 right-1/5 w-2 h-2 bg-indigo-300/20 rounded-full blur-sm pointer-events-none hidden lg:block"></div>
      <div className="absolute bottom-1/6 left-2/5 w-2 h-2 bg-purple-300/20 rounded-full blur-sm pointer-events-none hidden lg:block"></div>
      <div className="absolute bottom-2/5 right-2/5 w-2 h-2 bg-blue-300/20 rounded-full blur-sm pointer-events-none hidden lg:block"></div>

      {/* Floating geometric shapes - Very subtle */}
      <div className="absolute top-1/5 right-1/6 w-12 h-12 pointer-events-none hidden xl:block float-gentle opacity-10" style={{ animationDelay: '3s' }}>
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <rect x="5" y="5" width="30" height="30" fill="none" stroke="#3B82F6" strokeWidth="1.5" rx="4" />
        </svg>
      </div>

      <div className="absolute bottom-1/5 left-1/6 w-10 h-10 pointer-events-none hidden xl:block drift-horizontal opacity-10" style={{ animationDelay: '5s' }}>
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <circle cx="20" cy="20" r="15" fill="none" stroke="#A855F7" strokeWidth="1.5" />
        </svg>
      </div>
    </>
  );
}