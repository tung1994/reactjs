import { api } from './index'

export const getContent = (friend_id) => api.get('/api/messages/' + friend_id)