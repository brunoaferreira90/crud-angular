import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { GerenciamentoService } from '../gerenciamento.service';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  cars: Car[];

  constructor(private service: GerenciamentoService) {
  }

  ngOnInit() {

    // this.service.getCarsSmall().then(cars => {
    //   this.cars = cars
    // });

  }

}
