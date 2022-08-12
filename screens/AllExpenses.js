import { Text } from 'react-native';
import ExpenseOutput from '../componets/ExpensesOutput/ExpenseOutput';

export default function AllExpenses() {
    return (
      <ExpenseOutput expensesPeriod="total" />
    );
}