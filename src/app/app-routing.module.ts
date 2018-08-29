import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {UnicornPhotoComponent} from './pages/unicorn-photo/unicorn-photo.component';
import {UnicornPairGuard} from './shared/guards/unicorn-pair.guard';
import {UnicornResolver} from './shared/resolvers/unicorn.resolver';

const routes: Routes = [
    {path: '', component: UnicornListComponent},
    {
        path: 'unicorn-photo/:id',
        component: UnicornPhotoComponent,
        canActivate: [UnicornPairGuard],
        resolve: {unicorn: UnicornResolver}
    },
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
