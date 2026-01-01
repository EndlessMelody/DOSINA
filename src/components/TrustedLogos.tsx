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
    {
      name: 'Salesforce',
      logo: (
        <svg viewBox="0 0 120 30" className="h-7" fill="currentColor">
          <text x="0" y="22" fontSize="17" fontWeight="700" fontFamily="Inter, sans-serif">Salesforce</text>
        </svg>
      )
    },
    {
      name: 'Databricks',
      logo: (
        <svg viewBox="0 0 120 30" className="h-7" fill="currentColor">
          <text x="0" y="22" fontSize="17" fontWeight="600" fontFamily="Inter, sans-serif">Databricks</text>
        </svg>
      )
    },
    {
      name: 'Airbnb',
      logo: (
        <svg viewBox="0 0 90 30" className="h-7" fill="currentColor">
          <text x="0" y="22" fontSize="19" fontWeight="600" fontFamily="Inter, sans-serif">Airbnb</text>
        </svg>
      )
    },
    {
      name: 'Figma',
      logo: (
        <svg viewBox="0 0 80 30" className="h-7" fill="currentColor">
          <text x="0" y="22" fontSize="20" fontWeight="700" fontFamily="Inter, sans-serif">Figma</text>
        </svg>
      )
    },
    {
      name: 'Snowflake',
      logo: (
        <svg viewBox="0 0 110 30" className="h-7" fill="currentColor">
          <text x="0" y="22" fontSize="17" fontWeight="600" fontFamily="Inter, sans-serif">Snowflake</text>
        </svg>
      )
    },
    {
      name: 'Dropbox',
      logo: (
        <svg viewBox="0 0 100 30" className="h-7" fill="currentColor">
          <text x="0" y="22" fontSize="19" fontWeight="600" fontFamily="Inter, sans-serif">Dropbox</text>
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
    <section className="w-full py-16 bg-[#F9FAFB] border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[12px] uppercase tracking-wider text-gray-500 font-semibold mb-6">
            Trusted by finance teams at leading companies
          </p>
          
          {/* Scrolling Logo Container */}
          <div className="relative overflow-hidden mb-12">
            <div className="flex animate-scroll-logos">
              {/* First set of logos */}
              {companies.map((company, idx) => (
                <div
                  key={`set1-${idx}`}
                  className="flex-shrink-0 px-8 grayscale opacity-50 hover:opacity-70 transition-opacity duration-300"
                  title={company.name}
                >
                  <div className="text-gray-700">
                    {company.logo}
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, idx) => (
                <div
                  key={`set2-${idx}`}
                  className="flex-shrink-0 px-8 grayscale opacity-50 hover:opacity-70 transition-opacity duration-300"
                  title={company.name}
                >
                  <div className="text-gray-700">
                    {company.logo}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gradient overlays for fade effect */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F9FAFB] to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F9FAFB] to-transparent pointer-events-none"></div>
          </div>

          {/* Stats Bar */}
          <div className="flex items-center justify-center gap-12 pt-8 border-t border-gray-200/60">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-[36px] font-extrabold text-gray-900 leading-none mb-1.5 tabular-nums">
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