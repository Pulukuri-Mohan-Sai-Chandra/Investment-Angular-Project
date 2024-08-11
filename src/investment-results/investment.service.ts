import { Injectable } from "@angular/core";
import { InvestmentData } from "../types&Interfaces";

@Injectable({
    providedIn:'root'
})
export class InvestmentService{
    private calculateInvestmentResults(invest_data:InvestmentData) {
        const annualData = [];
        let initialInvestment = invest_data.init_investment; 
        let expectedReturn = invest_data.exp_return; 
        let duration = invest_data.duration;
        let annualInvestment = invest_data.an_investment;
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
      
    getInvestmentData(data:InvestmentData){
        return this.calculateInvestmentResults(data);
    }
}