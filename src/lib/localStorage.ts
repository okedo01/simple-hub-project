
//Retrive data from local storage
export const setItem = (key: string, value: unknown): void => {
    localStorage.setItem(key, JSON.stringify(value))
}

//save data to local storage
export const getItem = <T = unknown>(key: string): T | null => {
    const item = localStorage.getItem(key);
    if (item === null) return null;
    else {
        try {
            return JSON.parse(item) as T;
        } catch {
            return null;
        }
    }
}

//remove data from local storage
export const removeItem = (key: string): void => {
    localStorage.removeItem(key);
}