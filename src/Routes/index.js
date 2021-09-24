import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { useState } from 'react';

import FormSignUp from '../Pages/FormSignUp';
import WelcomePage from '../Pages/WelcomePage';

const Routes = () => {
  const [isAllowed, setIsAllowed] = useState(true);
  const history = useHistory();

  const handleLogout = () => {
    setIsAllowed(false);
    history.push("/");
  };

  const handleLogin = (user) => {
    setIsAllowed(true);
    history.push(`/welcome/${user}`);
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <FormSignUp handleLogin={handleLogin}/>
        </Route>
        <Route path="/welcome/:userName">
          <WelcomePage isAllowed={isAllowed} handleLogout={handleLogout}/> 
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  )
};

export default Routes;