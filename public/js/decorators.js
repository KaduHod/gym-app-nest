export const preventDefaultDecorator = (handler) => {
    return (event) => {
        event.preventDefault();
        return handler(event)
    }
}