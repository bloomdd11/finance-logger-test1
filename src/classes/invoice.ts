import { hasFormatter } from "../interface/hasFormatter";

// invoice class
export class Invoice implements hasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) { }

  format() {
    return `${this.client} owes for $${this.amount} for ${this.details}`;
  }
}