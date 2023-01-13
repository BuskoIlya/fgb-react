import { Routes, Route } from 'react-router-dom';

import './css/logo.css';
import './css/title.css';

import ByTournaments from './pages/tournaments/ByTournaments';
import Book from './pages/study/Book';
import Books from './pages/study/Books';
import Contacts from './pages/info/Contacts';
import EuCommand from './pages/tournaments/EuChamps/EuCommand';
import EuCommandGroup from './pages/tournaments/EuCommandGroups/EuCommandGroup';
import EuCommandGroupResults from './pages/tournaments/EuCommandGroups/EuCommandGroupResults';
import EuPersonal from './pages/tournaments/EuChamps/EuPersonal';
import GoStories from './pages/study/GoStories';
import Home from './pages/Home';
import InfoBoard from './pages/info/InfoBoard';
import Layout from './components/layouts/Layout';
import News from './pages/info/News';
import Photos from './pages/Photos';
import Players from './pages/Players';
import Ranks from './pages/info/Ranks';
import Story from './pages/study/Story';
import Tournament from './pages/tournaments/Tournament';
import WAGC from './pages/tournaments/WAGC';
import WelcomeToGo from './pages/study/WelcomeToGo';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="photos" element={<Photos />} />
          <Route path="info/*">
            <Route index element={<div />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="ranks" element={<Ranks />} />
            <Route path="info-board" element={<InfoBoard />} />
            <Route path="news" element={<News />} />
          </Route>
          <Route path="players" element={<Players />} />
          <Route path="tournaments/*">
            <Route index element={<div />} />
            <Route path="by-tournaments" element={<ByTournaments />} />
            <Route path="world-champs" element={<WAGC />} />
            <Route path="euro-champs/*">
              <Route index element={<div />} />
              <Route path="personal" element={<EuPersonal />} />
              <Route path="command" element={<EuCommand />} />
            </Route>
            <Route path="eu-command-groups/:year/">
              <Route index element={<EuCommandGroupResults />} />
              <Route path=":group" element={<EuCommandGroup />} />
            </Route>
          </Route>
          <Route path="study/*">
            <Route index element={<div />} />
            <Route path="go-books" element={<Books />} />
            <Route path="go-courses/*">
              <Route index element={<div />} />
              <Route path="welcome-to-go" element={<WelcomeToGo />} />
            </Route>
            <Route path="go-stories" element={<GoStories />} />
          </Route>

          <Route path="book/:id" element={<Book />} />
          <Route path="story/:id" element={<Story />} />
          <Route path="tournament/:id" element={<Tournament />} />
          <Route path="tournament/ru/:id" element={<Tournament type="ru/" />} />
          <Route path="tournament/world/:id" element={<Tournament type="world/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
