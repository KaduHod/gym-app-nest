export class AmpData {
    constructor(){
        this.data = []
    }
    add(ampItem){
        this.data.push(ampItem);
        return this;
    }
    remove(id){
        this.data = this.data.filter( amp_item => amp_item.id !== id);
        return this;
    }
}

export const data = new AmpData()