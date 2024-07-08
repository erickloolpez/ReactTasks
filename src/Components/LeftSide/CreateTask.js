import React,{useState} from 'react'
import women from '../../Assets/images/women.png'
import useTodo from '../../Hooks/useTodo'

function CreateTask() {
  const {addTodo} = useTodo()
  const [newTask, setNewTask] = useState('')
  return (
    <div style={{ width: '75%', height: '90%', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius:20 }}>
      <div style={{ width: '80%', height: '20%', display: 'flex', alignItems: 'flex-end',}}>
        <h1 style={{color:'#2C1234',fontSize:40}}>Create new task</h1>
      </div>
      <form style={{ width: '80%', height: '20%',  display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ width: '100%' }}>
          <label style={{ fontSize: 16, fontWeight: 600, }}>Task Name</label>
          <input style={{ width: '90%', height: 40, margin: 0, paddingInline: 8, outline: 'none', marginTop: 8,background:'#EFEFEF',border:'none',borderRadius:10 }} placeholder={'Launch rocket to the moon'} value={newTask} onChange={(event)=>{
            const value = event.target.value
            setNewTask(value)
          }} />
        </div>
        <button style={{ width: 100, height: 40, marginTop: 13, background:'#71357C', color:'white', border:'none', borderRadius:10 }} onClick={(event)=>{
          event.preventDefault()
          addTodo(newTask)
          setNewTask('')
        }}>Create Task</button>
      </form>
      <div style={{ width: '90%', height: '60%', }}>
        <img src={women} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt='imagen.png' />
      </div>

    </div>
  )
}

export { CreateTask }