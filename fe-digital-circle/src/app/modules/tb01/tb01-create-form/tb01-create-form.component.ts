import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { Tb01Service } from 'src/app/services/tb01.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tb01-create-form',
  templateUrl: './tb01-create-form.component.html',
  styleUrls: ['./tb01-create-form.component.sass']
})
export class Tb01CreateFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tb01Service: Tb01Service,
    protected $dialog: MatDialog,
    private spinner: NgxSpinnerService,
  ) {
    this.form = this.formBuilder.group({
      colTexto: new FormControl('', []),
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.spinner.show();
    await this.tb01Service.createTb01(this.form.value).subscribe(data => {
      if (data) {
        this.spinner.hide();
        this.$dialog.closeAll();
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Registro inserido com sucesso',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Erro ao inserir',
          showConfirmButton: true,
        })
        this.spinner.hide();
      }
    })
  }
}
