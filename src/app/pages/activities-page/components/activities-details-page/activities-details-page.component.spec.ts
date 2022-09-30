import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesDetailsPageComponent } from './activities-details-page.component';

describe('ActivitiesDetailsPageComponent', () => {
  let component: ActivitiesDetailsPageComponent;
  let fixture: ComponentFixture<ActivitiesDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
