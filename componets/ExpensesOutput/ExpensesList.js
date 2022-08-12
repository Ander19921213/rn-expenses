import { FlatList, Text } from 'react-native';
import ExpensesSummary from './ExpensesSummary';

function renderExpenseItem(itemData){
    return <Text>{itemData.item.description}</Text>
} 

export default function ExpensesList({ expenses }){
   
    return <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
    />
    
}