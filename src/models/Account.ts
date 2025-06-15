import BankingError from "../exceptions/BankingError";
import IAccount from "../interfaces/IAccount";
import Customer from "./Customer";
import Transaction from "./Transaction";

export default abstract class Account implements IAccount {
    protected accountNumber: string;
    protected balance: number;
    protected transactions: Transaction[];
    protected owner: Customer;

    constructor (accountNumber: string, owner: Customer) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = 0;
        this.transactions = [];
    }

    getAccountumber(): string {
        return this.accountNumber;
    }

    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new BankingError('Deposit amount must be greater than 0.0');
        }

        this.balance += amount;
        this.transactions.push(new Transaction('Deposit', amount, `Deposited $${amount}`));
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            throw new BankingError('Withdrawal amount must be greater than 0.0');
        }

        if(this.balance < amount) {
            throw new BankingError('Insufficient funds');
        }
        
        this.balance -= amount;
        this.transactions.push(new Transaction('Withdrawal', amount, `Withdrew $${amount}`));
    }

    transfer(targetAccount: IAccount, amount: number): void {
        if (amount <= 0) {
            throw new BankingError('Transfer amount must be greater than 0.0');
        }

        if (this.balance < amount) {
            throw new BankingError ('Insufficient funds');
        }

        this.withdraw(amount);
        targetAccount.deposit(amount);
        this.transactions.push(new Transaction('Transfer', amount, `Transferred $${amount} to ${targetAccount.getAccountumber()}`));
    }

    getTransactionHistory(): Transaction[] {
        return this.transactions;
    }
}