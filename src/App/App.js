import './App.css';
import { LeftSide } from '../Components/LeftSide/LeftSide'
import { RightSide } from '../Components/RightSide/RightSide'
import { TodoProvider } from '../Context/Todo'

function App() {
  return (
    <TodoProvider>
      <LeftSide />
      <RightSide />
      <div className='borderLeft' style={{ position: 'absolute', width: 400, height: 400, top: -80, left: -10 }}></div>
      <div className='borderRight' style={{ position: 'absolute', width: 400, height: 400, bottom: 0, right: -10 }}></div>
    </TodoProvider>
  );
}

export default App;
