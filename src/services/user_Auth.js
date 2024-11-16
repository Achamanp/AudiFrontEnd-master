import { myAxios } from "./helper";
import { setAuthToken } from "./auth_utility.js";

export const signUp = async (user) => {
  try {
    const response = await myAxios.post("/api/user/sign-up", user);
    if (response.data.token) {
      setAuthToken(response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Network error occurred' };
  }
};

export const login = async (credentials) => {
  try {
    const response = await myAxios.post("/api/login", credentials);
    // Log the response to debug
    console.log('Login API Response:', response);
    
    // Check if we have a successful response with data
    if (response.data) {
      // If the token is nested inside a data property
      const token = response.data;
      
      if (token) {
        setAuthToken(token);
        return {
          success: true,
          token: token,
          data: response.data
        };
      }
    }
    
    // If we don't have a token, throw an error
    throw new Error('No token received from server');
    
  } catch (error) {
    console.error('Login Error:', error);
    
    // Handle different types of errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const errorMessage = error.response.data?.message || error.response.data?.error || 'Invalid credentials';
      throw new Error(errorMessage);
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response from server. Please check your internet connection.');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(error.message || 'An unexpected error occurred');
    }
  }
};