export const API_URL_USERS = `https://65fb1a4614650eb210095a6f.mockapi.io/users`;

export const fetchData = async function (
  type: 'api' | 'api-data',
  API_URL: string,
  method?: string,
  sendData?: object
) {
  return type === 'api'
    ? await fetch(API_URL)
    : await fetch(API_URL, {
        method: `${method}`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendData),
      });
};
