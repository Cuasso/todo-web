import React from 'react'
import RemoveButton from '../../Buttons/Remove'
import Checkbox from '../../Buttons/Checkbox'
import './style.scss'


const TodoItem = (props) => {
    const { name, done } = props.todo
    return (
        <li class='li-todo'>
            <Checkbox index={props.index} value={done} onChange={props.onChange} />
            <span class='todo-description'>{name}</span>
            <RemoveButton onClick={props.remove} />
        </li>
    )
}

const TodoList = (props) => {
    return (
        <ul>
            {props.todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    remove={() => props.handleClick({ type: 'remove', index })}
                    onChange={() => props.handleClick({ type: 'change', index })}
                />
            ))}
        </ul>
    )
}

export default TodoList