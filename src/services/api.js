const NUTRITIONIX_API_BASE = process.env.REACT_APP_NUTRITIONIX_API_BASE;
const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

const headers = {
  'x-app-id': APP_ID,
  'x-app-key': APP_KEY
};

export async function searchFood(query) {
  if (!query) {
    return [];
  }

  const requestUrl = `${NUTRITIONIX_API_BASE}/search/instant?self=false&branded=false&common=true&common_general=true&common_grocery=true&common_restaurant=false&detailed=true&claims=false&query=${query}`;
  const options = {
    headers
  };
  const response = await fetch(requestUrl, options);

  if (!response.ok) {
    throw new Error('Bad Request');
  }

  const { common = [] } = await response.json();

  return common;
}
