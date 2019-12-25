import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visita } from './visita.model';

@Injectable({ providedIn: 'root' })
export class GerenciamentoService {

    constructor(private http: HttpClient) {}

    getVisitas() {
        return this.http.get('http://localhost:8080/visitas')
                    .toPromise()
                    .then(res => <Visita[]> res)
                    .then(data => { 
                        return data; 
                    });

    }

    // deletarVisita(idVisita: number) {
    //     return this.http.post();
    // }

}
