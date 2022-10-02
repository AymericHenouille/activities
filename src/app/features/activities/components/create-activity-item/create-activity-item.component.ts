import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-create-activity-item',
  templateUrl: './create-activity-item.component.html',
  styleUrls: ['./create-activity-item.component.scss']
})
export class CreateActivityItemComponent implements OnInit {

  @Input() public loading: boolean = false;
  @Output() public loadingChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() public onItem: EventEmitter<Item> = new EventEmitter<Item>();

  protected form!: FormGroup;

  public ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  public submit(): void {
    const item: Item = {
      name: '',
      description: '',
      color: 'red',
      banner: 'https://cdn.pixabay.com/photo/2017/03/31/16/11/banner-2191712_960_720.jpg',
      tags: [],
      ...this.form.value
    };
    this.onItem.emit(item);
  }

}
