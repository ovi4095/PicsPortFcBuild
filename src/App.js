import './App.css';
import Main from './components/Main';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import myStore from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Error404 from './components/errorBoundary/error404/ErrorPage';
// import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <ErrorBoundary fallback={<Error404/>}>
            <Main/>
          </ErrorBoundary>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
