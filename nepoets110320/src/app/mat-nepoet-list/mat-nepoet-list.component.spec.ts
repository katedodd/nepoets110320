import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { MatNepoetListComponent } from './mat-nepoet-list.component';

describe('MatNepoetListComponent', () => {
  let component: MatNepoetListComponent;
  let fixture: ComponentFixture<MatNepoetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatNepoetListComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatNepoetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
