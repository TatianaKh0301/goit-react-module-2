import React from "react";
import './TodoList.css';

const TodoList = ( {todos} ) => (
    <ul className="Todo__List">
        {todos.map(({ id, text}) => (
            <li key={id} className="Todo__Item" style={{backgroundColor: `${getRandomHexColor()}`}}>
                <p className="Todo__Text">{text}</p>
                <button className="Todo__Button"> Delete</button>
            </li>
        ))}
    </ul>
)
export default TodoList;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}