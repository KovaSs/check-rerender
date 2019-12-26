import React, { useState } from 'react';

import { Provider } from 'react-redux';
import { store }    from './redux';

import logo from './logo.svg';
import './App.css';

import Form         from './Form';
import Services     from './WithoutEachConnect/Services';
import NextServices from './NextServices';
import Comments     from './Comments';

function App() {
  const [mode, setMode] = useState(true);
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <div>
            <p><b>Вывести количество рендеров в консоль:</b> 1</p>
            <p><b>Сбросить количество рендеров:</b> 2</p>
          </div>
          <section>
            <Form/>
          </section>
          {mode ? (
            <section>
              <Services/>
            </section>
          ) : (
            <section>
              <NextServices/>
            </section>
          )}
          <button type="button" onClick={() => setMode(!mode)}>Изменить мод</button>

          <section>
            <Comments/>
          </section>
        </header>
      </div>
    </Provider>
  );
}

export default App;
