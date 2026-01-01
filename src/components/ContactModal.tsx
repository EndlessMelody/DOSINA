import { X } from 'lucide-react';
import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', company: '', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay - 40% black opacity, no blur */}
      <div 
        className="absolute inset-0 bg-black/40"
        onClick={handleClose}
      />

      {/* Modal Container - Fixed width, centered */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content - Auto Layout with 16px gap */}
        <div className="p-8 flex flex-col gap-4">
          {!isSubmitted ? (
            <>
              {/* Headline */}
              <div>
                <h2 className="text-[24px] font-semibold text-gray-900 mb-2">
                  Get in Touch
                </h2>
                <p className="text-[14px] text-gray-600">
                  Let's discuss how DOSINA can transform your financial reporting.
                </p>
              </div>

              {/* Form Fields - 16px vertical gap */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block text-[13px] font-medium text-gray-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[13px] font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-[13px] font-medium text-gray-700 mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[13px] font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                {/* Trust Text */}
                <p className="text-[12px] text-gray-500">
                  We'll respond within 24 hours. Your information is kept confidential.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-[14px] px-4 py-2.5 rounded-md font-medium transition-colors"
                  style={{ boxShadow: 'var(--shadow-blue-sm)' }}
                >
                  Send Message
                </button>
              </form>
            </>
          ) : (
            <>
              {/* Success State - Smart Animate transition */}
              <div className="py-4 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-[14px] text-gray-600 mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>

                <button
                  onClick={handleClose}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 text-[14px] px-4 py-2.5 rounded-md font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
