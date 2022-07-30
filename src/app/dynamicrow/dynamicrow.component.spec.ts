import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicrowComponent } from './dynamicrow.component';

describe('DynamicrowComponent', () => {
  let component: DynamicrowComponent;
  let fixture: ComponentFixture<DynamicrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
