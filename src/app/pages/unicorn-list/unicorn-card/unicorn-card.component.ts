import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Unicorn} from '../../../shared/models/unicorn.model';
import {MatDialog} from '@angular/material';
import {EditUnicornDialogComponent} from './dialogs/edit-unicorn/edit-unicorn.dialog.component';
import {CartService} from '../../../shared/services/cart.service';

@Component({
    selector: 'uni-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.css']
})
export class UnicornCardComponent {

    constructor(public dialog: MatDialog,
                private cartService: CartService) {
    }

    @Output()
    private deleted = new EventEmitter();

    @Input()
    public unicorn: Unicorn;

    public isInCart = false;

    public deleteUnicorn() {
        this.deleted.emit();
    }

    public openEditDialog() {
        this.dialog.open(EditUnicornDialogComponent, {
            data: this.unicorn,
        }).afterClosed().subscribe((updatedUnicorn: Unicorn) => {
            console.log(updatedUnicorn);
        });
    }

    public addToCart() {
        if (this.isInCart) {
            this.cartService.removeFromCart(this.unicorn);
        } else {
            this.cartService.addToCart(this.unicorn);
        }
        this.isInCart = !this.isInCart;
    }
}
