import { View } from 'react-native'  
import ExpenseOutput from '../componets/ExpensesOutput/ExpenseOutput'

export default function RecentExpenses() {
  return (
    <ExpenseOutput expensesPeriod="last 7 days" />
  );
}