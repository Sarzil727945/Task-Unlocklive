import React from 'react';
import NewCreations from './NewCreations';
import CoffeeMenu from './CoffeeMenu';
import ChooseUs from './ChooseUs';

const Home = () => {
     return (
          <div>
               <ChooseUs></ChooseUs>
               <CoffeeMenu></CoffeeMenu>
               <NewCreations></NewCreations>
          </div>
     );
};

export default Home;