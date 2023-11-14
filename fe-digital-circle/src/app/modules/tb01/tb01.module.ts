import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tb01CrudComponent } from './tb01-crud/tb01-crud.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { Tb01CreateFormComponent } from './tb01-create-form/tb01-create-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  { path: '', component: Tb01CrudComponent },
];

@NgModule({
  declarations: [
    Tb01CrudComponent,
    Tb01CreateFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule
  ]
})
export class Tb01Module { }
