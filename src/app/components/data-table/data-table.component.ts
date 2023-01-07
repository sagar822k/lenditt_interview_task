import { Component } from '@angular/core';
import { Table } from 'primeng/table';

import { users, userTypes } from "../../constants/data"

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  userTypes = userTypes
  users = users

  clear(table: Table) {
    table.clear()
  }
}
