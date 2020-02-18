import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalissuesComponent } from './totalissues.component';

describe('TotalissuesComponent', () => {
  let component: TotalissuesComponent;
  let fixture: ComponentFixture<TotalissuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalissuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
