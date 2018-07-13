import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <h3>{{ value }}</h3>
        <app-child (myClick)="changeValue($event);"></app-child>
    `
    //$event nhận tham số truyền qua từ child.ts: qua đó xem.
})


export class ParentComponent implements OnInit {
    
    value = 0;

    constructor() { }

    ngOnInit() { }

    changeValue(isAdd: boolean){
        isAdd ? this.value++ : this.value--; //isAdd=true thì ++
    }
}