
import './App.css';
import { useTimeout } from './customHook/useTimeout';

function App() {
  const { ready } = useTimeout(2000);
  console.log('ready:', ready)

  return <div className="App">{ready ? "Ready" : "Not Ready"}</div>;
}

export default App;
