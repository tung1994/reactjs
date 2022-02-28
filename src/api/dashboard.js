import { api } from "./index";

export const getData = () => api.get('/api/friends')
export const getContent = (friend_id) => api.get('/api/messages/' + friend_id)