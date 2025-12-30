export function TrustedLogos() {
  const companies = [
    {
      name: 'OpenAI',
      logo: (
        <svg viewBox="0 0 120 30" className="h-7" fill="currentColor">
          <text x="0" y="22" fontSize="20" fontWeight="700" fontFamily="Inter, sans-serif">OpenAI</text>
        </svg>
      )
    },
    {
      name: 'Microsoft',
      logo: (
        <svg viewBox="0 0 120 30" className="h-7" fill="currentColor">
          <text x="0" y="22" fontSize="18" fontWeight="600" fontFamily="Inter, sans-serif">Microsoft</text>
        </svg>
      )
    },
    {
      name: 'Sequoia',
      logo: (
        <svg viewBox="0 0 100 30" className="h-7" fill="currentColor">
          <text x="0" y="22" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif">SEQUOIA</text>
        </svg>
      )
    },
    {
      name: 'Y Combinator',
      logo: (
        <svg viewBox="0 0 30 30" className="h-8" fill="currentColor">
          <rect width="30" height="30" rx="4" fill="#FF6600"/>
          <text x="15" y="22" fontSize="20" fontWeight="900" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">Y</text>
        </svg>
      )
    },
    {
      name: 'Stripe',
      logo: (
        <svg viewBox="0 0 80 30" className="h-7" fill="currentColor">
          <text x="0" y="22" fontSize="20" fontWeight="700" fontFamily="Inter, sans-serif">Stripe</text>
        </svg>
      )
    },
    {
      name: 'Notion',
      logo: (
        <svg viewBox="0 0 80 30" className="h-7" fill="currentColor">
          <text x="0" y="22" fontSize="18" fontWeight="600" fontFamily="Inter, sans-serif">Notion</text>
        </svg>
      )
    },
  ];

  const stats = [
    { value: '1,200+', label: 'Finance Teams' },
    { value: '$2.4B+', label: 'Reports Analyzed' },
    { value: '98%', label: 'AI Accuracy' }
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-gray-50/30 border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[12px] uppercase tracking-wider text-gray-500 font-semibold mb-6">
            Trusted by finance teams at leading companies
          </p>
          
          {/* Logo Grid */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 mb-12">
            {companies.map((company, idx) => (
              <div
                key={idx}
                className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
                title={company.name}
              >
                <div className="text-gray-700 hover:text-gray-900 transition-colors">
                  {company.logo}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="flex items-center justify-center gap-12 pt-8 border-t border-gray-200/60">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-[28px] font-bold text-gray-900 leading-none mb-1.5">
                  {stat.value}
                </div>
                <div className="text-[12px] text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
