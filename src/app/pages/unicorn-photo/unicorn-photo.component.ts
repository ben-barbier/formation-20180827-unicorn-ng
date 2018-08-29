import {Component} from '@angular/core';
import {Unicorn} from '../../shared/models/unicorn.model';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
    selector: 'uni-unicorn-photo',
    templateUrl: './unicorn-photo.component.html',
    styleUrls: ['./unicorn-photo.component.css']
})
export class UnicornPhotoComponent {

    public unicorn: Unicorn;

    constructor(private route: ActivatedRoute) {
        route.data.subscribe((data: Data) => {
            this.unicorn = data.unicorn;
        });
    }

}
