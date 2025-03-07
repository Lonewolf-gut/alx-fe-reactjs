const useAuth = () => {
  return { isAuthenticated: localStorage.getItem("auth") === "true" };
};

export default useAuth;
