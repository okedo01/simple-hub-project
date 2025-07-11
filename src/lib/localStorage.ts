export const getItem = (key: string) => {
    try {
        const items = window.localStorage.getItem(key)
        return items ? JSON.parse(items) : undefined;
    } catch (error) {
        console.log(error);
    }
}

export const setItem = (key: string, value: unknown) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log(error);
    }
}