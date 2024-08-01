import React, { useState, useEffect } from 'react'

import { IoSearch } from "react-icons/io5";
import './style.css'
import { TaskList } from './TaskList'
import { Task } from './Task';
import useTodo from '../../Hooks/useTodo'
import { TaskLoading } from './TaskLoading'
import { FaEyeSlash, FaEye } from "react-icons/fa";

function YourTasks() {
  const [searchValue, setSearchValue] = useState('')
  const { filterTodos, depureTodos, loading, error, checkTodo, deleteTodo } = useTodo()
  const [taskList, setTaskList] = useState([...depureTodos])
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const filterTasks = () => {
      if (hide) {
        return depureTodos.filter((todo) => !todo.completed);
      }
      return depureTodos;
    };
    setTaskList(filterTasks());
  }, [depureTodos, hide]);

  const onlyIncomplete = (hide) => {
    const allTasks = [...depureTodos]
    let filter
    if (hide) {
      filter = allTasks.filter((task) => (!task.completed))
    } else {
      filter = allTasks
    }
    setTaskList(filter)
  }

  const completed = depureTodos.filter((todo) => (todo.completed))
  return (
    <div style={{ width: '75%', height: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 20 }}>
      <div style={{ width: '80%', height: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
        <h1 className='task-title' style={{ fontSize: 70, margin: 0, }}>Your tasks</h1>
        <h2 style={{ margin: 0 }}>Completed {completed.length} to {depureTodos.length}</h2>
        <div className={'task'} style={{ width: 260, height: 40, display: 'flex', alignItems: 'center', borderRadius: 10, backgroundColor: 'white', overflow: 'hidden', marginTop: 20 }}>
          <input style={{ width: '80%', height: '100%', margin: 0, paddingInline: 10, border: 'none', outline: 'none' }} placeholder={'Search...'} value={searchValue} onChange={(event) => {
            const value = event.target.value
            setSearchValue(value)
            setTaskList(filterTodos(value, hide))
          }}  disabled={loading}/>
          <IoSearch size={28} style={{ marginRight: 6 }} />
        </div>
      </div>
      <TaskList
        error={error}
        loading={loading}
        depureTodos={depureTodos}
        taskList={taskList}
        onError={() => <p>Desesperate, hubo un error</p>}
        onLoading={() => (
          <>
            <TaskLoading />
            <TaskLoading />
            <TaskLoading />
            <TaskLoading />
            <TaskLoading />
          </>
        )}
        onEmpty={() => <p>!Create your first Task!</p>}
      >
        {(todo, index) => (
          <Task key={index} todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo} />
        )}
      </TaskList>

      {/* <div className={'yourTasks'} style={{ width: '80%', height: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto' }}>
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
        {(!loading && !error) && taskList.map((todo, index) => (
          <Task key={index} todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo} />
        ))}
      </div> */}
      <div style={{ width: '80%', height: '10%', display: 'flex', justifyContent: 'center' }}>
        {taskList.length > 0 && (
          <div style={{ height: 30, display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => {
            setHide((prevHide) => {
              const newHide = !prevHide;
              onlyIncomplete(newHide);
              return newHide;
            });
          }}>
            {hide ? <SeeCompleted /> : <DontSeeCompleted />}
          </div>
        )}
      </div>

    </div>
  )
}

function SeeCompleted() {
  return (
    <>
      <FaEye />
      <p style={{ margin: 0, marginLeft: 4 }}>See all your tasks</p>
    </>
  )
}

function DontSeeCompleted() {
  return (
    <>
      <FaEyeSlash />
      <p style={{ margin: 0, marginLeft: 4 }}>Hide the completed tasks</p>
    </>
  )
}

export { YourTasks }