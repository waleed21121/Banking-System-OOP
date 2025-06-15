import IAccount from "../interfaces/IAccount";

export default class Customer {
    private id: string;
    private name: string;
    private accounts: IAccount[];

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.accounts = [];
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    addAccount(account: IAccount): void {
        this.accounts.push(account);
    }

    getAccounts(): IAccount[] {
        return this.accounts;
    }
}