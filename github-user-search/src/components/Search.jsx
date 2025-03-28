import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  // Fetch GitHub users based on search criteria
  const fetchUserData = async (page = 1) => {
    setLoading(true);
    setError(false);

    let query = [];
    if (username) query.push(`${username} in:login`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>${minRepos}`);

    const queryString = query.join("+");
    const API_URL = `https://api.github.com/search/users?q=${queryString}&page=${page}&per_page=10`;

    try {
      const response = await axios.get(API_URL);
      setUsers(response.data.items);
    } catch (error) {
      console.error("Error fetching GitHub users:", error);
      setError(true);
    }

    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchUserData(1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchUserData(nextPage);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded shadow-lg bg-white">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Location (e.g., New York)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Search
        </button>
      </form>

      {/* Loading & Error Messages */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && (
        <p className="text-center text-red-500">
          Something went wrong. Try again.
        </p>
      )}

      {/* Search Results */}
      {users.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold">Results:</h2>
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="p-4 border rounded flex items-center space-x-4"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{user.login}</h3>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <button
            onClick={handleLoadMore}
            className="mt-4 bg-gray-700 text-white p-2 rounded w-full"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
