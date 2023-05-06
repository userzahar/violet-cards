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

export const addFollowingID = () => {
  const url = new URL(
    'https://6454e462a74f994b334bd809.mockapi.io/users/1/following'
  );
  url.searchParams.append('following', true);
  url.searchParams.append('page', 1);
  url.searchParams.append('limit', 10);
  return fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      console.log('!res.ok');
    })
    .then(tasks => {
      return tasks;
    })
    .catch(error => {
      console.log(error);
    });
};
