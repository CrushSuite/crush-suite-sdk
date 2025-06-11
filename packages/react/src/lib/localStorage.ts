type Payload<T> = {
  data: T;
  expires: string | null;
};

export function getLocalStore(key: string): string | null {
  const item = localStorage.getItem(key);
  if (!item) return item;

  const json = JSON.parse(item);
  if (json.expires === null) return json.data;

  const expiry = new Date(parseInt(json.expires)).getTime();
  const now = new Date().getTime();
  if (expiry < now) {
    removeLocalStore(key);
    return null;
  }
  return json.data;
}

export function setLocalStore(key: string, value: string, expiry?: string) {
  const payload: Payload<string> = {
    data: value,
    expires: expiry ? expiry : null,
  };
  localStorage.setItem(key, JSON.stringify(payload));
}

export function removeLocalStore(key: string) {
  localStorage.removeItem(key);
}

export function setSessionStore(key: string, value: string, expiry?: string) {
  const payload: Payload<string> = {
    data: value,
    expires: expiry ? expiry : null,
  };
  sessionStorage.setItem(key, JSON.stringify(payload));
}
