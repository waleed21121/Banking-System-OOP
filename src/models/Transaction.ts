export default class Transaction {
    private id: string;
    private type: string;
    private amount: number;
    private timestamp: Date;
    private description: string;

    constructor(type: string, amount: number, description: string) {
        this.id = Math.random().toString(36).substring(2, 15);
        this.type = type;
        this.amount = amount;
        this.description = description;
        this.timestamp = new Date();
    }

    getId(): string {
        return this.id;
    }

    getSummary(): string {
        return `${this.type} of ${this.amount} on ${this.timestamp.toISOString()}: ${this.description}`;
    }
}