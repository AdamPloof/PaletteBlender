// https://stackoverflow.com/a/53116778/10664489
export function generateUID() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
