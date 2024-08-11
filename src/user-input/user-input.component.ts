import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData } from '../types&Interfaces';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  investment_data = signal({
    init_investment:0,
    an_investment:0,
    exp_return:0,
    duration:0
  })
  invest_data = output<InvestmentData>();
  onSubmit(event:any){
    this.invest_data.emit({...this.investment_data()});
  }
}
