import React from 'react';
import { Header } from "./Components/Header/Templates/Header"
import { MainSearchSection} from "./Page/Main/SearchSection/Templates/MainSearchSection"
import { MainContents } from "./Page/Main/MainContents/Template/MainContents"

function App() {
  return (
    <>
      <Header/>
      <MainSearchSection/>
      <MainContents/>
    </>
  );
}

export default App;
