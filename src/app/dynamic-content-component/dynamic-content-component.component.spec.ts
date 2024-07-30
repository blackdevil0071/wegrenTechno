import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContentComponentComponent } from './dynamic-content-component.component';

describe('DynamicContentComponentComponent', () => {
  let component: DynamicContentComponentComponent;
  let fixture: ComponentFixture<DynamicContentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicContentComponentComponent]
    });
    fixture = TestBed.createComponent(DynamicContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
