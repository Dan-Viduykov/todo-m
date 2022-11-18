import { action, makeAutoObservable, observable } from "mobx"

class ModalStore {
    @observable active = false;
    
    constructor() {
        makeAutoObservable(this)
    }

    @action changeState() {
        this.active = !this.active;
    }
}

export default new ModalStore()