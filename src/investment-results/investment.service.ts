import { Injectable, signal } from "@angular/core";
import { AnnualData, InvestmentData } from "../types&Interfaces";

@Injectable({
    providedIn:'root'
})
export class InvestmentService{
    annualData = signal<AnnualData[]|undefined>(undefined);
    private calculateInvestmentResults(invest_data:InvestmentData) {
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
          const tmp:AnnualData[]|undefined = this.annualData(); 
          if(!tmp){
            this.annualData.set([{
              year: year,
              interest: interestEarnedInYear,
              valueEndOfYear: investmentValue,
              annualInvestment: annualInvestment,
              totalInterest: totalInterest,
              totalAmountInvested: initialInvestment + annualInvestment * year,
            }])
          }
          else{
            tmp.push({
              year: year,
              interest: interestEarnedInYear,
              valueEndOfYear: investmentValue,
              annualInvestment: annualInvestment,
              totalInterest: totalInterest,
              totalAmountInvested: initialInvestment + annualInvestment * year,
            })
            this.annualData.set(tmp);
          }
        }
      
      }
    
    setInvestmentData(data:InvestmentData){
      this.calculateInvestmentResults(data);
    }
    getInvestmentData(){
        return this.annualData;
    }
}