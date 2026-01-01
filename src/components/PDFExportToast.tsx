import { CheckCircle, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PDFExportToastProps {
  isVisible: boolean;
  onComplete: () => void;
}

export function PDFExportToast({ isVisible, onComplete }: PDFExportToastProps) {
  const [phase, setPhase] = useState<'generating' | 'ready'>('generating');

  useEffect(() => {
    if (!isVisible) {
      setPhase('generating');
      return;
    }

    // Phase 1: Generating (2 seconds)
    const timer1 = setTimeout(() => {
      setPhase('ready');
    }, 2000);

    // Phase 2: Auto-dismiss after showing ready state (2 seconds)
    const timer2 = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div 
        className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden min-w-[320px]"
        style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
      >
        {/* Content */}
        <div className="px-4 py-3 flex items-center gap-3">
          {phase === 'generating' ? (
            <>
              <Loader2 className="w-5 h-5 text-blue-600 animate-spin flex-shrink-0" />
              <span className="text-[13px] font-medium text-gray-900">
                Generating PDF…
              </span>
            </>
          ) : (
            <>
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span className="text-[13px] font-medium text-gray-900">
                Report ready. Downloading…
              </span>
            </>
          )}
        </div>

        {/* Thin Progress Bar */}
        {phase === 'generating' && (
          <div className="h-0.5 bg-gray-100 relative overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-blue-600"
              style={{
                animation: 'indeterminate 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes indeterminate {
          0% {
            left: -35%;
            right: 100%;
          }
          60% {
            left: 100%;
            right: -90%;
          }
          100% {
            left: 100%;
            right: -90%;
          }
        }
      `}</style>
    </div>
  );
}
