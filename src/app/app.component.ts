import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { UserInputComponent } from '../user-input/user-input.component';
import { AnnualData, InvestmentData } from '../types&Interfaces';
import { InvestmentResultsComponent } from "../investment-results/investment-results.component";
import { InvestmentService } from '../investment-results/investment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  annualData?: AnnualData[];
  invest_data?:InvestmentData;
  constructor(private investment_service:InvestmentService){}

  handleInvestData(invest_data: InvestmentData) {
    this.invest_data = invest_data;
    this.annualData = this.investment_service.getInvestmentData(invest_data);
  }
}
