import { Component } from "@angular/core";


@Component({
    template: `
    <h1>Counter Page</h1>
    <h2>{{ counter }}</h2>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    `
})
export class CounterPageComponent {

    counter = 10

    increaseBy(value: number) {
        this.counter += value
    }

}