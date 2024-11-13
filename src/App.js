import React from 'react';
import './App.css';
import Header from './Header';
import MainContentGrid from './maincontentgrid.js'; // Make sure to match the case

const items = [
  {
    image: 'https://via.placeholder.com/250',
    title: 'Item 1',
    description: 'This is a short description for item 1.',
  },
  {
    image: 'https://via.placeholder.com/250',
    title: 'Item 2',
    description: 'This is a short description for item 2.',
  },
  {
    image: 'https://via.placeholder.com/250',
    title: 'Item 3',
    description: 'This is a short description for item 3.',
  },
  // Add more items here
];

function App() {
  return (
    <div className="App">
      <Header />
      <div classname="intro-text">
        <h2>Please look around & enjoy your stay!</h2>
        <p>
          Explore my projects! Forever learning and innovating!
        </p>
      </div>
      {/* Pass items as a prop to MainContentGrid */}
      <MainContentGrid items={items} />
    </div>
  );
}

export default App;