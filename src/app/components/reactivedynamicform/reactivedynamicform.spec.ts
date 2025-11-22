import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactivedynamicform } from './reactivedynamicform';

describe('Reactivedynamicform', () => {
  let component: Reactivedynamicform;
  let fixture: ComponentFixture<Reactivedynamicform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactivedynamicform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactivedynamicform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
