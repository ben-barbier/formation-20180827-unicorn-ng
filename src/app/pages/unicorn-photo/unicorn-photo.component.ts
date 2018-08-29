import {Component, OnInit} from '@angular/core';
import {Unicorn} from '../../shared/models/unicorn.model';
import {ActivatedRoute, Params} from '@angular/router';
import {UnicornsService} from '../../shared/services/unicorns.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'uni-unicorn-photo',
    templateUrl: './unicorn-photo.component.html',
    styleUrls: ['./unicorn-photo.component.css']
})
export class UnicornPhotoComponent {

    public unicorn: Observable<Unicorn>;

    constructor(route: ActivatedRoute,
                unicornsService: UnicornsService) {
        route.params.subscribe((param: Params) => {
            this.unicorn = unicornsService.getUnicorn(param.id);
        });
    }

}
