import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5050/api',
});

// Request interceptor to add token to headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get the token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Set the Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// User Authentication
export const registerUser = (userData) => api.post('/auth/register', userData);
export const loginUser = (userData) => api.post('/auth/login', userData);

// Friend Requests
export const sendFriendRequest = (receiverId) => api.post('/friends/request', { receiverId });
export const acceptFriendRequest = (requestId) => api.post(`/friends/accept/${requestId}`);
export const rejectFriendRequest = (requestId) => api.post(`/friends/reject/${requestId}`);

// Posts
export const createPost = (content) => api.post('/posts', { content });
export const commentOnPost = (postId, content) => api.post(`/posts/${postId}/comment`, { content });
export const likePost = (postId) => api.post(`/posts/${postId}/like`);
export const fetchFeed = () => api.get('/posts/feed');

export default api;
