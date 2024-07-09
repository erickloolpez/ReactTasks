import './App.css';
import { LeftSide } from '../Components/LeftSide/LeftSide'
import { RightSide } from '../Components/RightSide/RightSide'
import { TodoProvider } from '../Context/Todo'

function App() {
  return (
    <TodoProvider>
      <LeftSide />
      <RightSide />
      <div className='borderLeft' style={{ position: 'absolute', width: 200, height: 400, top: 0, left: 0 }}></div>
      <div className='borderRight' style={{ position: 'absolute', width: 200, height: 400, bottom: 0, right: 0 }}></div>
    </TodoProvider>
  );
}

export default App;
