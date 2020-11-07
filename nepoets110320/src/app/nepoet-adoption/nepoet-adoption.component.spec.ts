import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NepoetAdoptionComponent } from './nepoet-adoption.component';

describe('NepoetAdoptionComponent', () => {
  let component: NepoetAdoptionComponent;
  let fixture: ComponentFixture<NepoetAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NepoetAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NepoetAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
