import { Component,computed,inject,input,Input, signal} from '@angular/core';
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
  constructor(private investment_service:InvestmentService){
  }
  annualData = computed(()=> this.investment_service.annualData());
}
