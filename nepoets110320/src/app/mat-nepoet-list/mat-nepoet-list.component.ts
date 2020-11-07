import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatNepoetListDataSource, MatNepoetListItem } from './mat-nepoet-list-datasource';

@Component({
  selector: 'app-mat-nepoet-list',
  templateUrl: './mat-nepoet-list.component.html',
  styleUrls: ['./mat-nepoet-list.component.scss']
})
export class MatNepoetListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MatNepoetListItem>;
  dataSource: MatNepoetListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'color', 'species'];

  ngOnInit() {
    this.dataSource = new MatNepoetListDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
