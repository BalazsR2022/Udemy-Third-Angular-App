import { Injectable, signal } from "@angular/core";
import { InvestmentInput } from "./investment-input.model";
import { BehaviorSubject } from 'rxjs';

// 
@Injectable({ providedIn: 'root' })
export class InvestmentService {
  // Használj BehaviorSubject-et a signal helyett
  resultData = new BehaviorSubject<
    {
      year: number;
      interest: number;
      valueEndOfYear: number;
      annualInvestment: number;
      totalInterest: number;
      totalAmountInvested: number;
    }[] | undefined
  >(undefined);

  calculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;

        annualData.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: annualInvestment,
          totalInterest: totalInterest,
          totalAmountInvested: initialInvestment + annualInvestment * year,
        });
      }
  
      // Ezzel a BehaviorSubject új értéket kap
      this.resultData.next(annualData);
    }
  }