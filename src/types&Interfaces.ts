export type InvestmentData = {
    init_investment:number;
    an_investment:number;
    exp_return:number;
    duration:number;
}

export type AnnualData = {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested:number;
}

export const intialInvestData:InvestmentData = {
    init_investment:0,
    an_investment:0,
    exp_return:0,
    duration:0,
}