import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private items: MenuItem[];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Ações',
        items: [
          {
          label: 'Criar', command: (event) => {
            this.navegar('gerenciamento/criar');
          }
        },
        {
          label: 'Pesquisar', command: (event) => {
            this.navegar('gerenciamento/pesquisar');
          }
        }
        ]
      }
    ]
  }

navegar(url) {
  this.router.navigate([url])
}

}
