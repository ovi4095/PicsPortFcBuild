import './App.css';
import Main from './components/Main';
import myStore from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
