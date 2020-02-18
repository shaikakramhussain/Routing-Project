import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedissuesComponent } from './rejectedissues.component';

describe('RejectedissuesComponent', () => {
  let component: RejectedissuesComponent;
  let fixture: ComponentFixture<RejectedissuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedissuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
