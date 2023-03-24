import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Error from './components/error/Error';
import EuCommandGroup from './pages/EuCommandGroups/EuCommandGroup';
import Login from './pages/user/Login';
import Profile from './pages/user/Profile';

import { Layout } from './components';

import {
  Book,
  Books,
  Contacts,
  EuCommandChamps,
  EuCommandGroupResults,
  EuPersonalChamps,
  Home,
  GoStories,
  GoStory,
  InfoBoard,
  NationalTeamGame,
  News,
  Players,
  Ranks,
  Tournament,
  Tournaments,
  WAGC,
  WelcomeToGo
} from './pages';

function FGBRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
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
          <Route path="by-tournaments" element={<Tournaments />} />
          <Route path="world-champs" element={<WAGC />} />
          <Route path="euro-champs/*">
            <Route index element={<div />} />
            <Route path="personal" element={<EuPersonalChamps />} />
            <Route path="command" element={<EuCommandChamps />} />
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
        <Route path="story/:id" element={<GoStory />} />
        <Route path="national-team-game/:id" element={<NationalTeamGame />} />
        <Route path="tournament/:id" element={<Tournament />} />
        <Route path="tournament/ru/:id" element={<Tournament type="ru/" />} />
        <Route path="tournament/world/:id" element={<Tournament type="world/" />} />

        <Route path="error" element={<Error />} />
        <Route path="*" element={<Navigate to="error" replace={true} />} />

        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default FGBRoutes;