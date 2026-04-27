import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

// ⚠️  Replace with your Web3Forms access key from https://web3forms.com/
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

interface FormState {
  name: string;
  email: string;
  title: string;
  message: string;
}

const ContactMe: React.FC = () => {
  const { isDark } = useTheme();
  const [form, setForm] = useState<FormState>({ name: '', email: '', title: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const bgSection = isDark ? 'bg-[#282C33]' : 'bg-white';
  const textPrimary = isDark ? 'text-white' : 'text-black';
  const textSecondary = isDark ? 'text-[#ABB2BF]' : 'text-[#ABB2BF]';
  const borderColor = isDark ? 'border-[#ABB2BF]/20' : 'border-gray-200';
  const inputBg = isDark ? 'bg-transparent border-[#ABB2BF]/30 text-white placeholder-[#ABB2BF]/50 focus:border-[#C778DD]' : 'bg-transparent border-gray-300 text-black placeholder-gray-400 focus:border-[#C778DD]';
  const formBorder = isDark ? 'border-[#ABB2BF]/20' : 'border-gray-200';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrorMsg('Please fill in Name, Email, and Message.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.title || 'Portfolio Contact',
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', title: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Submission failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  return (
    <section
      id="contact-me"
      className={`${bgSection} py-20 px-6 lg:px-16 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className={`font-semibold text-xl ${textPrimary}`}>
            <span className="text-[#C778DD]">#</span>contact-me
          </h2>
          <div className="flex-1 h-px bg-[#C778DD] max-w-xs" />
        </div>

        <p className={`text-sm ${textSecondary} text-center mb-8 max-w-lg mx-auto leading-relaxed`}>
          I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
        </p>

        {/* Form Container */}
        <div className="max-w-lg mx-auto">
          <div className={`border ${formBorder} p-6`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className={`w-full border px-3 py-2.5 text-sm outline-none transition-colors duration-200 font-mono ${inputBg}`}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className={`w-full border px-3 py-2.5 text-sm outline-none transition-colors duration-200 font-mono ${inputBg}`}
              />
            </div>

            <input
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className={`w-full border px-3 py-2.5 text-sm outline-none transition-colors duration-200 font-mono mb-3 ${inputBg}`}
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`w-full border px-3 py-2.5 text-sm outline-none transition-colors duration-200 font-mono resize-none mb-4 ${inputBg}`}
            />

            {/* Status messages */}
            {status === 'success' && (
              <p className="text-xs text-green-400 mb-3">✓ Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-xs text-red-400 mb-3">✗ {errorMsg}</p>
            )}

            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={status === 'loading'}
                className={`px-8 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isDark
                    ? 'border border-[#C778DD] text-[#C778DD] hover:bg-[#C778DD]/10 disabled:opacity-50'
                    : 'border border-[#C778DD] text-[#C778DD] hover:bg-[#C778DD]/10 disabled:opacity-50'
                }`}
              >
                {status === 'loading' ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
