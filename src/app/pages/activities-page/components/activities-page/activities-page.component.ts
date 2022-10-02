import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom, Subscription } from 'rxjs';
import { CreateActivityModal } from 'src/app/features/activities/modals/create-activity.modal';
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

  constructor(
    private readonly activitiesService: ActivitiesService,
    private readonly matDialog: MatDialog,
  ) { }

  public ngOnInit(): void {
    this._items = this.activitiesService.items$.subscribe(items => this.items = items);
  }

  public async createItem(): Promise<void> {
    const item: Item = await firstValueFrom(this.matDialog.open(CreateActivityModal).afterClosed());
    this.activitiesService.createItem(item);
  }

  public ngOnDestroy(): void {
    this._items.unsubscribe();
  }

}
