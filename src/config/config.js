const config = {
  VITE_API_URL: String(import.meta.env.VITE_API_URL),
  VITE_TMDB_API_KEY: String(import.meta.env.VITE_TMDB_API_KEY),
  VITE_TMDB_API_ACCESS_TOKEN: String(
    import.meta.env.VITE_TMDB_API_ACCESS_TOKEN
  ),
};

export default config;
