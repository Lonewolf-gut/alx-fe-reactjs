import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // ✅ Define fetchUserData inside Search.jsx
  const fetchUserData = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching GitHub user data:", error);
      return null;
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    const data = await fetchUserData(username); // ✅ Call fetchUserData

    if (data) {
      setUser(data);
    } else {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {/* Error State */}
      {error && (
        <p className="text-center text-red-500">
          Looks like we cant find the user.
        </p>
      )}

      {/* User Data Display */}
      {user && (
        <div className="text-center mt-4">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h2 className="text-xl font-bold">{user.name || user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
