import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css']
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  // Observable az undefined típusra is figyel
  result: Observable<
    {
      year: number;
      interest: number;
      valueEndOfYear: number;
      annualInvestment: number;
      totalInterest: number;
      totalAmountInvested: number;
    }[] | null | undefined
  > = this.investmentService.resultData;
}
