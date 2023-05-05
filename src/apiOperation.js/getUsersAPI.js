export const addUsers = page => {
  const url = new URL('https://6454e462a74f994b334bd809.mockapi.io/users');
  url.searchParams.append('page', page);
  url.searchParams.append('limit', 3);

  return fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(response => {
      console.log('🚀🍡 ~ response:', response);
      return response;
    })
    .catch(error => {
      console.log('error', error);
    });
};
