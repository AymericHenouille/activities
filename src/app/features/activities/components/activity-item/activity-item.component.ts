import { Component, Input } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent {

  @Input() public item!: Item;


}
