export const AUTH_TOKEN_LOCAL_STORAGE_KEY =
  'AUTH_TOKEN_LOCAL_STORAGE_KEY';

export const getAuthToken = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(
    AUTH_TOKEN_LOCAL_STORAGE_KEY,
  );
};

export const setLocalStorageAuthToken = (
  token: string,
) => {
  if (typeof window === 'undefined') return null;
  localStorage.setItem(
    AUTH_TOKEN_LOCAL_STORAGE_KEY,
    token,
  );
};