import {Component} from '@angular/core';
import {CartService} from './shared/services/cart.service';
import {Unicorn} from './shared/models/unicorn.model';
import {Observable} from 'rxjs';

@Component({
    selector: 'uni-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public cart: Observable<Unicorn[]> = this.cartService.cart;

    constructor(private cartService: CartService) {
    }

}
