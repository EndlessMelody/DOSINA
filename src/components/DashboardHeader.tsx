import { useState, useRef } from 'react';
import { ChevronDown, Download, FileText, Upload, Calendar, Lightbulb } from 'lucide-react';
import { GenerateStoryModal } from './GenerateStoryModal';
import { PDFExportToast } from './PDFExportToast';
import { UploadReportModal } from './UploadReportModal';
import { DatePickerDropdown } from './DatePickerDropdown';

interface DashboardHeaderProps {
  onBackToLanding: () => void;
  onToggleInsights?: () => void;
  onUploadComplete?: () => void;
  onPeriodChange?: (period: string) => void;
  currentPeriod?: string;
}

export function DashboardHeader({ 
  onBackToLanding, 
  onToggleInsights, 
  onUploadComplete,
  onPeriodChange,
  currentPeriod = 'Q4 2021'
}: DashboardHeaderProps) {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isPDFExporting, setIsPDFExporting] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const dateButtonRef = useRef<HTMLButtonElement>(null);

  const handleExportPDF = () => {
    setIsPDFExporting(true);
  };

  const handleUploadComplete = () => {
    setIsUploadModalOpen(false);
    onUploadComplete?.();
  };

  const handlePeriodSelect = (period: string) => {
    onPeriodChange?.(period);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <button 
          onClick={onBackToLanding}
          className="text-[15px] font-semibold tracking-tight text-gray-900 hover:text-blue-600 transition-colors cursor-pointer"
        >
          DOSINA
        </button>
        
        <div className="flex items-center gap-3">
          {/* Time Period Selector */}
          <button 
            ref={dateButtonRef}
            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
            className="px-3.5 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors inline-flex items-center gap-2 text-[13px] font-medium"
          >
            <Calendar className="w-4 h-4" />
            <span>{currentPeriod}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-200"></div>

          {/* Insights Toggle */}
          {onToggleInsights && (
            <button 
              onClick={onToggleInsights}
              className="px-3.5 py-2 rounded-md border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors inline-flex items-center gap-2 text-[13px] font-medium"
            >
              <Lightbulb className="w-4 h-4" />
              <span>Live Insights</span>
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
            </button>
          )}

          {/* Export Options */}
          <button 
            onClick={handleExportPDF}
            className="px-3.5 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors inline-flex items-center gap-2 text-[13px] font-medium"
          >
            <Download className="w-4 h-4" />
            <span>Export PDF</span>
          </button>

          <button 
            onClick={() => setIsUploadModalOpen(true)}
            className="px-3.5 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors inline-flex items-center gap-2 text-[13px] font-medium"
          >
            <Upload className="w-4 h-4" />
            <span>Upload Report</span>
          </button>

          {/* Primary Action */}
          <button 
            onClick={() => setIsStoryModalOpen(true)}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors inline-flex items-center gap-2 text-[13px] font-medium"
            style={{ boxShadow: 'var(--shadow-blue-sm)' }}
          >
            <FileText className="w-4 h-4" />
            <span>Generate Story</span>
          </button>
        </div>
      </div>
    </header>

    {/* Generate Story Modal */}
    <GenerateStoryModal 
      isOpen={isStoryModalOpen}
      onClose={() => setIsStoryModalOpen(false)}
    />

    {/* PDF Export Toast */}
    <PDFExportToast 
      isVisible={isPDFExporting}
      onComplete={() => setIsPDFExporting(false)}
    />

    {/* Upload Report Modal */}
    <UploadReportModal 
      isOpen={isUploadModalOpen}
      onClose={() => setIsUploadModalOpen(false)}
      onUploadComplete={handleUploadComplete}
    />

    {/* Date Picker Dropdown */}
    <DatePickerDropdown 
      isOpen={isDatePickerOpen}
      onClose={() => setIsDatePickerOpen(false)}
      currentPeriod={currentPeriod}
      onPeriodSelect={handlePeriodSelect}
      buttonRef={dateButtonRef}
    />
    </>
  );
}