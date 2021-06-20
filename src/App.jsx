import './App.css';
import { createGlobalStyle } from "styled-components";
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        box-sizing: border-box;
        margin: 0;
        font-family: 'Crete Round', serif;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
