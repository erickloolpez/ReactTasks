import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import './style.css'

function Task({ todo, checkTodo, deleteTodo }) {
    return (
        <div className={`${todo.completed ? 'task-complete' : 'task'}`} style={{ width: '80%', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingInline: 12, borderRadius: 10, marginTop: 10, cursor: 'pointer' }} onClick={() => {
            checkTodo(todo.text)
            }} >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className='circle' style={{ width: 30, height: 30, borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                    {!todo.completed && <div style={{ width: 20, height: 20, backgroundColor: 'white', borderRadius: 50, overflow: 'hidden' }}></div>}
                    {todo.completed && <FaCheck size={18} style={{ backgroundColor: '#9BCED3', color: 'white', borderRadius: 50, padding: 2 }} />}
                </div>
                <p className={`${todo.completed && 'task-complete--p'}`} style={{ fontSize: 18, marginTop: 13, marginLeft: 8, color: '#979690' }}>{todo.text}</p>

            </div>
            <GoTrash className={'trash'} style={{ justifySelf: 'flex-end' }} onClick={(event) => {
                event.stopPropagation()
                deleteTodo(todo.text)
            }} />
        </div>
    )
}

export { Task }