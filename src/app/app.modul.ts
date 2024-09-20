// 
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; // Hiányzó import
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { UserinputModule } from "./user-input/user-input.module";

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent,
        InvestmentResultsComponent 
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, UserinputModule] // BrowserModule hozzáadva
})
export class AppModule { }
