// Siirretään kaikki laskuriin liittyvä tiedostoon CounterContext.jsx
// Koko sovelluksen tila eli laskurin arvo ja sen hallintaan tarkoitettu koodi on nyt eristetty tiedostoon CounterContext. Komponentit saavat käyttöönsä juuri tarvitsemansa osan kontekstia useContext-hookia ja JavaScriptin destrukturointi-syntaksia käyttäen.

import Display from "./components/Display";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Display />
      <div>
        <Button type="INC" label="+" />
        <Button type="DEC" label="-" />
        <Button type="ZERO" label="0" />
      </div>
    </div>
  );
};

export default App;
