import { useEffect, useState } from 'react';

export function AnimatedStats() {
  const [counts, setCounts] = useState({ users: 0, accuracy: 0, time: 0 });

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = { users: 1200, accuracy: 98, time: 75 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        users: Math.floor(targets.users * progress),
        accuracy: Math.floor(targets.accuracy * progress),
        time: Math.floor(targets.time * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-8">
      <div>
        <div className="text-[28px] font-bold text-gray-900 leading-none mb-1">
          {counts.users.toLocaleString()}+
        </div>
        <div className="text-[12px] text-gray-600 font-medium">Active Users</div>
      </div>
      
      <div className="w-px h-12 bg-gray-200"></div>
      
      <div>
        <div className="text-[28px] font-bold text-gray-900 leading-none mb-1">
          {counts.accuracy}%
        </div>
        <div className="text-[12px] text-gray-600 font-medium">AI Accuracy</div>
      </div>
      
      <div className="w-px h-12 bg-gray-200"></div>
      
      <div>
        <div className="text-[28px] font-bold text-gray-900 leading-none mb-1">
          {counts.time}%
        </div>
        <div className="text-[12px] text-gray-600 font-medium">Time Saved</div>
      </div>
    </div>
  );
}
