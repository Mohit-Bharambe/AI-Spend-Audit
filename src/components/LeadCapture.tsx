import React, { useState } from 'react';
import { supabase } from '../services/supabase';

interface LeadCaptureProps {
  auditData: any;
  teamSize: number;
}

const LeadCapture: React.FC<LeadCaptureProps> = ({ auditData, teamSize }) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('audits')
        .insert([
          {
            email,
            company,
            role,
            team_size: teamSize,
            audit_data: auditData,
            created_at: new Date().toISOString(),
          },
        ]);

      if (supabaseError) throw supabaseError;

      setIsSuccess(true);
    } catch (err: any) {
      console.error('Error saving lead:', err);
      setError(err.message || 'Failed to save audit results. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="panel bg-emerald-50 border-emerald-200 p-8 text-center animate-enter">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold text-emerald-900">Results Secured!</h3>
        <p className="mt-2 text-sm text-emerald-700">
          We've saved your audit. A detailed PDF summary and optimization roadmap have been sent to <strong>{email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="panel bg-white border-slate-200 p-8 shadow-xl animate-enter">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900">Secure Your Audit Results</h3>
        <p className="mt-2 text-sm text-slate-600">
          Enter your details to save this report and receive a personalized AI cost-reduction roadmap.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Work Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="field-input mt-1"
              placeholder="alex@company.com"
            />
          </label>
          <label className="block">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Company Name</span>
            <input
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="field-input mt-1"
              placeholder="Acme Inc."
            />
          </label>
        </div>

        <label className="block">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Your Role</span>
          <select
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="field-input mt-1"
          >
            <option value="">Select your role</option>
            <option value="Founder/CEO">Founder / CEO</option>
            <option value="CTO/VP Engineering">CTO / VP Engineering</option>
            <option value="Finance/Ops">Finance / Ops</option>
            <option value="Product Lead">Product Lead</option>
            <option value="Developer">Developer</option>
          </select>
        </label>

        {error && (
          <p className="text-xs font-medium text-red-500 bg-red-50 p-3 rounded-xl border border-red-100">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full py-4 text-sm font-bold shadow-lg shadow-blue-200 disabled:opacity-50"
        >
          {isSubmitting ? 'Securing Results...' : 'Save Audit & Send Roadmap'}
        </button>
        
        <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest">
          No spam. Only high-signal financial clarity.
        </p>
      </form>
    </div>
  );
};

export default LeadCapture;
