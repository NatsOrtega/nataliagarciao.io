class Dato{
    constructor(descripcion, valor){
        this._description = descripcion;
        this._valor = valor;
    }

    get descripcion(){
        return this._description;
    }
    set descripcion(descripcion){
        this._description = descripcion;
    }

    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor = valor;
    }
}