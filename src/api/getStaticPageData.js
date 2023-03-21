import { axios } from './setAxiosSettings';

export const getRanks = async () => axios.get(process.env.REACT_APP_API_INFO_RANKS);
export const getPlayers = async () => axios.get(process.env.REACT_APP_API_PLAYERS);