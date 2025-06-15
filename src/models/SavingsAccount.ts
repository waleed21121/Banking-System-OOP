import Account from "./Account";
import Customer from "./Customer";
import Transaction from "./Transaction";

export default class SavingsAccount extends Account {
    private interestRate: number;

    constructor(accountNumber: string, owner: Customer, interestRate: number = 0.02) {
        super(accountNumber, owner);
        this.interestRate = interestRate;
    }

    applyInterest (): void {
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        this.transactions.push(new Transaction('Interest', interest, `Applied interest of $${interest}`));
    }
}