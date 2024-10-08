// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

import { InvestmentData } from "../types&Interfaces";

export function calculateInvestmentResults(invest_data:InvestmentData) {
  const annualData = [];
  let initialInvestment = invest_data.init_investment; 
  let expectedReturn = invest_data.expected_return; 
  let duration = invest_data.duration;
  let annualInvestment = invest_data.anual_investment;
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  return annualData;
}
