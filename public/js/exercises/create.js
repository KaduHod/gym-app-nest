const list = document.getElementById('amp-result');
const tableBody = document.getElementById('amp-table-body');
const del = ({target}) => {
    const tr = document.querySelector(`[data-list-tr-id="${Number(target.dataset.id)}"]`)
    const table = tr.parentNode
    table.removeChild(tr)
}

function initDeleteEvents(){
    const icons = [...document.querySelectorAll('[data-delete-item-list="true"]')];
    icons.forEach( icon => icon.addEventListener('click', del))
}


export class AmpData {
    constructor(){
        this.data = []
    }
    add(ampItem){
        this.data.push(ampItem);
        this.updateList();
        return this;
    }
    remove(id){
        this.data = this.data.filter( amp_item => amp_item.id !== id);
        return this;
    }

    updateList(){
        const result = this.data.map(item => {
            const {id, articulation, portion, movement} = item;
            return `<tr data-list-tr-id="${id}">
                <td>${portion.name}</td>
                <td>${articulation.name}</td>
                <td>${movement.name}</td>
                <td data-delete-item-list="true" data-id="${id}"> <img data-delete-item-list="true" data-id="${id}" class="app-icon" src="/images/icons/delete.svg"></td>
                </tr>
            `
        })
        tableBody.innerHTML = result.join(' ');
        initDeleteEvents()
    }
}

export const data = new AmpData()