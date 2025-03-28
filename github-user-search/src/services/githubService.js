const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchGitHubData = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${API_KEY}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
  }
};
