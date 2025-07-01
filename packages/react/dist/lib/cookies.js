import Cookies from "js-cookie";
export const getCookie = (name) => {
    if (typeof window === "undefined")
        return null;
    return Cookies.get(name) || null;
};
export const setCookie = (name, value) => {
    if (typeof window !== "undefined") {
        Cookies.set(name, value, { path: "/" });
    }
};
export const removeCookie = (name) => {
    if (typeof window !== "undefined") {
        Cookies.remove(name, { path: "/" });
    }
};
