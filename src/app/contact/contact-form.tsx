"use client";

import { useState, FormEvent } from "react";

interface ContactFormProps {
  inquiryTypes: string[];
}

export function ContactForm({ inquiryTypes }: ContactFormProps) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.fallback) {
        // Resend not configured — open mailto
        window.location.href = `mailto:${data.to}?subject=${encodeURIComponent(data.subject)}&body=${data.body}`;
        setSent(true);
      } else if (data.sent) {
        setSent(true);
        form.reset();
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch {
      setError("Could not send message. Try emailing directly.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="px-4 py-6 bg-crbro-gold/10 border border-crbro-gold/30 rounded-sm">
        <p className="text-sm text-crbro-gold">
          Message sent. I&apos;ll get back to you within 48 hours.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-3 text-xs text-crbro-white/50 hover:text-crbro-gold transition-colors underline"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs tracking-widest uppercase text-crbro-white/50 mb-1.5">
            Name <span className="text-crbro-gold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2.5 bg-crbro-medium/20 border border-crbro-gold/20 rounded-sm text-sm text-crbro-white placeholder-crbro-white/20 focus:outline-none focus:border-crbro-gold/60 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs tracking-widest uppercase text-crbro-white/50 mb-1.5">
            Email <span className="text-crbro-gold">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2.5 bg-crbro-medium/20 border border-crbro-gold/20 rounded-sm text-sm text-crbro-white placeholder-crbro-white/20 focus:outline-none focus:border-crbro-gold/60 transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiry" className="block text-xs tracking-widest uppercase text-crbro-white/50 mb-1.5">
          Inquiry type <span className="text-crbro-gold">*</span>
        </label>
        <select
          id="inquiry"
          name="inquiry"
          required
          className="w-full px-4 py-2.5 bg-crbro-medium/20 border border-crbro-gold/20 rounded-sm text-sm text-crbro-white focus:outline-none focus:border-crbro-gold/60 transition-colors appearance-none"
        >
          <option value="" className="bg-crbro-dark">Select type</option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t} className="bg-crbro-dark">{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs tracking-widest uppercase text-crbro-white/50 mb-1.5">
          Message <span className="text-crbro-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2.5 bg-crbro-medium/20 border border-crbro-gold/20 rounded-sm text-sm text-crbro-white placeholder-crbro-white/20 focus:outline-none focus:border-crbro-gold/60 transition-colors resize-y"
          placeholder="Tell me about your project..."
        />
      </div>

      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full sm:w-auto px-8 py-3 bg-crbro-gold text-crbro-dark font-heading text-sm tracking-widest uppercase rounded-sm hover:bg-crbro-gold/90 transition-all disabled:opacity-50"
      >
        {sending ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
