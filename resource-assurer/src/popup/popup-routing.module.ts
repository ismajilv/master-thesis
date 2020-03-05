import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcesComponent } from './components/resources/resources.component';
import { ResourcePublisherComponent } from './components/resource-publisher/resource-publisher.component';


const routes: Routes = [
  { path: '', redirectTo: '/resources', pathMatch: 'full'},
  { path: 'resources', component: ResourcesComponent},
  { path: 'resources/:hash/publisher', component: ResourcePublisherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PopupRoutingModule { }