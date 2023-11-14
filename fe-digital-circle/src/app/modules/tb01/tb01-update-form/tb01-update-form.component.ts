import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { Tb01 } from 'src/app/models/tb01/tb01';
import { Tb01Service } from 'src/app/services/tb01.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tb01-update-form',
  templateUrl: './tb01-update-form.component.html',
  styleUrls: ['./tb01-update-form.component.sass']
})
export class Tb01UpdateFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tb01Service: Tb01Service,
    protected $dialog: MatDialog,
    private spinner: NgxSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      colTexto: new FormControl(this.data.colTexto, []),
    });
  }

  async onSubmit() {
    var tb01: Tb01 = {
      id: this.data.id,
      colTexto: this.form.value.colTexto,
    }

    this.spinner.show();
    await this.tb01Service.updateTb01(tb01).subscribe(data => {
      if (data) {
        this.spinner.hide();
        this.$dialog.closeAll();
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Registro atualizado com sucesso',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        this.spinner.hide();
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Erro ao atualizar',
          showConfirmButton: true,
        })
      }
    })
  }
}
