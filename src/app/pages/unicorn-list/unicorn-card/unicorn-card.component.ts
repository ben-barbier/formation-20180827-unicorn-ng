import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Unicorn} from '../../../shared/models/unicorn.model';
import {MatDialog, MatSnackBar} from '@angular/material';
import {EditUnicornDialogComponent} from './dialogs/edit-unicorn/edit-unicorn.dialog.component';
import {CartService} from '../../../shared/services/cart.service';
import {UnicornsService} from '../../../shared/services/unicorns.service';
import {catchError, tap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Component({
    selector: 'uni-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.css']
})
export class UnicornCardComponent {

    constructor(public dialog: MatDialog,
                private cartService: CartService,
                private unicornsService: UnicornsService,
                private snackBar: MatSnackBar) {
    }

    @Output()
    private deleted = new EventEmitter();

    @Input()
    public unicorn: Unicorn;

    public isInCart = false;

    public deleteUnicorn() {
        this.unicornsService.deleteUnicorn(this.unicorn).pipe(
            tap(() => {
                this.snackBar.open(`${this.unicorn.name} a été supprimé !`);
                this.deleted.emit();
            }),
            catchError((error: any) => {
                this.snackBar.open(`ERREUR lors de la suppression de ${this.unicorn.name} !`);
                return EMPTY;
            })
        ).subscribe();
    }

    public openEditDialog() {
        this.dialog.open(EditUnicornDialogComponent, {
            data: this.unicorn,
        }).afterClosed().subscribe((updatedUnicorn: Unicorn) => {
            console.log(updatedUnicorn);
        });
    }

    public addOrRemoveFromCart() {
        if (this.isInCart) {
            this.cartService.removeFromCart(this.unicorn);
        } else {
            this.cartService.addToCart(this.unicorn);
        }
        this.isInCart = !this.isInCart;
    }
}
