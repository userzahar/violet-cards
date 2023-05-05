export const followingAPI = async userId => {
  return fetch(
    `https://6454e462a74f994b334bd809.mockapi.io/users/${userId}/following/${userId}`,
    {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ following: true }),
    }
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(task => {
      return task;
    })
    .catch(error => {
      console.log('404');
    });
};

export const unFollowAPI = async userId => {
  return fetch(
    `https://6454e462a74f994b334bd809.mockapi.io/users/${userId}/following/${userId}`,
    {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ following: false }),
    }
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(task => {
      return task;
    })
    .catch(error => {
      console.log('404');
    });
};
