async function fetchLogin(obj) {
  const url = `https://${process.env.REACT_APP_HOSTNAME}:${process.env.REACT_APP_PORT}/login`;

  const response = await fetch(url, {
    method: 'POST',
    body: { obj },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const data = response.json();

  return data;
}

export default fetchLogin;
