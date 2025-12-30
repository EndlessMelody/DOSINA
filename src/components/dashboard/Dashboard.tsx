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

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Header */}
      <DashboardHeader 
        onBackToLanding={onBackToLanding} 
        onToggleInsights={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Insights Sidebar */}
      <InsightsSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 lg:px-8 py-8">
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
                Q4 2021 Report • Last updated 2 hours ago
              </p>
            </div>

            <ComparisonToggle onModeChange={setComparisonMode} />
          </div>

          {/* Quick Filters */}
          <QuickFilters />
        </div>

        {/* Key Metrics Overview - First Priority */}
        <div className="mb-6">
          <KeyMetricsOverview />
        </div>

        {/* Benchmark Indicators */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <BenchmarkIndicator metric="Net Margin" value={8} industryAverage={10.5} unit="%" />
          <BenchmarkIndicator metric="ROE" value={14.2} industryAverage={12.0} unit="%" />
          <BenchmarkIndicator metric="Current Ratio" value={1.8} industryAverage={2.0} unit="" />
          <BenchmarkIndicator metric="Revenue Growth" value={15} industryAverage={8.5} unit="%" />
        </div>

        {/* Health Score + Executive Summary Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <FinancialHealthScore score={68} trend="down" previousScore={75} />
          <div className="lg:col-span-2">
            <ExecutiveSummary />
          </div>
        </div>

        {/* Action Recommendations - High Priority */}
        <div className="mb-6">
          <ActionRecommendations />
        </div>

        {/* Detailed Analytics - Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <KeyInsightsCard />
          
          <div className="bg-white rounded-lg border border-gray-200 p-8" style={{ boxShadow: 'var(--shadow-md)' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[18px] font-semibold tracking-tight text-gray-900">
                Revenue & Net Profit
              </h2>
              <DataTableToggle view={revenueView} onViewChange={setRevenueView} />
            </div>
            
            {revenueView === 'chart' ? <RevenueChart /> : <RevenueDataTable />}
            
            <p className="text-[13px] leading-[1.5] text-gray-500 mt-6">
              Revenue shows consistent growth trajectory, while net profit experienced a decline in Q4 due to increased operational costs.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-8" style={{ boxShadow: 'var(--shadow-md)' }}>
            <h2 className="text-[18px] font-semibold tracking-tight text-gray-900 mb-6">
              Expense Breakdown
            </h2>
            <ExpenseBreakdownChart />
            <p className="text-[13px] leading-[1.5] text-gray-500 mt-6">
              Cost of Goods Sold represents the largest expense category, followed by S&A expenses which increased significantly in Q4.
            </p>
          </div>

          <FinancialSummaryCard />
        </div>
      </main>
    </div>
  );
}