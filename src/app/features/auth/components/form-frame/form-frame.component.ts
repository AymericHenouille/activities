import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-frame',
  templateUrl: './form-frame.component.html',
  styleUrls: ['./form-frame.component.scss']
})
export class FormFrameComponent {

  @Input() public title: string = '';
  @Input() public loading: boolean = true;

}
