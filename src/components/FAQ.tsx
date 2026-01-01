import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How secure is my financial data?',
      answer: 'Your data is encrypted end-to-end using bank-level AES-256 encryption. We are SOC 2 certified and GDPR compliant. Your files are processed in isolated environments and automatically deleted after analysis.'
    },
    {
      question: 'What file formats do you support?',
      answer: 'DOSINA supports PDF, Excel (.xlsx, .xls), and CSV formats. We can process both structured spreadsheets and unstructured PDF reports, extracting financial data using AI-powered OCR and pattern recognition.'
    },
    {
      question: 'How long does the analysis take?',
      answer: 'Most reports are analyzed in 10-15 seconds. Complex multi-page financial statements may take up to 30 seconds. You\'ll receive real-time progress updates during processing.'
    },
    {
      question: 'Can I export the dashboards and insights?',
      answer: 'Yes! You can export your dashboards as PDF reports, PowerPoint presentations, or Excel workbooks. All charts, metrics, and AI-generated insights are included. You can also share interactive dashboard links with your team.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Header */}
        <h2 className="text-[32px] font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* Accordion List */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between py-8 text-left group hover:bg-gray-50/50 transition-colors px-4 -mx-4 rounded-lg"
              >
                <span className="text-[16px] font-semibold text-[#111827] pr-8 group-hover:text-blue-700 transition-colors">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#1A56DB]" strokeWidth={2} />
                  ) : (
                    <Plus className="w-5 h-5 text-[#1A56DB]" strokeWidth={2} />
                  )}
                </div>
              </button>
              
              {/* Answer - Collapsible */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-8 px-4 -mx-4">
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
