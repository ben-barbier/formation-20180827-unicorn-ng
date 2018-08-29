import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Unicorn} from '../models/unicorn.model';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor() {
    }

    public cart: BehaviorSubject<Unicorn[]> = new BehaviorSubject([]);

    public addToCart(unicorn: Unicorn): void {
        this.cart.next(this.cart.getValue().concat(unicorn));
    }

    public removeFromCart(unicornToRemove: Unicorn): void {
        this.cart.next(this.cart.getValue().filter((unicorn: Unicorn) => unicorn.id !== unicornToRemove.id));
    }

}
