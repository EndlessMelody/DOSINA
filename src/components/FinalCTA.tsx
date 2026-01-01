import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onTryDemo: () => void;
}

export function FinalCTA({ onTryDemo }: FinalCTAProps) {
  return (
    <section className="w-full bg-white py-[100px]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-[42px] font-bold text-gray-900 mb-4 tracking-tight">
          Ready to automate your financial reporting?
        </h2>
        
        {/* Subheadline */}
        <p className="text-[18px] text-gray-600 mb-10 max-w-2xl mx-auto">
          Join hundreds of finance teams transforming complex reports into actionable insights in seconds
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center">
          <button
            onClick={onTryDemo}
            className="bg-[#1A56DB] hover:bg-[#1A56DB]/90 text-white text-[17px] px-12 py-5 rounded-lg transition-all font-semibold inline-flex items-center gap-3 group shadow-lg hover:shadow-xl hover:shadow-blue-500/30"
          >
            <span>Start Free Analysis</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </button>
          
          {/* Trust Cue */}
          <p className="text-[13px] text-gray-500 mt-4">
            No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
