export function FormFields(form){
    this.validClass = 'bg-lime-100'
    this.invalidClass = 'bg-red-100'
    this.fields = [...form.elements]
    .filter(el => el.type !== "button" && el.type !== 'submit');

    this.errorsList = form.getElementsByClassName('errors-list')[0]

    this.objFields = this.fields.reduce((acc, field) => {
        acc[field.name] = field
        return acc
    }, {})

    /**
     * @param field
     * @param validatorFn
     * @param message
     * @param expected
     * @param fnArgs
     * @returns 
     */
    this.validateField = (field, fn, message, expected = true, fnArgs) => {
        const args = [field.value];
        field.classList.remove(this.validClass);
        field.classList.remove(this.invalidClass);
        
        if(fnArgs) args.push(fnArgs);

        const validationResult = fn(...args);

        if(expected !== validationResult) {
            field.classList.add(this.invalidClass)
            return message
        }

        field.classList.add(this.validClass)
        return true
    }

    /**
     * @param field
     * @param fn
     * @param message
     * @param expected
     * @param fnArgs
     * @returns 
     */
    this.validateAllFromField = (field, arrOptions) => {
        let messages = arrOptions.map(options =>  this.validateField(field,...options));
        return {field, messages:messages.filter(message => typeof message === "string")} 
    }

    this.displayErrors = (errors) => {
        this.errorsList.classList.remove('hidden');
        const messagesLen = errors.map(({messages}) => messages).flat().length;
        if(!messagesLen) {
            this.resetErrors()
            return;
        }
        errors.forEach(({field, messages}) => {
            const html = messages.map(message => `<li class='brake-words'>${message}</li>`).join('')
            this.errorsList.innerHTML+= `<div class="m-1 p-1">
                ${html}
            </div>`
        })
    }

    this.resetErrors = () => {
        this.errorsList.classList.add('hidden');
        this.errorsList.innerHTML = null;
    }
}