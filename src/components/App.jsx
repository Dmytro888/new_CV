import { Fragment } from 'react';
import NavBar from './NavBar/NavBar';
import About from './About/About';
import Exp from './Exp/Exp';

import styles from './App.module.css';

const App = () => {
  return (
    <Fragment>
      {/* <NavBar /> */}
      <div className={styles.mainWrapper}>
        <About />
        <Exp />
      </div>
    </Fragment>
  );
};

export default App;
