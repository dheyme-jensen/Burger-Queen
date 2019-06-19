import { NgModule } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MenuItemComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MenuItemComponent
  ]
})
export class ComponentsModule { }
