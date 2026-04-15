import { Component } from "@angular/core";




@Component({
    selector:'app-test',
    template:`<p>This is test component </p>`,
    styles:[`
        p{
            background-color:orange;
            color:white;
            padding:10px;
        }
        `]
})

export class TestComponent{

}