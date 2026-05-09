import { AuditResult } from "../types/audit";

export function getTotalMonthlySavings(results: AuditResult[]): number {
  return results.reduce(
    (sum, item) => sum + item.monthlySavings,
    0
  );
}

export function getAnnualSavings(monthly: number): number {
  return monthly * 12;
}

export function isHighSavings(monthly: number): boolean {
  return monthly >= 500;
}
