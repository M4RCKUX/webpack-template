import { Tarea } from '.';
import { Model } from '.';
import { View } from '.';

export class App {

    constructor (model, view) {
        this.model = model;
        this.view = view;
    }

    run() {
        const msg = this.model.getHelloMsg();
        this.view.showMsg(msg);
    }

}