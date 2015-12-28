import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
/** import { NgFor } from 'angular2/common'; */

@Component({
    selector: 'hello-world',
    template: `
        <ul>
            <li *ngFor="#name of names">Hello {{ name }} </li>
        </ul>
    `
})
class HelloWorld {
  names: string[];

    constructor() {
        /** this.name = 'Frederick'; */
        this.names = ['Ari', 'Carlos', 'Felipe', 'Nate', 'Alice', 'Bob', 'Henry'];
    }
}

bootstrap(HelloWorld);