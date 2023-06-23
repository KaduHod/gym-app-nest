import handlebars from "handlebars";
import { readFileSync  } from 'fs';

const getContent = (options, context) => {
    return new handlebars.SafeString(options.fn(context))
}

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
    const content = getContent(options, this)
    return dropDown({ id, title, classes, default: _default, content })
}

export function cardSmall(){
    const [class_, bc, options] = arguments
    const dropDown = component('card/small')
    const content = getContent(options, this)
    return dropDown({ class: class_,content, bc })
}

export function screenModal(){
    const [errorModalClasses, options] = arguments
    const screenModal = component('screen-modal')
    const content = getContent(options, this)
    return screenModal({ errorModalClasses, content })
}

export function snapContainer(){
    const [options] = arguments
    const snapContainer = component('snap-container/container')
    const content = getContent(options, this) 
    return snapContainer({ content })
}

export function sliderContainer(){
    const [id, classes, options] = arguments
    const snapContainer = component('slider/container')
    const content = getContent(options, this) 
    return snapContainer({id, classes, content })
}

export function sliderItem(){
    let [active, index, options] = arguments
    active = active === "true" ? true : undefined
    const snapItem = component('slider/item')
    const content = getContent(options, this) 
    return snapItem({active, index, content })
}

export function snapItem(){
    const [width, classes, options] = arguments
    const snapItem = component('snap-container/item')
    const content = getContent(options, this) 
    return snapItem({ width, classes, content })
}

export function optionContainer(){
    const [name, classes, title, options] = arguments;
    const optionContainer = component('options/container');
    const content = getContent(options, this);
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