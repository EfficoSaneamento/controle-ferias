const API_URL = 'https://script.google.com/macros/s/AKfycbzwiJb7t_BiKdmEx4lOywdtxjBQc1p_4GckRhK2LYrZnC8Ml-YK3PJg3w0zfBwmzuHI/exec';

function apiGet(params) {
  return fetch(`${API_URL}?${params}`)
    .then(res => res.json());
}

function apiPost(data) {
  return fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(data)
  }).then(res => res.json());
}
