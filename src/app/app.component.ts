import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'segunda-clase-b';
  

  public isFlag: boolean = true;

  constructor(){

  }

  ngOnInit(): void {
    this.ocultar();
  }

  public ocultar(){
    let button = document.getElementById("btn");
    button?.addEventListener('click', ()=>{
      this.isFlag =! this.isFlag;   // toggle
    })
  }

}
