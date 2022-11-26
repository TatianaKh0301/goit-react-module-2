import React from "react";
import classNames from "classnames";
import './TodoList.css';

const TodoList = ( {todos, onDeleteTodo, onToggleCompleted} ) => (
    <ul className="Todo__List">
        {todos.map(({ id, text, completed}) => (
            <li 
                key={id} 
                className={classNames('TodoList__item', {'TodoList__item--completed': completed, })} 
                style={{backgroundColor: `${getRandomHexColor()}`}}
            >
                <input 
                    type="checkbox"
                    className="TodoList__checkbox"
                    checked={completed}
                    onChange={() => onToggleCompleted(id)}
                />
                
                <p className="Todo__Text">{text}</p>
                <button className="Todo__Button" onClick={() => onDeleteTodo(id)}> Delete</button>
            </li>
        ))}
    </ul>
)
export default TodoList;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}