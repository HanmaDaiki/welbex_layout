import { Header, Main, Footer } from '../';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__container"><Header /></div>
      <Main />
      <div className="app__container"><Footer /></div>
    </div>
  );
}

export { App };
