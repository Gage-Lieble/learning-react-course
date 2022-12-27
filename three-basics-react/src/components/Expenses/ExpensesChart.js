
import Chart from "../Chart/Chart"

const ExpenseChart = (props) => {
    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]

    // For loops targets month and adds based on expense amount
    for (const expense of props.expenses){
        const expenseMonth = expense.date.getMonth() // starts at 0 e.g. 0 => Jan => 0 (INDEXs MATCH)
        chartDataPoints[expenseMonth].value += expense.amount
    }

    return (<Chart dataBars={chartDataPoints}/>)
}

export default ExpenseChart