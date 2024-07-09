import React, { useState, createContext, useEffect } from 'react'
import { ListTodos } from '../Utils/ListTodos'

export const TodoContext = createContext()

export function TodoProvider({ children }) {
    const [depureTodos, setDepureTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const filterTodos = (text, hide) => {
        let filterCompleted
        let filter
        if (hide) {
            filterCompleted = depureTodos.filter((task) => (!task.completed))
            filter = filterCompleted.filter((todo) => (todo.text.toLowerCase().includes(text.toLowerCase())))
        } else {
            filter = depureTodos.filter((todo) => (todo.text.toLowerCase().includes(text.toLowerCase())))
        }

        return filter
    }

    const checkTodo = (text) => {
        const filter = depureTodos.findIndex((todo) => (todo.text === text))
        depureTodos[filter].completed = !depureTodos[filter].completed
        saveItem([...depureTodos])
    }

    const deleteTodo = (text) => {
        const filter = depureTodos.findIndex((todo) => (todo.text === text))
        depureTodos.splice(filter, 1)
        saveItem([...depureTodos])
    }

    const addTodo = (text) => {
        let todo = {
            text,
            completed: false
        }

        let exist = depureTodos.find((todo) => (todo.text === text))

        if (exist) {
            return true
        } else {
            depureTodos.push(todo)
            saveItem([...depureTodos])
            return false
        }

    }

    const saveItem = (newItem) => {
        localStorage.setItem('yourTodos', JSON.stringify(newItem));
        setDepureTodos(newItem)
    };


    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem('yourTodos')

                let parsedItem

                if (!localStorageItem) {
                    localStorage.setItem('yourTodos', JSON.stringify(ListTodos))
                    setDepureTodos(ListTodos)
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                    setDepureTodos(parsedItem)
                }

                setLoading(false)

            } catch (error) {
                setError(true)
            }
        }, 3000)
    }, [])


    const valueContext = {
        filterTodos,
        depureTodos,
        checkTodo,
        deleteTodo,
        addTodo,
        loading,
        error
    }

    return (
        <TodoContext.Provider value={valueContext}>
            {children}
        </TodoContext.Provider>
    )
}