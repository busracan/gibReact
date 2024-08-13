import React, { useState } from 'react';
import './style.css';

import GisUsers, { USERS as Kullanicilar } from './components/UserList';
import Card from './components/Card';

const hello = 'Merhaba JSX';

export default function App() {
  const info = 'Deneme';
  const secondClass = 'second-class';
  const PInfo = `<p>${info}</p>`;

  const classInfo = `deneme ${secondClass}`;

  const liUsers = [];

  // for (let i = 0; i < users.length; i++){
  //   liUsers.push(`${users[i]}`)
  // }

  Kullanicilar.forEach((item, index) =>
    liUsers.push(<li key={index}>{item}</li>)
  );

  // const liUsersMap = users
  //   .filter((user) => user != 'Giray')
  //   .map((user, index) => <li key={index}>{user}</li>);

  const [counter, setCounter] = useState(2);

  const counterHandler = (event) => {
    const name = event.target.name;

    // kosul ? true : false
    // kosul && true..

    // name === 'increase'
    //   ? setCounter(counter + 1)
    //   : counter >= 1
    //   ? setCounter(counter - 1)
    //   : null;

    name === 'increase'
      ? setCounter(counter + 1)
      : !!counter && setCounter(counter - 1);

    // if (name === 'increase') {
    //   setCounter(counter + 1);
    // } else if (counter >= 1) {
    //   setCounter(counter - 1);
    // }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>{counter}</h1>
        <button
          className="btn btn-primary"
          name="increase"
          onClick={counterHandler}
        >
          +
        </button>

        <button
          className="btn btn-danger"
          name="decrease"
          onClick={counterHandler}
        >
          -
        </button>

        {/*        
      <ul>{liUsers}</ul>
      <hr />
      <ul>{liUsersMap}</ul>
      
      
    */}
        <GisUsers />
      </div>
      <div className="row row-cols-sm-2">
        {!!counter && (
          <>
            {[...Array(counter)].map((item, index) => (
              <Card key={index} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
