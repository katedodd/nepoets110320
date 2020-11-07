import { APP_ID, Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { nepoets } from '../data/nepoets';

@Component({
  selector: 'app-nepoets-list',
  templateUrl: './nepoets-list.component.html',
  styleUrls: ['./nepoets-list.component.scss']
})
export class NepoetsListComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  nepoets = nepoets;
  private gridApi;
  private gridColumnApi;
  displayNepoet = false;
  selectedRows;

  columnDefs = [
    { field: 'name' },
    { field: 'color' },
    { field: 'species' }
  ];

  defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true,
    width: 125
  };

  rowData: any;

  constructor() { }

  ngOnInit(): void {
    this.rowData = this.nepoets;
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onSelectionChanged(event) {
    this.displayNepoet = true;
    this.selectedRows = this.gridApi.getSelectedRows();
    console.log(this.selectedRows);
    console.log(this.displayNepoet);
    return this.selectedRows;
  }

  onPlayButton(response) {
    console.log(response);
    if (response) {
      this.selectedRows[0].img = '../../assets/nepoets/happy/happy_' 
        + this.selectedRows[0].color + '_' 
        + this.selectedRows[0].species + '.png';
      alert("yay play time!");
    }
    else if (!response) {
      this.selectedRows[0].img = '../../assets/nepoets/sad/sad_' 
        + this.selectedRows[0].color + '_' 
        + this.selectedRows[0].species + '.png';
      alert("look what you did it");
    }
  }
}
