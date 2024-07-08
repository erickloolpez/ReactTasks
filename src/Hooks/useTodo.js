import { useContext } from 'react'
import { TodoContext } from '../Context/Todo'

const useTodoContext = () => useContext(TodoContext)
export default useTodoContext