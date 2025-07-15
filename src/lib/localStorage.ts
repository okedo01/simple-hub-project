//save data to local storage
export const getItem = (key: string) => {
    localStorage.getItem(JSON.parse(key));
}

//Retrive data from local storage
export const setItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.parse(value))
}