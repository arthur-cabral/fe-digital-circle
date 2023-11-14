import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tb01 } from 'src/app/models/tb01';
import { Tb01Service } from 'src/app/services/tb01.service';
import { Tb01CreateFormComponent } from '../tb01-create-form/tb01-create-form.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tb01-crud',
  templateUrl: './tb01-crud.component.html',
  styleUrls: ['./tb01-crud.component.sass']
})
export class Tb01CrudComponent {

  dataSource: MatTableDataSource<Tb01>;
  displayedColumns: string[] = ['id', 'colTexto', 'colDt', 'actions'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private tb01Service: Tb01Service,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<Tb01>();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async ngOnInit() {
    this.getAllTb01();
  }

  async getAllTb01() {
    this.tb01Service.getAllTb01().subscribe(
      data => {
        this.dataSource.data = data.map(element => ({
          id: element.id,
          colTexto: element.colTexto,
          colDt: element.colDt
        }));
      },
      error => {
        console.error('Erro ao obter dados do serviço:', error);
      }
    );
  }

  editItem(element: Tb01) {
    console.log(element);
  }

  deleteItem(element: Tb01) {
    console.log(element);
  }

  openCreateForm() {
    const dialogRef = this.dialog.open(Tb01CreateFormComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O formulário foi fechado com o resultado:', result);
    });
  }

}
