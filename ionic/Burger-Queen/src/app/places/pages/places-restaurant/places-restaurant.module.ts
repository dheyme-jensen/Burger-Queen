import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesRestaurantPage } from './places-restaurant.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: PlacesRestaurantPage
  }
];

@NgModule({
  imports: [SharedModule, ComponentsModule,  RouterModule.forChild(routes)],
  declarations: [PlacesRestaurantPage]
})
export class PlacesRestaurantPageModule {}
