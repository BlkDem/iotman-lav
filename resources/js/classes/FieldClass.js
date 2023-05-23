export default class Field {

    #property = ' with property';

    constructor(fieldProps) {
        this.fieldName = fieldProps?.fieldName
        this.fieldCaption = fieldProps?.fieldCaption
        this.fieldWidth = fieldProps?.fieldWidth
    }

    getName() {
        return this.name + this.#property
    }

    setName(value) {
        this.name = value
    }

    setProperty(value) {
        this.#property = value
    }

    getProperty() {
        return 'private property: ' + this.#property
    }
}
