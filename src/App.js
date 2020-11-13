import React from 'react';
import './App.css';
// 6. Zmień komponent funkcyjny na klasowy
// 7. Stwórz state a w nim tablice items w ktorej beda 4 domyslne stringi
// 8. Za pomocą metody map przeiteruj tablice items, tworząc za każda iteracja diva który wyswietli stringa w divie o klasie left
// 9. W divie o klasie right wyświetl dane ze store'a takie jak tablica items oraz wartość total które wcześniej stworzysz w storze z domyślnie pustymi wartościami
// 10. Podepnij metodę addItem pod kazdego diva w divie o klasie left tak by dodawala do store'a id klikniętego elementu i wyświetlała to w divie o klasie right (tablice z elementami oraz ilość elementów w tablicy)
function App() {
  return (
    <div className="App">
      <div className="left">
      </div>
      <div className="right">
      </div>
  </div>
  );
}

export default App;
