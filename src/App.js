import './scoreman.css';
import { Scoreboard } from './components/Scoreboard';
import { Entrants } from './components/Entrants';
import { GameArea } from './components/GameArea';
import { Commentators } from './components/Commentators';
import { TournamentDetails } from './components/TournamentDetails';

const App = () => {
    return <Scoreboard>
        <Entrants />
        <GameArea />
        <Commentators />
        <TournamentDetails />
    </Scoreboard>
}

export default App;