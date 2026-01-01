import { Upload, FileText, X, CheckCircle, Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';

interface UploadReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadComplete: () => void;
}

export function UploadReportModal({ isOpen, onClose, onUploadComplete }: UploadReportModalProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadState, setUploadState] = useState<'idle' | 'processing' | 'success'>('idle');
  const [pageCount, setPageCount] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const processFile = (file: File) => {
    setUploadState('processing');
    setPageCount(0);

    // Simulate processing with page counter
    const totalPages = Math.floor(Math.random() * 20) + 15; // 15-35 pages
    let currentPage = 0;

    const interval = setInterval(() => {
      currentPage += 1;
      setPageCount(currentPage);

      if (currentPage >= totalPages) {
        clearInterval(interval);
        setTimeout(() => {
          setUploadState('success');
          setTimeout(() => {
            onUploadComplete();
            handleClose();
          }, 800);
        }, 300);
      }
    }, 60); // ~1.8-2.5 seconds total processing time
  };

  const handleClose = () => {
    setUploadState('idle');
    setPageCount(0);
    setIsDragging(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/20 backdrop-blur-sm">
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden"
        style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-blue-600" />
            <h2 className="text-[16px] font-semibold text-gray-900">Upload Financial Report</h2>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {uploadState === 'idle' && (
            <>
              {/* Drag and Drop Zone */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`
                  border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-all
                  ${isDragging 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50/50'
                  }
                `}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    isDragging ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <FileText className={`w-6 h-6 ${isDragging ? 'text-blue-600' : 'text-gray-500'}`} />
                  </div>
                  
                  <div>
                    <p className="text-[14px] font-medium text-gray-900 mb-1">
                      Drop your financial report here
                    </p>
                    <p className="text-[13px] text-gray-500">
                      or click to browse files
                    </p>
                  </div>

                  <div className="text-[12px] text-gray-400 mt-2">
                    Supported formats: PDF, Excel, CSV
                  </div>
                </div>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.xlsx,.xls,.csv"
                onChange={handleFileSelect}
                className="hidden"
              />
            </>
          )}

          {uploadState === 'processing' && (
            <div className="py-12 flex flex-col items-center gap-4">
              <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
              <div className="text-center">
                <p className="text-[15px] font-medium text-gray-900 mb-1">
                  Processing pages…
                </p>
                <p className="text-[24px] font-bold text-blue-600 tabular-nums">
                  {pageCount}
                </p>
              </div>
            </div>
          )}

          {uploadState === 'success' && (
            <div className="py-12 flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-emerald-600" />
              </div>
              <div className="text-center">
                <p className="text-[15px] font-semibold text-gray-900">
                  Upload Complete
                </p>
                <p className="text-[13px] text-gray-500 mt-1">
                  {pageCount} pages processed successfully
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
