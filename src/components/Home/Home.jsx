import React from 'react';
import NewCreations from './NewCreations';
import CoffeeMenu from './CoffeeMenu';
import ChooseUs from './ChooseUs';
import Information from './Information';

const Home = () => {
     return (
          <div>
               <Information></Information>
               <ChooseUs></ChooseUs>
               <CoffeeMenu></CoffeeMenu>
               <NewCreations></NewCreations>
          </div>
     );
};

export default Home;