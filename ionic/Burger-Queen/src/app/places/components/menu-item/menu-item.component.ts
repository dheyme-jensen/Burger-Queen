import { Component, Output, EventEmitter, Input  } from '@angular/core';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent  {

  @Input() menu: Menu;
  @Output() done = new EventEmitter<Menu>();
  @Output() update = new EventEmitter<Menu>();
  @Output() delete = new EventEmitter<Menu>();

}
