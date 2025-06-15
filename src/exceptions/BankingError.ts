export default class BankingError extends Error {
    name: string;
    constructor (message: string) {
        super(message);
        this.name = 'Banking Error';
    }
}