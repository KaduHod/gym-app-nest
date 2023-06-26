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
            return `
            <tr data-list-tr-id="${id}">
                <td class="px-8 py-4">${portion.name}</td>
                <td class="px-8 py-4">${articulation.name}</td>
                <td class="px-8 py-4">${movement.name}</td>
                <td class="px-8 py-4" data-delete-item-list="true" data-id="${id}"> <img data-delete-item-list="true" data-id="${id}" class="app-icon cursor-pointer" src="/images/icons/delete.svg"></td>
            </tr>
            `
        })
        tableBody.innerHTML = result.join(' ');
        initDeleteEvents()
    }
}

export const data = new AmpData();

const tableBody = document.getElementById('amp-table-body');
const del = (target, amp) => {
    const id = Number(target.dataset.id)
    const tr = document.querySelector(`[data-list-tr-id="${id}"]`)
    const table = tr.parentNode
    table.removeChild(tr)
    amp.remove(id)
}

function initDeleteEvents(){
    const icons = [...document.querySelectorAll('[data-delete-item-list="true"]')];
    icons.forEach( icon => icon.addEventListener('click', (e) => del(e.target, data)))
}