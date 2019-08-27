import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/ui/shared/registro.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  now: Date;
  data_registro: string;
  constructor(public service: RegistroService, private firestore: AngularFirestore, private toastr: ToastrService) { }
pickDate() {
    $("#date-picker").datepicker();            
  }
  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
    data_created: null,
    categoria: '' ,
    descricao: '',
    tipo: '',
    valor: 0.00,
    }
  }
 
  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    this.now = new Date();
    this.data_registro = this.now.getUTCDate() + "/" + (this.now.getMonth().valueOf() + 1) + "/" + this.now.getFullYear();
    delete data.id;
    if (form.value.id == null){
      // Insert
      this.firestore.collection('registros').add(data);
     this.toastr.success("Registro inserted in firestore database successfully!","Insert");
    } 
    else{
      // Update
      this.firestore.doc('registros/' + form.value.id).update(data);
       this.toastr.info("Registro updated in firestore database successfully!","Update");
    }
    this.resetForm(form);
  }
  
}
