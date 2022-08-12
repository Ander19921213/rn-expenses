import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_DATA = [
    {
        id: '1',
        description: 'Gum',
        amount: 59.99,
        date: new Date('2021-08-15')
    },
    {
        id: '2',
        description: 'tomate',
        amount: 11.99,
        date: new Date('2021-05-15')
    },
    {
        id: '3',
        description: 'Comida',
        amount: 8.99,
        date: new Date('2021-06-15')
    },
    {
        id: '4',
        description: 'arma de fogo',
        amount: 159.99,
        date: new Date('2021-07-15')
    }
]

export default function ExpenseOutput({  expensesPeriod }) {
    
    return (
    <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_DATA} periodName={expensesPeriod} />
        <ExpensesList expenses={DUMMY_DATA} />
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,

    }
});