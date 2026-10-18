import React from 'react';
import meinBild from '../pictures/Titelbild.jpg'; 

function Home() {
  return (

    <img
      src={meinBild}
      alt="Mein Bild"
      className="img-fluid w-100"
    />

  );
}

export default Home;