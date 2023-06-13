import handlebars from "handlebars";
import { readFileSync  } from 'fs';

export function concat() {
    return Array.prototype.slice.call(arguments, 0, -1).join('');
}

export function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function dropDown(){
    const [id ,title, classes, options] = arguments
    const dropDown = component('drop-down')
    const content = new handlebars.SafeString(options.fn(this))
    return dropDown({ id, title, classes, content })
}

export function component(componentPath:string) {
    const componentFilePath = "public/views/partials/components";
    const template = readFileSync(`${componentFilePath}/${componentPath}.hbs`, 'utf8');
    return handlebars.compile(template); 
}