import { axios } from './setAxiosSettings';

export const getBook =
  async (id) => axios.get(process.env.REACT_APP_API_STUDY_GO_BOOK + id);
export const getBooks =
  async () => axios.get(process.env.REACT_APP_API_STUDY_GO_BOOKS);
export const getContacts =
  async () => axios.get(process.env.REACT_APP_API_INFO_CONTACTS);
export const getEuCommandChamps =
  async () => axios.get(process.env.REACT_APP_API_TOURNAMENTS_EU_COMMAND);
export const getEuCommandGroup =
  async (year, group) => axios.get(
    process.env.REACT_APP_API_TOURNAMENTS_EU_COMMAND_GROUPS_BY_YEAR + year + '/' + group);
export const getEuCommandGroupResults =
  async (year) => axios.get(process.env.REACT_APP_API_TOURNAMENTS_EU_COMMAND_GROUPS_BY_YEAR + year);
export const getEuPersonalChamps =
  async () => axios.get(process.env.REACT_APP_API_TOURNAMENTS_EU_PERSONAL);
export const getHome =
  async () => axios.get(process.env.REACT_APP_API_TOURNAMENTS_BY_YEAR + '2022');
export const getGoStories =
  async () => axios.get(process.env.REACT_APP_API_STUDY_GO_STORIES);
export const getGoStory =
  async (id) => axios.get(process.env.REACT_APP_API_STUDY_GO_STORY + id);
export const getNationalTeamGame =
  async (id) => axios.get(process.env.REACT_APP_API_TOURNAMENTS_NATIONAL_TEAM_GAME + id);
export const getNews =
  async () => axios.get(process.env.REACT_APP_API_INFO_NEWS);
export const getPlayers =
  async () => axios.get(process.env.REACT_APP_API_PLAYERS);
export const getRanks =
  async () => axios.get(process.env.REACT_APP_API_INFO_RANKS);
export const getTournament =
  async (type, id) => axios.get(process.env.REACT_APP_API_TOURNAMENTS_BY_ID + type + id);
export const getTournaments =
  async () => axios.get(process.env.REACT_APP_API_TOURNAMENTS);
export const getWAGC =
  async () => axios.get(process.env.REACT_APP_API_TOURNAMENTS_WORLD_CHAMPS);