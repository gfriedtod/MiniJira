import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouttonComponent } from './boutton.component';

describe('BouttonComponent', () => {
  let component: BouttonComponent;
  let fixture: ComponentFixture<BouttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BouttonComponent]
    });
    fixture = TestBed.createComponent(BouttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
