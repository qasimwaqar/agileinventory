import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Car} from '../domain/car';

@Injectable()
export class CarService {
    
    constructor(private http: Http) {}

    getCarsSmall() {
        return this.http.get('resources/demo/data/cars-small.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
    }

    getCarsMedium() {
        return this.http.get('resources/demo/data/cars-medium.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
    }

    getCarsLarge() {
        return this.http.get('resources/demo/data/cars-large.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
    }
}