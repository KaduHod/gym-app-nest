export const serializeForm = form => {
    const data = new FormData(form);
    const serialized = {};
    for(const [key, value] of data) {
        serialized[key] = value;
    }
    return serialized;
}