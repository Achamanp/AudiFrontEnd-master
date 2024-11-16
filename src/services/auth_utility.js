import axios from 'axios';

export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('authToken', token); // Changed from 'token' to 'authToken' for consistency
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.removeItem('authToken');
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const removeAuthToken = () => {
  localStorage.removeItem('authToken');
  delete axios.defaults.headers.common['Authorization'];
};

export const isAuthenticated = () => {
  const token = getAuthToken();
  if (!token) return false;
  
  // Optional: Add token expiration check
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp > Date.now() / 1000;
  } catch (error) {
    return false;
  }
};