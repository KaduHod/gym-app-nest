import handlebars from "handlebars";
import { readFileSync  } from 'fs';

export function concat() {
    return Array.prototype.slice.call(arguments, 0, -1).join('');
}

export function equal(one:any, two:any) {
    return one === two;
}

export function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function safeStr(str:string){
    return new handlebars.SafeString(str);
}

export function dropDown(){
    const [id ,title, classes, _default, options] = arguments
    const dropDown = component('drop-down')
    const content = new handlebars.SafeString(options.fn(this))
    return dropDown({ id, title, classes, default: _default, content })
}

export function optionContainer(){
    const [name, classes, title, options] = arguments;
    const optionContainer = component('options/container');
    const content = new handlebars.SafeString(options.fn(this));
    return optionContainer({ name, classes, title, content })
}

export function component(componentPath:string) {
    const componentFilePath = "public/views/partials/components";
    const template = readFileSync(`${componentFilePath}/${componentPath}.hbs`, 'utf8');
    return handlebars.compile(template); 
}

export function json(value:any){
    return JSON.stringify(value)
}