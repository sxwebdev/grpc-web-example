export const defaultApiURL = "http://localhost:8080";

export const BASE_URL: string =
  localStorage.getItem("FRONT_API_URL") ||
  (import.meta.env.FRONT_API_URL as string) ||
  defaultApiURL;
