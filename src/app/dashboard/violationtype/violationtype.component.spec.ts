import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationtypeComponent } from './violationtype.component';

describe('ViolationtypeComponent', () => {
  let component: ViolationtypeComponent;
  let fixture: ComponentFixture<ViolationtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViolationtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
