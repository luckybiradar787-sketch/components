import { Component, ElementRef, ViewChild } from "@angular/core";



@Component({
    selector:"app-todo",
    templateUrl:"./todo.component.html",
    styleUrls:['./todo.component.scss']
})



export class TodoComponent{

    @ViewChild('productName')
    pn!:ElementRef

    searchProduct !:string;

    onSearch(eve:Event){
        let val=(eve.target as HTMLInputElement).value
        this.searchProduct=val

    }
}