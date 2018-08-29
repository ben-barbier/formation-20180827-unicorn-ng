import {Component} from '@angular/core';
import {Unicorn} from '../../shared/models/unicorn.model';
import {UnicornsService} from '../../shared/services/unicorns.service';

@Component({
    selector: 'uni-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.css']
})
export class UnicornListComponent {

    public unicorns;

    constructor(private unicornsService: UnicornsService) {
        this.unicornsService.getUnicorns().subscribe((unicorns: Unicorn[]) => {
            this.unicorns = unicorns;
        });
    }

    public removeUnicornFromList(unicornToRemove: Unicorn) {
        this.unicorns = this.unicorns.filter((unicorn: Unicorn) =>
            unicorn.id !== unicornToRemove.id);
    }
}
