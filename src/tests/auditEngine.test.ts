import { describe, it, expect } from 'vitest';
import { generateAudit } from '../utils/auditEngine';
import { isHighSavings } from '../utils/calculateSavings';

describe('Audit Engine', () => {
  // 1. Overkill plan detection
  it('detects overkill plans and recommends a downgrade', () => {
    const input = [{
      tool: 'chatgpt',
      plan: 'team',
      monthlySpend: 60,
      seats: 2,
      useCase: 'writing'
    }];
    
    const results = generateAudit(input);
    expect(results[0].recommendedPlan.toLowerCase()).toBe('plus');
    expect(results[0].severity).toBe('medium');
  });

  // 2. Savings calculation
  it('calculates monthly savings correctly', () => {
    const input = [{
      tool: 'cursor',
      plan: 'business',
      monthlySpend: 120, // 40 * 3
      seats: 3,
      useCase: 'coding'
    }];
    
    const results = generateAudit(input);
    // Recommended pro: 20 * 3 = 60
    // Savings: 120 - 60 = 60
    expect(results[0].monthlySavings).toBe(60);
    expect(results[0].optimizedSpend).toBe(60);
  });

  // 3. Annual savings calculation
  it('calculates annual savings correctly', () => {
    const input = [{
      tool: 'claude',
      plan: 'enterprise', // triggers enterprise overkill (< 10 seats)
      monthlySpend: 500,
      seats: 5,
      useCase: 'research'
    }];
    
    const results = generateAudit(input);
    // Recommended fallback is pro. claude pro is 20. 20 * 5 = 100
    // Monthly savings: 500 - 100 = 400
    // Annual savings: 400 * 12 = 4800
    expect(results[0].monthlySavings * 12).toBe(results[0].annualSavings);
    expect(results[0].annualSavings).toBe(4800);
  });

  // 4. No savings state
  it('handles no savings state gracefully', () => {
    const input = [{
      tool: 'claude',
      plan: 'pro',
      monthlySpend: 20,
      seats: 1,
      useCase: 'writing'
    }];
    
    const results = generateAudit(input);
    expect(results[0].monthlySavings).toBe(0);
    expect(results[0].annualSavings).toBe(0);
    expect(results[0].optimizedSpend).toBe(20);
    expect(results[0].recommendedPlan.toLowerCase()).toBe('pro');
  });

  // 5. High savings CTA trigger
  it('triggers high savings correctly', () => {
    const lowSavings = 99;
    const highSavings = 500;
    
    expect(isHighSavings(lowSavings)).toBe(false);
    expect(isHighSavings(highSavings)).toBe(true);
  });
});
