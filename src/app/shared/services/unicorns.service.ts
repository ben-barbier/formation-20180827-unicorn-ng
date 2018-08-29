import {Injectable} from '@angular/core';
import {Unicorn} from '../models/unicorn.model';
import {from, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {count, filter, flatMap, map, max, pluck, reduce, tap, toArray} from 'rxjs/operators';
import {bloomAdd} from '@angular/core/src/render3/di';

@Injectable({
    providedIn: 'root'
})
export class UnicornsService {

    constructor(private http: HttpClient) {
    }

    public getUnicorns(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>('http://localhost:3000/unicorns').pipe(
            flatMap(e => e),
            filter((unicorn: Unicorn) => unicorn.weight > 15),
            map((unicorn: Unicorn): Unicorn => Object.assign(unicorn, {birthyear: unicorn.birthyear - 100})),
            toArray(),
        );
    }

    public getAverageAge(): Observable<number> {

        return this.http.get<Unicorn[]>('http://localhost:3000/unicorns').pipe(
            flatMap(e => e),
            pluck('birthyear'),
            map((birthyear: number): number => new Date().getFullYear() - birthyear),
            reduce((acc: any, age: number) => {
                return {count: acc.count + 1, sum: acc.sum + age};
            }, {count: 0, sum: 0}),
            map((ageCounter): number => ageCounter.count ? ageCounter.sum / ageCounter.count : 0)
        );
    }

}
