import React from 'react';
import WelcomeMessage from '../../Components/WelcomeMessage'
import { useHistory, useParams } from "react-router-dom";
import Card from '../../Components/Card'
import Button from '@material-ui/core/Button';

const WelcomePage = ({ isAllowed, handleLogout }) => {
  const history = useHistory();
  const { userName } = useParams();

  if (!isAllowed || !userName) {
    history.push("/");
  }

  return (
    <Card>
      <WelcomeMessage userName={userName}/>
      <Button onClick={handleLogout} variant="outlined" color="secondary">Voltar</Button>
    </Card>
  )
}

export default WelcomePage;