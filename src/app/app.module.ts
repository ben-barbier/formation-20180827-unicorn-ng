import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {UnicornCardComponent} from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MAT_SNACK_BAR_DEFAULT_OPTIONS,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import {MagicalNamePipe} from './shared/pipes/magical-name.pipe';
import {EditUnicornDialogComponent} from './pages/unicorn-list/unicorn-card/dialogs/edit-unicorn/edit-unicorn.dialog.component';
import {HttpClientModule} from '@angular/common/http';
import { UnicornPhotoComponent } from './pages/unicorn-photo/unicorn-photo.component';

@NgModule({
    declarations: [
        AppComponent,
        UnicornListComponent,
        UnicornCardComponent,
        MagicalNamePipe,
        EditUnicornDialogComponent,
        UnicornPhotoComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatCardModule,
        MatBadgeModule,
        MatStepperModule,
        MatTableModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    providers: [
        {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        EditUnicornDialogComponent
    ]
})
export class AppModule {
}
