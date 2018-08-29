import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Unicorn} from '../../../../../shared/models/unicorn.model';

@Component({
    selector: 'uni-edit-unicorn',
    templateUrl: './edit-unicorn.dialog.component.html',
    styleUrls: ['./edit-unicorn.dialog.component.css']
})
export class EditUnicornDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<EditUnicornDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public unicorn: Unicorn) {
    }

    public save() {
        this.unicorn.name = this.unicorn.name.toUpperCase();
        this.dialogRef.close(this.unicorn);
    }

}
