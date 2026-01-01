import { useState, useEffect, useRef } from 'react';
import { X, Download, Share2, FileText, Check, Loader2, Search, Copy } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface GenerateStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GenerateStoryModal({ isOpen, onClose }: GenerateStoryModalProps) {
  const [phase, setPhase] = useState<'loading' | 'results'>('loading');
  const [downloadState, setDownloadState] = useState<'idle' | 'packaging' | 'success'>('idle');
  const [shareState, setShareState] = useState<'idle' | 'copied'>('idle');
  const [showSharePopover, setShowSharePopover] = useState(false);
  const [isPublicAccess, setIsPublicAccess] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const shareButtonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Reset to loading phase when modal opens
      setPhase('loading');
      setDownloadState('idle');
      setShareState('idle');
      setShowSharePopover(false);
      
      // After 2.5 seconds, transition to results
      const timer = setTimeout(() => {
        setPhase('results');
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        shareButtonRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !shareButtonRef.current.contains(event.target as Node)
      ) {
        setShowSharePopover(false);
      }
    };

    if (showSharePopover) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showSharePopover]);

  const handleDownload = () => {
    if (downloadState !== 'idle') return;

    // Start packaging
    setDownloadState('packaging');

    // After 1.5s, show success
    setTimeout(() => {
      setDownloadState('success');
      
      // Show toast notification
      toast.success('Financial_Report_Q4_Deck.pptx saved to your device', {
        duration: 3000,
        position: 'bottom-center',
      });

      // Reset after 2s
      setTimeout(() => {
        setDownloadState('idle');
      }, 2000);
    }, 1500);
  };

  const handleShareClick = () => {
    setShowSharePopover(!showSharePopover);
  };

  const handleCopyLink = () => {
    const linkUrl = 'https://dosina.app/share/financial-report-q4-2021';
    
    // Fallback method for copying when Clipboard API is blocked
    const fallbackCopyTextToClipboard = (text: string) => {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Fallback: Could not copy text', err);
      }
      
      document.body.removeChild(textArea);
    };
    
    // Try modern Clipboard API first, fall back to execCommand
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(linkUrl).catch(() => {
        // If Clipboard API fails, use fallback
        fallbackCopyTextToClipboard(linkUrl);
      });
    } else {
      // Use fallback directly if Clipboard API not available
      fallbackCopyTextToClipboard(linkUrl);
    }
    
    // Close popover
    setShowSharePopover(false);
    
    // Show "Link Copied" state
    setShareState('copied');
    
    // Show tooltip with pulse animation
    setShowTooltip(true);
    
    // Reset after 3s
    setTimeout(() => {
      setShareState('idle');
      setShowTooltip(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-900"
        >
          <X className="w-5 h-5" />
        </button>

        {phase === 'loading' ? (
          // Loading Phase
          <div className="px-12 py-16 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center">
              <FileText className="w-8 h-8 text-blue-600 animate-pulse" style={{ animationDuration: '2s' }} />
            </div>
            <p className="text-[15px] font-medium text-gray-900 animate-pulse" style={{ animationDuration: '2s' }}>
              Generating executive narrative…
            </p>
          </div>
        ) : (
          // Results Phase
          <div className={`px-8 py-8 transition-all duration-200 ${showSharePopover ? 'pb-48' : ''}`}>
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-gray-900 font-semibold mb-1">Executive Story Generated</h2>
              <p className="text-[13px] text-gray-600">Your financial narrative has been compiled into a presentation deck</p>
            </div>

            {/* Slide Previews */}
            <div className="flex gap-4 mb-8">
              {/* Slide 1 */}
              <div 
                className="flex-1 rounded-lg border border-gray-200 bg-white overflow-hidden transition-all cursor-pointer group relative"
                style={{
                  boxShadow: downloadState === 'packaging' || downloadState === 'success' 
                    ? '0 4px 12px rgba(0, 0, 0, 0.1)' 
                    : '0 1px 2px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Hover overlay with magnifying glass */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-200 flex items-center justify-center pointer-events-none z-10">
                  <Search className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
                
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-white p-6 flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-2 py-0.5 rounded text-[9px] font-semibold text-blue-700 bg-blue-100 mb-3">
                      SLIDE 1
                    </div>
                    <div className="text-[11px] font-semibold text-gray-900 mb-2">Executive Summary</div>
                    <div className="space-y-1">
                      <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                      <div className="h-1.5 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-1.5 bg-gray-200 rounded w-3/5"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-blue-100"></div>
                    <div className="w-8 h-8 rounded bg-emerald-100"></div>
                    <div className="w-8 h-8 rounded bg-amber-100"></div>
                  </div>
                </div>
                <div className="px-3 py-2 bg-gray-50 border-t border-gray-100">
                  <p className="text-[10px] font-medium text-gray-600">Key Metrics Overview</p>
                </div>
              </div>

              {/* Slide 2 */}
              <div 
                className="flex-1 rounded-lg border border-gray-200 bg-white overflow-hidden transition-all cursor-pointer group relative"
                style={{
                  boxShadow: downloadState === 'packaging' || downloadState === 'success' 
                    ? '0 4px 12px rgba(0, 0, 0, 0.1)' 
                    : '0 1px 2px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-200 flex items-center justify-center pointer-events-none z-10">
                  <Search className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
                
                <div className="aspect-[4/3] bg-gradient-to-br from-indigo-50 to-white p-6 flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-2 py-0.5 rounded text-[9px] font-semibold text-indigo-700 bg-indigo-100 mb-3">
                      SLIDE 2
                    </div>
                    <div className="text-[11px] font-semibold text-gray-900 mb-3">Revenue Analysis</div>
                    <div className="h-16 flex items-end gap-1">
                      <div className="w-full h-8 bg-blue-200 rounded-t"></div>
                      <div className="w-full h-12 bg-blue-300 rounded-t"></div>
                      <div className="w-full h-16 bg-blue-400 rounded-t"></div>
                      <div className="w-full h-14 bg-blue-300 rounded-t"></div>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-2 bg-gray-50 border-t border-gray-100">
                  <p className="text-[10px] font-medium text-gray-600">Growth Trends</p>
                </div>
              </div>

              {/* Slide 3 */}
              <div 
                className="flex-1 rounded-lg border border-gray-200 bg-white overflow-hidden transition-all cursor-pointer group relative"
                style={{
                  boxShadow: downloadState === 'packaging' || downloadState === 'success' 
                    ? '0 4px 12px rgba(0, 0, 0, 0.1)' 
                    : '0 1px 2px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-200 flex items-center justify-center pointer-events-none z-10">
                  <Search className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
                
                <div className="aspect-[4/3] bg-gradient-to-br from-violet-50 to-white p-6 flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-2 py-0.5 rounded text-[9px] font-semibold text-violet-700 bg-violet-100 mb-3">
                      SLIDE 3
                    </div>
                    <div className="text-[11px] font-semibold text-gray-900 mb-3">Strategic Insights</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        <div className="h-1 bg-gray-200 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <div className="h-1 bg-gray-200 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                        <div className="h-1 bg-gray-200 rounded flex-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-2 bg-gray-50 border-t border-gray-100">
                  <p className="text-[10px] font-medium text-gray-600">Action Items</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 relative">
              {/* Download PowerPoint Button */}
              <button 
                onClick={handleDownload}
                disabled={downloadState !== 'idle'}
                className={`flex-1 px-4 py-2.5 rounded-lg text-white inline-flex items-center justify-center gap-2 text-[13px] font-medium transition-all duration-200 ${
                  downloadState === 'idle' 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : downloadState === 'packaging'
                    ? 'bg-blue-600'
                    : 'bg-emerald-600'
                }`}
                style={{ 
                  boxShadow: downloadState === 'idle' 
                    ? 'var(--shadow-blue-sm)' 
                    : downloadState === 'success'
                    ? '0 2px 8px rgba(16, 185, 129, 0.3)'
                    : 'var(--shadow-blue-sm)'
                }}
              >
                {downloadState === 'idle' && (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download PowerPoint</span>
                  </>
                )}
                {downloadState === 'packaging' && (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Packaging Slides…</span>
                  </>
                )}
                {downloadState === 'success' && (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Downloaded!</span>
                  </>
                )}
              </button>
              
              {/* Share Link Button */}
              <div className="flex-1 relative">
                <button 
                  ref={shareButtonRef}
                  onClick={handleShareClick}
                  className={`w-full px-4 py-2.5 rounded-lg border text-gray-700 inline-flex items-center justify-center gap-2 text-[13px] font-medium transition-all duration-200 ${
                    showSharePopover 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:bg-gray-50 hover:border-blue-400'
                  }`}
                >
                  <Share2 className={`w-4 h-4 ${showTooltip ? 'share-pulse' : ''}`} />
                  <span>{shareState === 'copied' ? 'Link Copied' : 'Share Link'}</span>
                </button>

                {/* Tooltip */}
                {showTooltip && (
                  <div 
                    className="absolute -top-14 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[11px] px-3 py-2 rounded-lg whitespace-nowrap animate-fade-in z-50"
                    style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
                  >
                    Secure link copied to clipboard (Expires in 7 days)
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                )}

                {/* Share Popover */}
                {showSharePopover && (
                  <div 
                    ref={popoverRef}
                    className="absolute top-full mt-2 left-0 right-0 bg-white rounded-lg border border-gray-200 p-4 z-50 animate-fade-in"
                    style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)' }}
                  >
                    {/* Access Toggle */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[12px] font-medium text-gray-700">Access Level</span>
                        <button
                          onClick={() => setIsPublicAccess(!isPublicAccess)}
                          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                            isPublicAccess ? 'bg-gray-400' : 'bg-blue-600'
                          }`}
                        >
                          <span
                            className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                              isPublicAccess ? 'translate-x-1' : 'translate-x-4'
                            }`}
                          />
                        </button>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className={`${isPublicAccess ? 'text-gray-500' : 'text-gray-400'}`}>Public</span>
                        <span className={`${!isPublicAccess ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>Organization Only</span>
                      </div>
                    </div>

                    {/* Permission Info */}
                    <div className="mb-3 px-2 py-1.5 bg-blue-50 rounded text-[11px] text-blue-700 border border-blue-100">
                      {isPublicAccess 
                        ? 'Anyone with the link can view' 
                        : 'Anyone at DOSINA Inc. can view'}
                    </div>

                    {/* Copy Link Action */}
                    <button
                      onClick={handleCopyLink}
                      className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-[12px] font-medium inline-flex items-center justify-center gap-2 transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      Copy Link
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes share-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-fade-in {
          animation: fade-in 200ms ease-out;
        }

        .share-pulse {
          animation: share-pulse 600ms ease-in-out 1;
        }
      `}</style>
    </div>
  );
}