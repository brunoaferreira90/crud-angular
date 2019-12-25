import { Component, OnInit } from '@angular/core';
import { Visita } from '../visita.model';
import { GerenciamentoService } from '../gerenciamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  visitas: Visita[];
  cols: any[];

  constructor(private service: GerenciamentoService,
              private router: Router) {
  }

  ngOnInit() {

    this.service.getVisitas().then(listaVisitas => {
      this.visitas = listaVisitas
    });

    console.log(this.visitas);

  }

  // deletarVisita(idVisita: number){
  //   this.service.deletarVisitas(idVisita);
  // }

  // editarVisita(){
  //   this.service.buscarVisita(idVisita);
  //   this.router.navigate('gerenciamento/criar')
  // }

}
