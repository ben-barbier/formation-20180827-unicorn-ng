import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UnicornsService} from '../services/unicorns.service';
import {Unicorn} from '../models/unicorn.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UnicornPairGuard implements CanActivate {

    constructor(private unicornsService: UnicornsService) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        return this.unicornsService.getUnicorn(next.params.id).pipe(
            map((unicorn: Unicorn): boolean => unicorn.birthyear % 2 === 0)
        );
    }
}
