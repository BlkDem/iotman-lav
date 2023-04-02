export default class Field {

    #property = ' with property';

    constructor(name, props) {
        this.name = name
        this.props = props
        // console.log(this.name, this.props)
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
