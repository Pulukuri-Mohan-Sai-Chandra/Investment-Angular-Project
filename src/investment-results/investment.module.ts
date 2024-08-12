import { NgModule } from "@angular/core";
import { InvestmentResultsComponent } from './investment-results.component';
import { CurrencyPipe, NgFor, NgIf } from "@angular/common";

@NgModule({
  declarations:[InvestmentResultsComponent],
  imports:[CurrencyPipe,NgIf,NgFor],
  exports:[InvestmentResultsComponent]
})
export class InvestemtModule{

}
