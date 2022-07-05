import React from 'react';
import Biensimmo from '../components/Biensimmo';
import Navigation from '../components/Navigation';

const AVendre = () => {
  return (
    <div>
      <Navigation />
      <h1>Tous les biens immobiliers à vendre</h1>
      <Biensimmo />
    </div>
  );
};

export default AVendre;