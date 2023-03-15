export const isNumber = (val:any): val is number => {
    return typeof val === "number";
}