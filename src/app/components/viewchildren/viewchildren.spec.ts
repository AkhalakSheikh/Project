import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrens } from './viewchildren';

describe('Viewchild', () => {
  let component: ViewChildrens;
  let fixture: ComponentFixture<ViewChildrens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildrens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildrens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
