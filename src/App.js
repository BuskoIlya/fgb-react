import { Routes, Route } from 'react-router-dom';

import Layout from './components/blocks/Layout';

import './css/logo.css';
import './css/title.css';

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = { <Layout/> }>
          <Route index element = { <div/> }/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
