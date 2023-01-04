import React, {useContext} from 'react';
import AuthContxt from '../../context/auth-context';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {

  const ctx = useContext(AuthContxt)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={ctx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
