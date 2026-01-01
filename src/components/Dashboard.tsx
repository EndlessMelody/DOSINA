import { RevenueChart } from './RevenueChart';
import { ExpenseBreakdownChart } from './ExpenseBreakdownChart';
import { KeyInsightsCard } from './KeyInsightsCard';
import { FinancialSummaryCard } from './FinancialSummaryCard';
import { DashboardHeader } from './DashboardHeader';
import { FinancialHealthScore } from './FinancialHealthScore';
import { ExecutiveSummary } from './ExecutiveSummary';
import { KeyMetricsOverview } from './KeyMetricsOverview';
import { ActionRecommendations } from './ActionRecommendations';
import { ComparisonToggle } from './ComparisonToggle';
import { QuickFilters } from './QuickFilters';
import { InsightsSidebar } from './InsightsSidebar';
import { DataTableToggle } from './DataTableToggle';
import { RevenueDataTable } from './RevenueDataTable';
import { BenchmarkIndicator } from './BenchmarkIndicator';
import { useState } from 'react';

interface DashboardProps {
  onBackToLanding: () => void;
}

export function Dashboard({ onBackToLanding }: DashboardProps) {
  const [comparisonMode, setComparisonMode] = useState<'single' | 'comparison'>('single');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [revenueView, setRevenueView] = useState<'chart' | 'table'>('chart');
  const [triggerShimmer, setTriggerShimmer] = useState(false);
  const [currentPeriod, setCurrentPeriod] = useState('Q4 2021');
  const [isLoadingPeriod, setIsLoadingPeriod] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>(['Revenue', 'Profitability']);
  const [viewMode, setViewMode] = useState<'default' | 'risk'>('default');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showRevenueInChart, setShowRevenueInChart] = useState(true);

  const handleUploadComplete = () => {
    setTriggerShimmer(true);
    // Reset shimmer trigger after animation completes
    setTimeout(() => {
      setTriggerShimmer(false);
    }, 1600);
  };

  const handlePeriodChange = (period: string) => {
    setIsLoadingPeriod(true);
    setCurrentPeriod(period);
    
    // Simulate data loading: 400ms fade in, 400ms fade out
    setTimeout(() => {
      setIsLoadingPeriod(false);
    }, 800);
  };

  const handleFilterChange = (newFilters: string[]) => {
    const wasWarningsActive = activeFilters.includes('Warnings');
    const isWarningsActive = newFilters.includes('Warnings');
    const wasRevenueActive = activeFilters.includes('Revenue');
    const isRevenueActive = newFilters.includes('Revenue');

    // Check if this is a "Clear all" action
    const isClearAll = newFilters.length === 2 && 
                       newFilters.includes('Revenue') && 
                       newFilters.includes('Profitability') &&
                       activeFilters.length > 2;

    setActiveFilters(newFilters);

    // Handle view mode transitions
    if (isClearAll) {
      // Clear all: Reset to default view with refresh sweep
      setIsTransitioning(true);
      setViewMode('default');
      setShowRevenueInChart(true);
      setTimeout(() => setIsTransitioning(false), 200);
    } else if (isWarningsActive && !wasWarningsActive) {
      // Warnings activated: Switch to risk view
      setViewMode('risk');
    } else if (!isWarningsActive && wasWarningsActive) {
      // Warnings deactivated: Return to default
      setViewMode('default');
    }

    // Handle revenue visibility
    if (!isRevenueActive && wasRevenueActive) {
      // Revenue deactivated: Hide revenue in chart
      setShowRevenueInChart(false);
    } else if (isRevenueActive && !wasRevenueActive) {
      // Revenue activated: Show revenue in chart
      setShowRevenueInChart(true);
    }
  };

  // Calculate opacity for positive/green cards based on view mode
  const positiveCardOpacity = viewMode === 'risk' ? 0.3 : 1;
  const riskCardOpacity = 1;
  const revenueCardOpacity = activeFilters.includes('Revenue') ? 1 : 0;
  const revenueCardHeight = activeFilters.includes('Revenue') ? 'auto' : '0';

  // Transition styles
  const transitionStyle = {
    transition: 'opacity 250ms ease-out, transform 250ms ease-out, height 300ms ease-out'
  };

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Header */}
      <DashboardHeader 
        onBackToLanding={onBackToLanding} 
        onToggleInsights={() => setSidebarOpen(!sidebarOpen)}
        onUploadComplete={handleUploadComplete}
        onPeriodChange={handlePeriodChange}
        currentPeriod={currentPeriod}
      />

      {/* Insights Sidebar */}
      <InsightsSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 lg:px-8 py-8 relative">
        {/* Loading Overlay - Only on main content area */}
        {isLoadingPeriod && (
          <div 
            className="absolute inset-0 bg-gray-900 rounded-lg pointer-events-none z-10"
            style={{
              animation: 'overlayFade 800ms ease-in-out',
              opacity: 0
            }}
          />
        )}

        {/* Clear All Refresh Sweep */}
        {isTransitioning && (
          <div 
            className="absolute inset-0 bg-white rounded-lg pointer-events-none z-10"
            style={{
              animation: 'refreshSweep 200ms linear',
              opacity: 0
            }}
          />
        )}

        <style>{`
          @keyframes overlayFade {
            0% { opacity: 0; }
            50% { opacity: 0.4; }
            100% { opacity: 0; }
          }

          @keyframes refreshSweep {
            0% { 
              opacity: 0.06;
              transform: translateY(-100%);
            }
            100% { 
              opacity: 0.08;
              transform: translateY(100%);
            }
          }
        `}</style>

        {/* Title Section with Controls */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white mb-4" style={{ boxShadow: 'var(--shadow-sm)' }}>
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span className="text-[12px] text-gray-700 font-medium">
                  Real-time Financial Analytics
                </span>
              </div>
              
              <h1 className="text-[40px] leading-[1.1] font-semibold tracking-[-0.03em] text-gray-900 mb-2">
                Company Financial Overview
              </h1>
              <p className="text-[16px] text-gray-500">
                {currentPeriod} Report • Last updated 2 hours ago
              </p>
            </div>

            <ComparisonToggle onModeChange={setComparisonMode} />
          </div>
        </div>

        {/* Grouped Filters + KPI Section */}
        <div 
          className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-5 mb-6"
          style={{ boxShadow: 'var(--shadow-sm)' }}
        >
          {/* Quick Filters - Horizontally aligned at top */}
          <div className="mb-4">
            <QuickFilters activeFilters={activeFilters} onFilterChange={handleFilterChange} />
          </div>

          {/* Key Metrics Overview with embedded Executive Summary */}
          <KeyMetricsOverview comparisonMode={comparisonMode} triggerShimmer={triggerShimmer} />
        </div>

        {/* Benchmark Indicators */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div style={{ opacity: viewMode === 'risk' ? 0.3 : 1, ...transitionStyle }}>
            <BenchmarkIndicator metric="Net Margin" value={8} industryAverage={10.5} unit="%" />
          </div>
          <div style={{ opacity: viewMode === 'risk' ? 0.3 : 1, ...transitionStyle }}>
            <BenchmarkIndicator metric="ROE" value={14.2} industryAverage={12.0} unit="%" />
          </div>
          <div style={{ opacity: viewMode === 'risk' ? 0.3 : 1, ...transitionStyle }}>
            <BenchmarkIndicator metric="Current Ratio" value={1.8} industryAverage={2.0} unit="" />
          </div>
          <div style={{ opacity: viewMode === 'risk' ? 0.3 : 1, ...transitionStyle }}>
            <BenchmarkIndicator metric="Revenue Growth" value={15} industryAverage={8.5} unit="%" />
          </div>
        </div>

        {/* Financial Health Score - Standalone - Risk card, stays at full opacity */}
        <div className="mb-6" style={{ ...transitionStyle }}>
          <FinancialHealthScore score={68} trend="down" previousScore={75} />
        </div>

        {/* Action Recommendations - High Priority - Risk card, stays at full opacity */}
        <div className="mb-6" style={{ ...transitionStyle }}>
          <ActionRecommendations />
        </div>

        {/* Detailed Analytics - Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Revenue Chart with Metric Drivers below it */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-8" style={{ boxShadow: 'var(--shadow-md)' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[18px] font-semibold tracking-tight text-gray-900">
                  Revenue & Net Profit
                </h2>
                <DataTableToggle view={revenueView} onViewChange={setRevenueView} />
              </div>
              
              {revenueView === 'chart' ? <RevenueChart comparisonMode={comparisonMode} showRevenue={showRevenueInChart} /> : <RevenueDataTable />}
              
              <p className="text-[13px] leading-[1.5] text-gray-500 mt-6">
                Revenue shows consistent growth trajectory, while net profit experienced a decline in Q4 due to increased operational costs.
              </p>
            </div>

            {/* Metric Drivers - Positioned below the chart it explains */}
            <KeyInsightsCard />
          </div>

          {/* Financial Summary on the right */}
          <FinancialSummaryCard />
        </div>

        {/* Bottom Section - Expense Breakdown */}
        <div className="bg-white rounded-lg border border-gray-200 p-8" style={{ boxShadow: 'var(--shadow-md)' }}>
          <h2 className="text-[18px] font-semibold tracking-tight text-gray-900 mb-6">
            Expense Breakdown
          </h2>
          <ExpenseBreakdownChart comparisonMode={comparisonMode} />
        </div>
      </main>
    </div>
  );
}