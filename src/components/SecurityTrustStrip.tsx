import { Shield, Lock, FileCheck } from 'lucide-react';

export function SecurityTrustStrip() {
  const trustItems = [
    {
      icon: Shield,
      label: 'SOC 2 Certified',
      color: 'emerald'
    },
    {
      icon: Lock,
      label: 'Bank-Level Encryption',
      color: 'gray'
    },
    {
      icon: FileCheck,
      label: 'GDPR Compliant',
      color: 'emerald'
    }
  ];

  return (
    <section className="w-full bg-[#F9FAFB] border-y border-gray-200/60 py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center gap-12">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            const iconColor = item.color === 'emerald' ? 'text-emerald-600/70' : 'text-gray-500';
            
            return (
              <div 
                key={idx} 
                className="flex items-center gap-2 group"
              >
                <Icon 
                  className={`w-4 h-4 ${iconColor} transition-colors group-hover:text-emerald-600`} 
                  strokeWidth={1.5}
                />
                <span className="text-[13px] text-gray-600 font-medium group-hover:text-gray-900 transition-colors">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
