import { FileText, BarChart3, Clock, Zap, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

export function StatisticsBadge() {
  return (
    <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pages to Dashboard */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex-1">
            <div className="text-[11px] text-gray-500 font-medium mb-0.5">Pages</div>
            <div className="flex items-center gap-2">
              <span className="text-[16px] font-bold text-gray-900">A ton of</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <BarChart3 className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-[11px] text-gray-500 font-medium mt-0.5">1 Dashboard</div>
          </div>
        </div>

        {/* Time Saved */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5 text-amber-600" />
          </div>
          <div className="flex-1">
            <div className="text-[11px] text-gray-500 font-medium mb-0.5">Time</div>
            <div className="flex items-center gap-2">
              <span className="text-[16px] font-bold text-gray-900">4 Hours</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-[11px] text-gray-500 font-medium mt-0.5">10 Seconds</div>
          </div>
        </div>

        {/* Complexity to Clarity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
            <AlertCircle className="w-5 h-5 text-rose-600" />
          </div>
          <div className="flex-1">
            <div className="text-[11px] text-gray-500 font-medium mb-0.5">Complexity</div>
            <div className="flex items-center gap-2">
              <span className="text-[16px] font-bold text-gray-900">Overwhelming</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-[11px] text-gray-500 font-medium mt-0.5">Clear</div>
          </div>
        </div>
      </div>
    </div>
  );
}

