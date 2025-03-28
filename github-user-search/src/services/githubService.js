import axios from "axios";

const API_URL = "https://api.github.com/users/";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
    return null; // Return null so the error state can be handled in App.jsx
  }
};
