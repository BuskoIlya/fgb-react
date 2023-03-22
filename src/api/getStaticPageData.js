import { axios } from './setAxiosSettings';

export const getBooks = async () => axios.get(process.env.REACT_APP_API_STUDY_GO_BOOKS);
export const getContacts = async () => axios.get(process.env.REACT_APP_API_INFO_CONTACTS);
export const getHome = async () => axios.get(process.env.REACT_APP_API_TOURNAMENTS_BY_YEAR + '2022');
export const getPlayers = async () => axios.get(process.env.REACT_APP_API_PLAYERS);
export const getRanks = async () => axios.get(process.env.REACT_APP_API_INFO_RANKS);
export const getStories = async () => axios.get(process.env.REACT_APP_API_STUDY_GO_STORIES);
export const getWAGC = async () => axios.get(process.env.REACT_APP_API_TOURNAMENTS_WORLD_CHAMPS);