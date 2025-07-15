
//Retrive data from local storage
export const setItem = (key: string, value: unknown): void => {
    localStorage.setItem(key, JSON.stringify(value))
}

//save data to local storage
export const getItem = (key: string) => {
    const item = localStorage.getItem(key);
    if(item === null) return null;

    try{
        return JSON.parse(item);
    } catch {
        return null;
    }
}