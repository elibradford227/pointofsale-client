const getRevenues = () => new Promise((resolve, reject) => {
  fetch('http://localhost:8000/revenues', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleRevenue = (revenue) => new Promise((resolve, reject) => {
  fetch(`http://localhost:8000/revenues/${revenue}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateRevenue = (payload) => new Promise((resolve, reject) => {
  fetch(`http://localhost:8000/revenues/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data) => {
      if (data) {
        resolve(data);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const deleteRevenue = (revenue) => new Promise((resolve, reject) => {
  fetch(`http://localhost:8000/revenues/${revenue}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => {
      if (data) {
        resolve(data);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createRevenue = (payload) => new Promise((resolve, reject) => {
  fetch('http://localhost:8000/revenues', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getRevenues,
  createRevenue,
  getSingleRevenue,
  deleteRevenue,
  updateRevenue,
};
