import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CriarComponent } from './gerenciamento/criar/criar.component';
import { PesquisarComponent } from './gerenciamento/pesquisar/pesquisar.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children : [
            { path: 'gerenciamento/criar', component: CriarComponent },
            { path: 'gerenciamento/pesquisar', component: PesquisarComponent }
        ]
    },
    { 
        path: '**', 
        redirectTo: 'not-found'
    }   
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, { useHash: true } ) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

