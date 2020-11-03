import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NepoetsListComponent } from './nepoets-list/nepoets-list.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const routes: Routes = [
  // { path: '',   redirectTo: '/nepoets-list', pathMatch: 'full' },
  { path: 'nepoets-list', component: NepoetsListComponent, data: {animation: 'ListPage'} },
  { path: '',  component: WelcomePageComponent, data: {animation: 'HomePage'} },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
