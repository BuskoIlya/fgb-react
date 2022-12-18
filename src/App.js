import { Routes, Route } from 'react-router-dom';

import BelarusTournaments from './pages/tournaments/BelarusTournaments';
import Contacts from './pages/info/Contacts';
import Home from './pages/Home';
import InfoBoard from './pages/info/InfoBoard';
import Layout from './components/blocks/Layout';
import News from './pages/info/News';
import Players from './pages/Players';
import Ranks from './pages/info/Ranks';
import WAGC from './pages/tournaments/WAGC';

import './css/logo.css';
import './css/title.css';
import GoEuChamps from './pages/tournaments/GoEuChamps';

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = { <Layout/> }>
          <Route index element = { <Home/> }/>
          <Route path = "photos" element = { <div/> }/>
          <Route path = "info/*">
            <Route index element = { <div/> }/>
            <Route path = "contacts" element = { <Contacts/> }/>
            <Route path = "ranks" element = { <Ranks/> }/>
            <Route path = "info-board" element = { <InfoBoard/> }/>
            <Route path = "news" element = { <News/> }/>
          </Route>
          <Route path = "players" element = { <Players/> }/>
          <Route path = "tournaments/*">
            <Route index element = { <div/> }/>
            <Route path = "by-tournaments" element = { <BelarusTournaments/> }/>
            <Route path = "world-championships" element = { <WAGC/> }/>
            <Route path = "euro-championships" element = { <GoEuChamps/> }/>
            <Route path = "eu-2019-2020" element = { <div/> }/>
            <Route path = "eu-2020-2021" element = { <div/> }/>
          </Route>
          <Route path = "study/*">
            <Route index element = { <div/> }/>
            <Route path = "go-schools" element = { <div/> }/>
            <Route path = "go-books" element = { <div/> }/>
            <Route path = "go-courses" element = { <div/> }/>
            <Route path = "go-stories" element = { <div/> }/>
            <Route path = "go-wiki" element = { <div/> }/>
          </Route>
          <Route path = "belarus/*">
            <Route index element = { <div/> }/>
            <Route path = "minsk" element = { <div/> }/>
            <Route path = "brest" element = { <div/> }/>
            <Route path = "vitebsk" element = { <div/> }/>
            <Route path = "gomel" element = { <div/> }/>
            <Route path = "grodno" element = { <div/> }/>
            <Route path = "mogilev" element = { <div/> }/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
