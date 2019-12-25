import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from './car.model';

@Injectable({ providedIn: 'root' })
export class GerenciamentoService {

    constructor(private http: HttpClient) {}

    getCarsSmall() {
        // return this.http.get('/showcase/resources/data/cars-small.json')
        //             .toPromise()
        //             .then(res => <Car[]> res)
        //             .then(data => { return data; });

    return null;

    }
}
