import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData, intialInvestData } from '../types&Interfaces';
import { single } from 'rxjs';
import { InvestmentService } from '../investment-results/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  input_initialInvestement = signal('0');
  input_annualInvestment = signal('0');
  input_expetedInvestment = signal('0');
  input_duration = signal('0');
  constructor(private investment_service: InvestmentService) { }
  onSubmit(event: any) {
    this.investment_service.setInvestmentData({
      init_investment: +this.input_initialInvestement(),
      an_investment: +this.input_annualInvestment(),
      exp_return: +this.input_expetedInvestment(),
      duration: +this.input_duration()
    })
    this.input_initialInvestement.set('0');
    this.input_annualInvestment.set('0');
    this.input_expetedInvestment.set('0');
    this.input_duration.set('0');
  }
}
