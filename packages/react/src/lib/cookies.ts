import Cookies from "js-cookie";

export const getCookie = (name: string): string | null => {
  console.log("Getting cookie:", name);
  if (typeof window === "undefined") return null;
  console.log("Getting cookie:", Cookies.get(name));
  return Cookies.get(name) || null;
};

export const setCookie = (name: string, value: string): void => {
  if (typeof window !== "undefined") {
    Cookies.set(name, value, { path: "/" });
  }
};

export const removeCookie = (name: string): void => {
  if (typeof window !== "undefined") {
    Cookies.remove(name, { path: "/" });
  }
};
