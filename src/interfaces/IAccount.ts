import Transaction from "../models/Transaction";

export default interface IAccount {
    getAccountumber(): string;
    getBalance(): number;
    deposit(amount: number): void;
    withdraw(amount: number): void;
    transfer(targetAccount: IAccount, amount: number): void;
    getTransactionHistory(): Transaction[];
}