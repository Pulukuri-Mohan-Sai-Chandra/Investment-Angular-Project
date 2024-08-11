import { Component,inject,Input} from '@angular/core';
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
  @Input({required:true}) annualData?:AnnualData[];
  @Input({required:true}) invest_data?:InvestmentData;
}
