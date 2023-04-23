const API_URL = import.meta.env.API_URL
  ? import.meta.env.API_URL
  : "http://localhost:3000/";

export async function fetchAds(query) {
  const data = await fetch(`${API_URL}ads/${query}`);
  const json = await data.json();

  if (!data.ok) {
    const errorMessage = json.error
      ? json.error.message
      : "Somethig went wrong";
    throw new Error(errorMessage);
  }

  return json;
}
