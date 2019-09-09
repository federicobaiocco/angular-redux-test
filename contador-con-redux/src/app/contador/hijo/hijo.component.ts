import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import {DividirAction, MultiplicarAction} from "../contador.actions";

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador')
      .subscribe(state =>{
        this.contador = state;
      })
  }

  multiplicar(): void{
    const accion = new MultiplicarAction(5);
    this.store.dispatch( accion );
  }
  dividir(): void{
    const accion = new DividirAction(5);
    this.store.dispatch( accion );
  }
}
