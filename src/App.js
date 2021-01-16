import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { CommentatorsOverlay } from './overlays/commentators/CommentatorsOverlay';
import { InGameWideScreenOverlay } from './overlays/ingame-widescreen/InGameWidescreenOverlay';
import './scoreman.css';

const App = () => {
    return <Router>
        <Switch>
            <Route path="/ingame-widescreen">
                <InGameWideScreenOverlay />
            </Route>

            <Route path="/commentators">
                <CommentatorsOverlay />
            </Route>

            <Redirect path="/" exact to="/ingame-widescreen"/>
        </Switch>
    </Router>
}

export default App;