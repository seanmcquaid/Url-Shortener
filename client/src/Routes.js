import { Route, Switch } from 'react-router-dom';
import FinalUrl from './containers/FinalUrl';
import Home from './containers/Home';
import Redirect from './containers/Redirect';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/finalUrl' component={FinalUrl} />
    <Route exact path='/:id' component={Redirect} />
  </Switch>
);

export default Routes;
