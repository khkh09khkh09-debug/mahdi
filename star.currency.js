// Star Currency System
class StarCurrency {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: 'deposit', amount, date: new Date() });
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({ type: 'withdraw', amount, date: new Date() });
      return true;
    }
    return false;
  }

  getBalance() {
    return this.balance;
  }

  getTransactions() {
    return this.transactions;
  }
}

// Example usage
const wallet = new StarCurrency();
wallet.deposit(100);
wallet.withdraw(50);
console.log('Balance:', wallet.getBalance());
console.log('Transactions:', wallet.getTransactions());