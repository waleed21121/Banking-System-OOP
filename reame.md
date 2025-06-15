Banking System
A TypeScript-based banking system implemented using object-oriented programming (OOP) principles. This project demonstrates account management, transactions, and customer handling without using frameworks or databases, relying solely on Node.js and TypeScript.
Features

Account Management: Create and manage savings and checking accounts.
Transactions: Perform deposits, withdrawals, and transfers between accounts.
Customer Management: Associate accounts with customers.
Transaction History: Track all transactions with timestamps and descriptions.
Account Types:
SavingsAccount: Supports interest application on the balance.
CheckingAccount: Allows overdraft up to a specified limit, permitting negative balances.


Error Handling: Custom exceptions for invalid operations (e.g., insufficient funds, exceeding overdraft limit).

Project Structure
banking-system/
├── src/
│   ├── interfaces/
│   │   └── IAccount.ts
│   ├── models/
│   │   ├── Account.ts
│   │   ├── SavingsAccount.ts
│   │   ├── CheckingAccount.ts
│   │   ├── Customer.ts
│   │   └── Transaction.ts
│   ├── exceptions/
│   │   └── BankingError.ts
│   └── main.ts
├── tsconfig.json
├── package.json
└── README.md


src/interfaces/: Defines the IAccount interface for account operations.
src/models/: Contains classes for accounts, customers, and transactions.
src/exceptions/: Custom BankingError class for error handling.
src/main.ts: Entry point demonstrating the system's functionality.
tsconfig.json: TypeScript configuration for CommonJS modules.
package.json: Project metadata and scripts.

Setup

Install Node.js: Ensure Node.js is installed on your system.

Install Dependencies: Navigate to the project directory and run:
npm install


Build the Project: Compile TypeScript files to JavaScript:
npm run build

Run the Project: Developement:
npm run dev

Run the Project: Execute the compiled program:
npm start



Usage
The main.ts file demonstrates the system's capabilities by:

Creating customers (e.g., Waleed and Kareem).
Setting up accounts (savings and checking for Waleed, savings for Kareem).
Performing transactions (deposits, withdrawals, transfers, and interest application).
Displaying transaction history and final balances.

Example Output
Transaction history for Waleed Alaa's savings account:
Deposit of $1000 on [timestamp]: Deposited $1000
Withdrawal of $200 on [timestamp]: Withdrew $200
Interest of $24 on [timestamp]: Applied interest of $24
Transfer of $300 on [timestamp]: Transferred $300 to CA001

Transaction history for Waleed Alaa's checking account:
Deposit of $500 on [timestamp]: Deposited $500
Withdrawal of $600 on [timestamp]: Withdrew $600
Deposit of $300 on [timestamp]: Deposited $300

Balances:
Waleed Alaa - Savings: $524
Waleed Alaa - Checking: $200
Kareem Mohamed - Savings: $0

Notes

Modularity: The project uses TypeScript modules with import/export statements for proper file dependencies.
OOP Principles:
Encapsulation: Private/protected fields protect data.
Inheritance: SavingsAccount and CheckingAccount extend the abstract Account class.
Polymorphism: Account types implement specific behaviors (e.g., overdraft for checking accounts).
Abstraction: The IAccount interface defines core account operations.


Overdraft in CheckingAccount: Withdrawals can result in a negative balance up to the overdraft limit (e.g., withdrawing $75 from a $50 balance with a $100 overdraft limit results in a $-25 balance).
Extensibility: The system can be extended with features like overdraft fees, additional account types, or transaction reports.

Requirements

Node.js (v14 or higher recommended)
TypeScript (v5.5.4 or higher)