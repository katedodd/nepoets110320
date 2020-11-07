import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NepoetsListComponent } from './nepoets-list.component';

describe('NepoetsListComponent', () => {
  let component: NepoetsListComponent;
  let fixture: ComponentFixture<NepoetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NepoetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NepoetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
