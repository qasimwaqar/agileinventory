import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CarService} from '../../shared/service/carservice';
import {Message,MenuItem} from 'primeng/primeng';
import {Car} from '../shared/domain/car';

@Component({
    selector: "app-sale-order-list",
    templateUrl: 'app/sales/saleorder/sale-order-list.component.html'
})
export class SaleOrderList {
    
    cars: Car[];
    selectedCar: Car;

    messages: Message[];
    items: MenuItem[];

    constructor(private router: Router, private carService: CarService) { }
    
    ngOnInit() {        
        this.carService.getCarsLarge().then(cars => this.cars = cars);

        this.items = [
            {label: 'View', icon: 'fa-search', command: (event) => this.viewCar(this.selectedCar)},
            {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteCar(this.selectedCar)}
        ];
    }

    viewCar(car: Car) {
        this.messages = [];
        this.messages.push({severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand});        
        //this.router.navigate(['sales/saleorderdetail', {outlets: {'sale-order-detail': [0]}}]);
        //this.router.navigateByUrl('/sales/saleorderlist/(sale-order-detail:saleorderdetail)');
        //"sales/saleorderdetail""
    }

    deleteCar(car: Car) {
        let index = -1;
        for(let i = 0; i < this.cars.length; i++) {
            if(this.cars[i].vin == car.vin) {
                index = i;
                break;
            }
        }
        this.cars.splice(index, 1);
        
        this.messages = [];
        this.messages.push({severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand});
    }
}