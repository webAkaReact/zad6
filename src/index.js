import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 1. Zaimportuj Proivider oraz createStore
// 2. Utwórz katalogi na akcje i reducer
// 3. Stwórz reducer i przypisz domyślny state
// 4. Zaimportuj tutaj reducer i stwórz store który przekażesz do providera jako props (owiń providerem App)
// 5. Stwórz actions.js oraz actionsTypes.js oraz zrób akcje o type: ADD, która bedzie przekazywała też id elementu

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
