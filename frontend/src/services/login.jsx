async function fetchLogin(obj) {
  const url = `http://${process.env.REACT_APP_HOSTNAME}:${process.env.REACT_APP_PORT}/login`;
  console.log(url);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await response.json();
  console.log(data);
  return data;
}

export default fetchLogin;
