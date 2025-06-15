import BankingError from "./exceptions/BankingError";
import CheckingAccount from "./models/CheckingAccount";
import Customer from "./models/Customer";
import SavingsAccount from "./models/SavingsAccount";

function main () {
    try {

        // Customers
        const customer1 = new Customer('c001', 'Waleed Alaa');
        const customer2 = new Customer('c002', 'Kareem Mohamed');
        
        // Accounts
        const savingsAccount1 = new SavingsAccount('SA001', customer1, 0.03);
        const checkingAccount1 = new CheckingAccount('CA001', customer1, 200);
        const savingsAccount2 = new SavingsAccount('SA002', customer2, 0.03);

        // Add accounts to customer
        customer1.addAccount(savingsAccount1);
        customer1.addAccount(checkingAccount1);
        customer2.addAccount(savingsAccount2);

        // Perform transactions
        savingsAccount1.deposit(1000);
        savingsAccount1.withdraw(200);
        savingsAccount1.applyInterest();
        checkingAccount1.deposit(500);
        checkingAccount1.withdraw(600);
        savingsAccount1.transfer(checkingAccount1, 300);

        // Print transactions history for customer1 savings account
        console.log(`Transaction history for ${customer1.getName()}'s savings account:`);
        savingsAccount1.getTransactionHistory().forEach(transaction => {
            console.log(transaction.getSummary());
        });
        
        // Print transactions history for customer1 checking account
        console.log(`Transaction history for ${customer1.getName()}'s checking account:`);
        checkingAccount1.getTransactionHistory().forEach(transaction => {
            console.log(transaction.getSummary());
        });

        // Print balances for each account
        console.log('\nBalances:');
        console.log(`${customer1.getName()} - Savings: $${savingsAccount1.getBalance()}`);
        console.log(`${customer1.getName()} - Savings: $${checkingAccount1.getBalance()}`);
        console.log(`${customer2.getName()} - Savings: $${savingsAccount2.getBalance()}`);
        
        
    } catch (error) {
        if(error instanceof BankingError) {
            console.error(`Banking error: ${error.message}`)
        } else {
            console.error(`Unexpected error: ${error}`)
        }
    }
}

main();