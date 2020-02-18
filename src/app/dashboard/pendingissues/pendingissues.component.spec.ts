import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingissuesComponent } from './pendingissues.component';

describe('PendingissuesComponent', () => {
  let component: PendingissuesComponent;
  let fixture: ComponentFixture<PendingissuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingissuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
