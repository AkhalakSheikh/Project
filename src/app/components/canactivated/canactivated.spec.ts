import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Canactivated } from './canactivated';

describe('Canactivated', () => {
  let component: Canactivated;
  let fixture: ComponentFixture<Canactivated>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Canactivated]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Canactivated);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
