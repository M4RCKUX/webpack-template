export class View {

    constructor (doc) {
        this.doc = doc;
    }

    showMsg(msg) {
        const p = this.doc.createElement('p');
        p.innerText = msg;
        this.doc.body.append(p);
    }
}