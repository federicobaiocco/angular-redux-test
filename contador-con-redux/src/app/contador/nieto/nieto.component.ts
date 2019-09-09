import {Component, OnInit} from '@angular/core';
import {AppState} from "../../app.reducers";
import {Store} from "@ngrx/store";
import {ResetAction} from "../contador.actions";

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  contador: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador')
      .subscribe(contador => this.contador = contador);
  }

  reset(): void{

    const accion = new ResetAction();
    this.store.dispatch( accion );

  }

}
