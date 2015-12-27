import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import { NgFor } from 'angular2/common';

@Component({
    selector: 'hello-world',
    template: `
        <div>
          Hello there {{ name }}!
        </div>
    `
})
class HelloWorld {
  name: string;

    constructor() {
        this.name = 'Frederick';
    }
}

bootstrap(HelloWorld);