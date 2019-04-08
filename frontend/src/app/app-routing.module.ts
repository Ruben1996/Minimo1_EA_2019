import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {BikelistComponent} from "./components/bikelist/bikelist.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'bikeslist/:id', component: BikelistComponent, pathMatch: 'full'},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
