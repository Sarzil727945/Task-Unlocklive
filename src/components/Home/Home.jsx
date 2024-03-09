import React from 'react';
import NewCreations from './NewCreations';
import CoffeeMenu from './CoffeeMenu';
import ChooseUs from './ChooseUs';
import Information from './Information';
import NewRecipes from './NewRecipes';
import Welcome from './Welcome/Welcome';

const Home = () => {
     return (
          <div>
               <Welcome></Welcome>
               <Information></Information>
               <ChooseUs></ChooseUs>
               <CoffeeMenu></CoffeeMenu>
               <NewRecipes></NewRecipes>
               <NewCreations></NewCreations>
          </div>
     );
};

export default Home;