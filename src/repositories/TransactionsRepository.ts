import Transaction from '../models/Transaction';

interface ReturnTransactions {
  transactions: Transaction[];
  balance: Balance;
}

interface CreateTransation {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): ReturnTransactions {
    return {
      transactions: this.transactions,
      balance: this.getBalance(),
    };
  }

  public getBalance(): Balance {
    const income = this.transactions
      .map(transaction => {
        return transaction.type === 'income' ? transaction.value : 0;
      })
      .reduce((acc, value) => {
        return acc + value;
      }, 0);

    const outcome = this.transactions
      .map(transaction => {
        return transaction.type === 'outcome' ? transaction.value : 0;
      })
      .reduce((acc, value) => {
        return acc + value;
      }, 0);

    const balance = {
      income,
      outcome,
      total: income - outcome,
    };

    return balance;
  }

  public create({ title, value, type }: CreateTransation): Transaction {
    const transation = new Transaction({
      title,
      value,
      type,
    });

    this.transactions.push(transation);

    return transation;
  }
}

export default TransactionsRepository;
