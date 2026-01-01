import { useState } from 'react';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function NavigationLink({ href, children, onClick }: NavigationLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="text-[13px] font-semibold relative inline-block cursor-pointer"
      style={{
        color: isHovered ? '#1A56DB' : '#6B7280',
        transition: 'color 180ms ease-out'
      }}
    >
      {children}
      
      {/* Animated underline - 4px below text */}
      <span
        className="absolute left-0 bottom-0 h-[2px] bg-[#1A56DB]"
        style={{
          width: isHovered ? '100%' : '0%',
          transition: 'width 180ms ease-out',
          transform: 'translateY(4px)'
        }}
      />
    </a>
  );
}
