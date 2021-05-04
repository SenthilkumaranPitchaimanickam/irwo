import { ReactElement } from 'react';
import './App.css';
import Button from './components/button/button';

const App = (): ReactElement => (
  <div className="App">
    <header className="App-header">
      <h1>Hello WSO</h1>
      <Button key="Button" value="Click"> </Button>
    </header>
  </div>
)
export default App;
