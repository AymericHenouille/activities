import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActivityItemComponent } from './create-activity-item.component';

describe('CreateActivityItemComponent', () => {
  let component: CreateActivityItemComponent;
  let fixture: ComponentFixture<CreateActivityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateActivityItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateActivityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
