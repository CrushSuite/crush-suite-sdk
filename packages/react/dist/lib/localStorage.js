export function getLocalStore(key) {
    const item = localStorage.getItem(key);
    if (!item)
        return item;
    const json = JSON.parse(item);
    if (json.expires === null)
        return json.data;
    const expiry = new Date(parseInt(json.expires)).getTime();
    const now = new Date().getTime();
    if (expiry < now) {
        removeLocalStore(key);
        return null;
    }
    return json.data;
}
export function setLocalStore(key, value, expiry) {
    const payload = {
        data: value,
        expires: expiry ? expiry : null,
    };
    localStorage.setItem(key, JSON.stringify(payload));
}
export function removeLocalStore(key) {
    localStorage.removeItem(key);
}
export function setSessionStore(key, value, expiry) {
    const payload = {
        data: value,
        expires: expiry ? expiry : null,
    };
    sessionStorage.setItem(key, JSON.stringify(payload));
}
