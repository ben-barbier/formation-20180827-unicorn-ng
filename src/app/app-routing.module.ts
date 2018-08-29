import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {UnicornPhotoComponent} from './pages/unicorn-photo/unicorn-photo.component';
import {UnicornPairGuard} from './shared/guards/unicorn-pair.guard';

const routes: Routes = [
    {path: '', component: UnicornListComponent},
    {path: 'unicorn-photo/:id', component: UnicornPhotoComponent, canActivate: [UnicornPairGuard]},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
