import BankingError from "../exceptions/BankingError";
import Account from "./Account";
import Customer from "./Customer";
import Transaction from "./Transaction";

export default class CheckingAccount extends Account {
    private overdraftLimit: number;

    constructor(accountNumber: string, owner: Customer, overdraftLimit: number = 100) {
        super(accountNumber, owner);
        this.overdraftLimit = overdraftLimit;
    }

    override withdraw(amount: number): void {
        if (amount <= 0) {
            throw new BankingError('Withdrawal amount must be greater than 0.0');
        }

        if (amount > this.balance + this.overdraftLimit) {
            throw new BankingError('Exceeds overdraft limit');
        }

        this.balance -= amount;
        this.transactions.push(new Transaction('Withdrewal', amount, `Withdrew ${amount}`));
    }
}