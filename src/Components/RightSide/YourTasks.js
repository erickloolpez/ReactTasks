import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import './style.css'
import { Task } from './Task';
import useTodo from '../../Hooks/useTodo'
import {TaskLoading} from './TaskLoading'

function YourTasks() {
  const [searchValue, setSearchValue] = useState('')
  const { filterTodos, depureTodos, loading, error } = useTodo()

  const completed = depureTodos.filter((todo) => (todo.completed))
  return (
    <div style={{ width: '75%', height: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 20 }}>
      <div style={{ width: '80%', height: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
        <h1 className='task-title' style={{ fontSize: 70, margin: 0, }}>Your tasks</h1>
        <h2 style={{ margin: 0 }}>Completed {completed.length} to {depureTodos.length}</h2>
        <div style={{ width: 260, height: 40, display: 'flex', alignItems: 'center', borderRadius: 10, backgroundColor: 'white', overflow: 'hidden', marginTop: 20 }}>
          <input style={{ width: '80%', height: '100%', margin: 0, paddingInline: 10, border: 'none', outline: 'none' }} placeholder={'Search...'} value={searchValue} onChange={(event) => {
            const value = event.target.value
            setSearchValue(value)
            filterTodos(value)
          }} />
          <IoSearch size={28} style={{ backgroundColor: 'yellow', marginRight: 6 }} />
        </div>
      </div>
      <div style={{ width: '80%', height: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        {loading && (
          <>
            <TaskLoading />
            <TaskLoading />
            <TaskLoading />
            <TaskLoading />
            <TaskLoading />
          </>
        )}
        {error && <p>Desesperte, hubo un error</p>}
        {(!loading && depureTodos.length === 0) && <p>!Create your first Task!</p>}
        {(!loading && !error) && depureTodos.map((todo, index) => (
          <Task key={index} todo={todo} />
        ))}

      </div>
      <div style={{ width: '90%', height: '10%', }}>
      </div>

    </div>
  )
}

export { YourTasks }