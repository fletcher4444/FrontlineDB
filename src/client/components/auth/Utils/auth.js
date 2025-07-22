// utils/auth.js
export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};
export const login = async (email, password) => {
  const res = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem('token', data.token);
    window.location.href = '/'; // Redirect to home or dashboard
  }
};