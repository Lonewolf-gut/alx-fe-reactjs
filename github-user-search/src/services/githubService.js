import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";

/**
 * Fetch GitHub users based on search criteria.
 * @param {string} username - The GitHub username (or part of it).
 * @param {string} location - The user's location (optional).
 * @param {number} minRepos - Minimum number of repositories (optional).
 * @param {number} page - Pagination page number (default: 1).
 * @returns {Promise<Array>} - A list of users matching the criteria.
 */
export const fetchUsers = async (
  username,
  location = "",
  minRepos = 0,
  page = 1
) => {
  let query = [];

  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>${minRepos}`);

  const queryString = query.join("+");
  const API_URL = `${BASE_URL}?q=${queryString}&page=${page}&per_page=10`;

  try {
    const response = await axios.get(API_URL);
    return response.data.items; // List of users
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    return [];
  }
};
