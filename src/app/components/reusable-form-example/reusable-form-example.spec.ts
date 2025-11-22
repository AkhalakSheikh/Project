import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableFormExample } from './reusable-form-example';

describe('ReusableFormExample', () => {
  let component: ReusableFormExample;
  let fixture: ComponentFixture<ReusableFormExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableFormExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableFormExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
