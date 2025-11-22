import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputoutput } from './inputoutput';

describe('Inputoutput', () => {
  let component: Inputoutput;
  let fixture: ComponentFixture<Inputoutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inputoutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inputoutput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
