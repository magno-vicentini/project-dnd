async function createCamapign(obj) {
  const url = `http://${process.env.REACT_APP_HOSTNAME}:${process.env.REACT_APP_PORT}/campaign/create`;
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

async function findCampaigns(obj) {
  const url = `http://${process.env.REACT_APP_HOSTNAME}:${process.env.REACT_APP_PORT}/campaign`;
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

export {
  createCamapign,
  findCampaigns,
};
