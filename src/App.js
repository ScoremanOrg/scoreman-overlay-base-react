import './App.css';
import { Scoreboard } from './components/Scoreboard';
import { useScoreboard } from './hooks/useScoreboard';

const App = () => {
    const [scoreboard] = useScoreboard();

    return scoreboard ? <Scoreboard scoreboard={scoreboard} />
        : <div className="scoreman-loading">Loading</div>
}

export default App;