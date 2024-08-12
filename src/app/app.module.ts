import { NgModule } from "@angular/core";
import { InvestemtModule } from "../investment-results/investment.module";
import { AppComponent } from "./app.component";
import { UserInputModule } from "../user-input/user-input.module";
import { HeaderComponent } from "../header/header.component";
import {BrowserModule} from '@angular/platform-browser'
@NgModule({
  declarations:[AppComponent,HeaderComponent],
  bootstrap:[AppComponent],
  exports:[AppComponent],
  imports:[InvestemtModule,UserInputModule,BrowserModule]
})
export class AppModule{

}
