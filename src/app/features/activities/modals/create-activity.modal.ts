import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-create-activity-modal',
  templateUrl: './create-activity.modal.html',
  styleUrls: ['./create-activity.modal.scss']
})
export class CreateActivityModal {

  protected loading: boolean = false;

  constructor(
    private readonly dialogRef: MatDialogRef<CreateActivityModal>
  ) { }

  public close(item: Item): void {
    this.dialogRef.close(item);
  }

}
