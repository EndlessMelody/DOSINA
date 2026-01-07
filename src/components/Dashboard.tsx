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
import { ExecutiveFinancialSnapshot } from './ExecutiveFinancialSnapshot';
import { useState } from 'react';
import { TrendingUp, Percent, Activity } from 'lucide-react';

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

        {/* Title Section */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white mb-4" style={{ boxShadow: 'var(--shadow-sm)' }}>
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
            <span className="text-[12px] text-gray-700 font-medium">
              Executive Financial Snapshot
            </span>
          </div>
          
          <h1 className="text-[40px] leading-[1.1] font-semibold tracking-[-0.03em] text-gray-900 mb-2">
            Q4 2021 Financial Overview
          </h1>
          <p className="text-[16px] text-gray-500">
            {currentPeriod} Report • AI-Generated Summary
          </p>
        </div>

        {/* Executive KPI Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Revenue Growth Card */}
          <div 
            className="bg-white rounded-lg border border-gray-200 p-6 transition-all duration-200"
            style={{ boxShadow: 'var(--shadow-md)' }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              
              <div className="px-2.5 py-1 rounded-md text-[11px] font-semibold border bg-emerald-50 border-emerald-200 text-emerald-700">
                ↑ +12% QoQ
              </div>
            </div>
            
            <div className="text-[12px] text-gray-500 font-medium mb-2 uppercase tracking-wide">
              Revenue Growth
            </div>
            
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[32px] font-bold text-gray-900 tracking-tight">
                +12%
              </span>
              <span className="text-[15px] text-gray-500">
                QoQ
              </span>
            </div>
            
            <div className="text-[12px] text-gray-500">
              Positive growth trajectory
            </div>
          </div>

          {/* Profit Margin Card */}
          <div 
            className="bg-white rounded-lg border border-gray-200 p-6 transition-all duration-200"
            style={{ boxShadow: 'var(--shadow-md)' }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                <Percent className="w-5 h-5 text-amber-600" />
              </div>
              
              <div className="px-2.5 py-1 rounded-md text-[11px] font-semibold border bg-rose-50 border-rose-200 text-rose-700">
                ↓ -1.5 pts
              </div>
            </div>
            
            <div className="text-[12px] text-gray-500 font-medium mb-2 uppercase tracking-wide">
              Profit Margin
            </div>
            
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[32px] font-bold text-gray-900 tracking-tight">
                8.6%
              </span>
            </div>
            
            <div className="text-[12px] text-gray-500">
              Down from 10.1%
            </div>
          </div>

          {/* Cash Runway Card */}
          <div 
            className="bg-white rounded-lg border border-gray-200 p-6 transition-all duration-200"
            style={{ boxShadow: 'var(--shadow-md)' }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-red-600" />
              </div>
              
              <div className="px-2.5 py-1 rounded-md text-[11px] font-semibold border bg-rose-50 border-rose-200 text-rose-700">
                Critical
              </div>
            </div>
            
            <div className="text-[12px] text-gray-500 font-medium mb-2 uppercase tracking-wide">
              Cash Runway
            </div>
            
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[32px] font-bold text-gray-900 tracking-tight">
                6.2
              </span>
              <span className="text-[15px] text-gray-500">
                months
              </span>
            </div>
            
            <div className="text-[12px] text-gray-500">
              Requires immediate attention
            </div>
          </div>
        </div>

        {/* Charts Section - Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue, Cost, Profit Trend */}
          <div className="bg-white rounded-lg border border-gray-200 p-8" style={{ boxShadow: 'var(--shadow-md)' }}>
            <h2 className="text-[18px] font-semibold tracking-tight text-gray-900 mb-6">
              Revenue, Cost & Profit Trend
            </h2>
            
            <RevenueChart comparisonMode="single" showRevenue={true} />
            
            <p className="text-[13px] leading-[1.5] text-gray-500 mt-6">
              Revenue growing steadily while costs increase faster, compressing profit margins quarter over quarter.
            </p>
          </div>

          {/* Cost Structure Breakdown */}
          <div className="bg-white rounded-lg border border-gray-200 p-8" style={{ boxShadow: 'var(--shadow-md)' }}>
            <h2 className="text-[18px] font-semibold tracking-tight text-gray-900 mb-6">
              Cost Structure Breakdown
            </h2>
            <ExpenseBreakdownChart comparisonMode="single" />
            
            <p className="text-[13px] leading-[1.5] text-gray-500 mt-6">
              Operating expenses represent the largest cost category, with increasing pressure on profitability.
            </p>
          </div>
        </div>

        {/* Executive Insights Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8" style={{ boxShadow: 'var(--shadow-md)' }}>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-blue-600" />
            </div>
            <h2 className="text-[18px] font-semibold tracking-tight text-gray-900">
              Key Executive Insights
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></div>
                <p className="text-[14px] leading-[1.7] text-gray-700">
                  <span className="font-semibold">Revenue growth</span> continues with +12% QoQ increase, demonstrating strong market demand and effective sales execution
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                <p className="text-[14px] leading-[1.7] text-gray-700">
                  <span className="font-semibold">Margin compression</span> from 10.1% to 8.6% signals rising cost pressure requiring strategic cost management
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></div>
                <p className="text-[14px] leading-[1.7] text-gray-700">
                  <span className="font-semibold">Cash flow risk</span> with only 6.2 months runway—immediate action required to extend operational timeline
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></div>
                <p className="text-[14px] leading-[1.7] text-gray-700">
                  <span className="font-semibold">Cost pressure</span> as operating expenses grow faster than revenue, necessitating efficiency optimization
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Narrative Block */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-8" style={{ boxShadow: 'var(--shadow-md)' }}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-[16px] font-semibold text-gray-900">AI Financial Narrative</h3>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-100 border border-blue-200">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" style={{ animationDuration: '2s' }}></div>
                  <span className="text-[10px] font-semibold text-blue-700 uppercase tracking-wide">
                    AI-Generated
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-[15px] leading-[1.8] text-gray-800 font-medium">
                  "The business is experiencing revenue growth; however, rising costs are compressing profit margins. If expenses are not controlled, cash flow may become a critical risk within the next six months."
                </p>
                
                <div className="flex items-start gap-2 pt-4 border-t border-blue-200">
                  <svg className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-[13px] leading-[1.6] text-gray-700">
                    <span className="font-semibold text-amber-700">Recommended Action:</span> Immediate cost optimization and cash flow management strategies should be prioritized to ensure operational sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}