import * as React from 'react';
import NavBar from './NavBar';
import { DetailButtons } from './DetailButtons';
import PlanetContent from './PlanetContent';
import { styles } from '@/styles/Planet.css';

export const Layout = () => {
    return(<div className={styles.mainContainer}>
        <NavBar />
        <DetailButtons/>
       <PlanetContent/>
      </div>);
};
export default Layout;