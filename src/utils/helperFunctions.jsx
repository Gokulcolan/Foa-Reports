export const handleSesssionStorage = (action, key, value) => {
  if (action === "add") {
    sessionStorage.setItem(key, value);
  } else {
    return sessionStorage.getItem(key);
  }
};
