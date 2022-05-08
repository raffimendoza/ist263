import { Header } from './Components/Header';
import { Timer } from './Components/Timer';
import { TaskManager } from './Components/TaskManager';
import SpotifyEmbed from './Components/Embedded';

export function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <TaskManager />
      <SpotifyEmbed embedId="rokGy0huYEA" />
    </div>
  )
}

export default App;