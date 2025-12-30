import { TrendingUp, DollarSign } from 'lucide-react';

export function FloatingDecorations() {
  return (
    <>
      {/* Floating Mini Line Chart - Top Right */}
      <div 
        className="absolute top-32 right-12 w-32 h-20 opacity-20 pointer-events-none hidden lg:block"
        style={{ filter: 'blur(0.5px)' }}
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

      {/* Floating Mini Pie Chart - Bottom Left */}
      <div 
        className="absolute bottom-40 left-16 w-24 h-24 opacity-15 pointer-events-none hidden lg:block"
        style={{ filter: 'blur(0.5px)' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
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

      {/* Floating Metric Card - Middle Right */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 right-8 opacity-20 pointer-events-none hidden xl:block"
        style={{ filter: 'blur(0.5px)' }}
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

      {/* Transformation Text Snippet - Top Left */}
      <div 
        className="absolute top-48 left-20 opacity-15 pointer-events-none hidden lg:block max-w-[200px]"
        style={{ filter: 'blur(0.3px)' }}
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 p-3 shadow-sm">
          <div className="text-[9px] text-gray-500 mb-2 font-medium">FROM THIS:</div>
          <div className="text-[10px] text-gray-600 leading-relaxed mb-3 opacity-60">
            "Revenue for Q4 2021 was $2,400,000, representing a year-over-year increase of..."
          </div>
          <div className="flex items-center gap-2 mb-1">
            <div className="text-[9px] text-gray-500 font-medium">TO THIS:</div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded px-2 py-1.5">
            <div className="text-[14px] font-bold text-gray-900 flex items-center gap-1">
              <DollarSign className="w-4 h-4 text-gray-700" />
              $2.4M 
              <span className="text-emerald-600 text-[11px] flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" />
                +15%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle data particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block opacity-20">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}></div>
      </div>

      {/* Gradient orbs for depth */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
    </>
  );
}
