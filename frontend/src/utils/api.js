import axios from 'axios';

// Define the base URL for the API
const API_URL = 'http://localhost:5000/api';

// Login user
export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
};

// Register user
export const registerUser = async (userInfo) => {
    const response = await axios.post(`${API_URL}/auth/register`, userInfo);
    return response.data;
};

// Get tasks
export const getTasks = async () => {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
};

// Create a task
export const createTask = async (task) => {
    const response = await axios.post(`${API_URL}/tasks`, task);
    return response.data;
};
