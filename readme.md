🏦 TypeScript Banking System
A simple yet powerful banking system built with Node.js and TypeScript, applying solid Object-Oriented Programming (OOP) principles. This system supports account management, transactions, customer handling, and error management—all without any frameworks or databases.

✨ Features
🧾 Account Management
Create and manage Savings and Checking accounts.

💸 Transactions
Perform deposits, withdrawals, and transfers between accounts.

👤 Customer Management
Associate accounts with individual customers.

📜 Transaction History
Track all account activity with timestamps and descriptions.

🏦 Account Types

SavingsAccount: Supports interest application on the balance.

CheckingAccount: Supports overdraft up to a set limit.

🚨 Error Handling
Custom exceptions for invalid operations such as:

Insufficient funds

Exceeding overdraft limit

🗂 Project Structure
pgsql
Copy
Edit
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
📁 Description of Folders
src/interfaces/ – Defines the IAccount interface.

src/models/ – Contains core classes: Account, SavingsAccount, CheckingAccount, Customer, and Transaction.

src/exceptions/ – Contains BankingError, a custom error class.

src/main.ts – Entry point that demonstrates the system in action.

⚙️ Setup Instructions
✅ Prerequisites
Node.js v14+

TypeScript v5.5.4+

📦 Installation
bash
Copy
Edit
npm install
🔨 Build the Project
bash
Copy
Edit
npm run build
🚀 Run the Project
Development Mode (using ts-node):

bash
Copy
Edit
npm run dev
Production Mode (after build):

bash
Copy
Edit
npm start
🧪 Example Usage
Customers & Accounts
Waleed Alaa

Savings Account

Checking Account

Kareem Mohamed

Savings Account

Sample Transaction History
Waleed Alaa - Savings Account
pgsql
Copy
Edit
Deposit of $1000 on [timestamp]: Deposited $1000
Withdrawal of $200 on [timestamp]: Withdrew $200
Interest of $24 on [timestamp]: Applied interest of $24
Transfer of $300 on [timestamp]: Transferred $300 to CA001
Waleed Alaa - Checking Account
pgsql
Copy
Edit
Deposit of $500 on [timestamp]: Deposited $500
Withdrawal of $600 on [timestamp]: Withdrew $600
Deposit of $300 on [timestamp]: Deposited $300
Final Balances
nginx
Copy
Edit
Waleed Alaa - Savings: $524
Waleed Alaa - Checking: $200
Kareem Mohamed - Savings: $0
💡 OOP Design Principles Used
Encapsulation – Use of private and protected fields.

Inheritance – SavingsAccount and CheckingAccount extend the abstract Account class.

Polymorphism – Different behavior for withdraw/applyInterest in different account types.

Abstraction – Core account operations defined via IAccount interface.

💬 Notes
💳 Overdraft Feature:
CheckingAccount allows negative balances within a defined limit.
Example: Withdraw $75 from $50 balance with $100 overdraft ⇒ Final balance: -25.

🧱 Extensibility:
Easily add features like:

Overdraft fees

Transaction reports

New account types

🧰 Tech Stack
Node.js (no external frameworks)

TypeScript

OOP (Object-Oriented Programming)

📃 License
This project is open-source and available for educational and demonstration purposes.