import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tb01 } from 'src/app/models/tb01/tb01';
import { Tb01Service } from 'src/app/services/tb01.service';
import { Tb01CreateFormComponent } from '../tb01-create-form/tb01-create-form.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PaginationParameters } from 'src/app/models/pagination/PaginationParameters';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { Tb01UpdateFormComponent } from '../tb01-update-form/tb01-update-form.component';

@Component({
  selector: 'app-tb01-crud',
  templateUrl: './tb01-crud.component.html',
  styleUrls: ['./tb01-crud.component.sass']
})
export class Tb01CrudComponent {

  displayedColumns: string[] = ['id', 'colTexto', 'colDt', 'actions'];

  public length = 0;
  public pageSize = 10;
  public pageIndex = 0;
  public pageSizeOptions: number[] = [10, 15, 20, 30];
  public dataSource!: any;
  public pageSlice!: any;

  public tb01: Tb01[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private tb01Service: Tb01Service,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService,
  ) {
    this.dataSource = new MatTableDataSource<Tb01>([]);
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    await this.count();
    await this.getAllTb01();
  }

  async count() {
    await this.tb01Service.count().subscribe(data => {
      this.length = 0;
      this.length = data;
    });
  }

  async getAllTb01() {
    var paginationParameters: PaginationParameters = {
      PageSize: this.pageSize,
      PageNumber: this.pageIndex
    };

    console.log(paginationParameters)
    this.spinner.show();
    await this.tb01Service.getAllTb01(paginationParameters).subscribe(data => {
      if (data.length == 0) {
        this.tb01 = [];
      }
      this.tb01 = [];
      this.tb01 = data;
      this.pageSlice = this.tb01.slice(0, this.pageSize);
      this.dataSource = new MatTableDataSource(this.pageSlice);

      this.spinner.hide();
    });
  }

  paginate(event: PageEvent) {
    console.log(event)
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getAllTb01();
  }

  openCreateForm() {
    this.dialog.open(Tb01CreateFormComponent, {
      width: '400px',
      data: {}
    }).afterClosed().subscribe(result => {
      this.getAllTb01();
    });
  }

  openUpdateForm(element: any) {
    this.dialog.open(Tb01UpdateFormComponent, {
      width: '400px',
      data: {
        id: element.id,
        colTexto: element.colTexto,
      }
    }).afterClosed().subscribe(result => {
      this.getAllTb01();
    });
  }

  openDeleteModal(element: any) {
    Swal.fire({
      title: "Tem certeza?",
      text: "Você não poderá reverter essa ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete"
    }).then(async (result) => {
      if (result.isConfirmed) {
        this.deleteElement(element);
      }
    });
  }

  async deleteElement(element: any) {
    var tb01: Tb01 = {
      id: element.id,
    }
    await this.tb01Service.deleteTb01(tb01).subscribe(() => {
      this.getAllTb01();
    })
    Swal.fire({
      title: "Deletado!",
      text: "Seu registro foi deletado.",
      icon: "success"
    });
  }



}

