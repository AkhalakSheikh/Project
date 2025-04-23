import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserchartsComponent } from './usercharts.component';

describe('UserchartsComponent', () => {
  let component: UserchartsComponent;
  let fixture: ComponentFixture<UserchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserchartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
