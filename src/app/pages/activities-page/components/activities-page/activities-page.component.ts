import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivitiesService } from 'src/app/features/activities/services/activities.service';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.scss']
})
export class ActivitiesPageComponent implements OnInit, OnDestroy {

  public items: Item[] = [];
  private _items!: Subscription;

  constructor(private activitiesService: ActivitiesService) { }

  public ngOnInit(): void {
    this._items = this.activitiesService.items$.subscribe(items => this.items = items);
  }

  public ngOnDestroy(): void {
    this._items.unsubscribe();
  }

}
