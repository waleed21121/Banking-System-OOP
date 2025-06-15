
# 🏦 TypeScript Banking System

A simple yet powerful banking system built with **Node.js** and **TypeScript**, applying solid **Object-Oriented Programming (OOP)** principles. This system supports **account management**, **transactions**, **customer handling**, and **error management**—all without any frameworks or databases.

---

## ✨ Features

- 🧾 **Account Management**  
  Create and manage **Savings** and **Checking** accounts.

- 💸 **Transactions**  
  Perform **deposits**, **withdrawals**, and **transfers** between accounts.

- 👤 **Customer Management**  
  Associate accounts with individual customers.

- 📜 **Transaction History**  
  Track all account activity with **timestamps** and **descriptions**.

- 🏦 **Account Types**  
  - **SavingsAccount**: Supports interest application on the balance.  
  - **CheckingAccount**: Supports **overdraft** up to a set limit.

- 🚨 **Error Handling**  
  Custom exceptions for invalid operations such as:
  - Insufficient funds
  - Exceeding overdraft limit

---

## 🗂 Project Structure

```
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
```

### 📁 Folder Descriptions

- `src/interfaces/` – Defines the `IAccount` interface.
- `src/models/` – Contains core classes: `Account`, `SavingsAccount`, `CheckingAccount`, `Customer`, and `Transaction`.
- `src/exceptions/` – Custom `BankingError` class for robust error handling.
- `src/main.ts` – Entry point demonstrating the system's functionality.

---

## ⚙️ Setup Instructions

### ✅ Requirements

- Node.js `v14+`
- TypeScript `v5.5.4+`

### 📦 Installation

```bash
npm install
```

### 🔨 Build the Project

```bash
npm run build
```

### 🚀 Run the Project

- **Development Mode**:
  ```bash
  npm run dev
  ```

- **Production Mode**:
  ```bash
  npm start
  ```

---

## 🧪 Example Usage

### Customers & Accounts

- **Waleed Alaa**  
  - Savings Account  
  - Checking Account

- **Kareem Mohamed**  
  - Savings Account

### Sample Transaction History

#### Waleed Alaa - **Savings Account**

```
Deposit of $1000 on [timestamp]: Deposited $1000
Withdrawal of $200 on [timestamp]: Withdrew $200
Interest of $24 on [timestamp]: Applied interest of $24
Transfer of $300 on [timestamp]: Transferred $300 to CA001
```

#### Waleed Alaa - **Checking Account**

```
Deposit of $500 on [timestamp]: Deposited $500
Withdrawal of $600 on [timestamp]: Withdrew $600
Deposit of $300 on [timestamp]: Deposited $300
```

### Final Balances

```
Waleed Alaa - Savings: $524
Waleed Alaa - Checking: $200
Kareem Mohamed - Savings: $0
```

---

## 💡 OOP Principles

- **Encapsulation** – Sensitive data is protected using private/protected fields.
- **Inheritance** – `SavingsAccount` and `CheckingAccount` extend an abstract `Account` class.
- **Polymorphism** – Methods like `withdraw` behave differently based on the account type.
- **Abstraction** – `IAccount` interface defines essential account operations.

---

## 💬 Notes

- 💳 **Overdraft Example:**  
  If you withdraw $75 from a $50 balance with a $100 overdraft limit, your final balance is `-25`.

- 🧱 **Extensibility:**  
  Easily expandable with:
  - Overdraft fees
  - New account types
  - Enhanced transaction reporting

---

## 🧰 Tech Stack

- Node.js
- TypeScript
- OOP (Object-Oriented Programming)

---

## 📃 License

This project is open-source and free for educational and demonstration use.
