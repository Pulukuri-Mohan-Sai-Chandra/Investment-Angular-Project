import { Component,inject,input,Input, signal} from '@angular/core';
import { AnnualData, InvestmentData } from '../types&Interfaces';
import { NgFor,NgIf} from '@angular/common';
import { InvestmentService } from './investment.service';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [NgFor,NgIf,CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  annualData?:AnnualData[]

  constructor(private investment_service:InvestmentService){
    this.annualData = investment_service.getInvestmentData();
  }
}
