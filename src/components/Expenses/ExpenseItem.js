import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {
    
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate 
                date={props.date}
                />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <p className='expense-item__price'>${props.amount}</p>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;