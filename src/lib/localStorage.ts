export const getItem = (key: string) => {
    try {
        const items = window.localStorage.getItem(key)
        return items ? JSON.parse(key) : undefined;
    } catch {
        console.log(key);
    }
}