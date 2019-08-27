// import { Component, OnInit } from '@angular/core';
// import { Registro } from 'src/app/core/registros.model';
// import { RegistroDataService } from 'src/app/core/registro-data.service';
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { Observable } from 'rxjs/internal/Observable';
// import { RegistroService } from 'src/app/core/registros.service';


// @Component({
//   selector: 'app-registros',
//   templateUrl: './registros.component.html',
//   styleUrls: ['./registros.component.css']
// })
// export class RegistrosComponent implements OnInit {
//   todosRegistros: Observable<any>;
//   registro: Registro;
//   newData = true;
//   key: string = "";
//   registroForm: FormGroup;
//   now: Date;
//   modalForm: FormGroup;

//   constructor(
//     private registroDataService: RegistroDataService,
//     private registroService: RegistroService,
//     private fb: FormBuilder
//   ) {
//     this.registroForm = new FormGroup({
//       data_created: new FormControl(),
//       categoria: new FormControl(),
//       descricao: new FormControl(),
//       tipo: new FormControl(),
//       valor: new FormControl(),
//       key: new FormControl(),
//     });

//   }

//   createForm() {
//     this.registroForm = this.fb.group({
//       data_created: "",
//       categoria: "",
//       descricao: "",
//       tipo: "",
//       valor: 0.00,
//     });
//   }
//   ngOnInit() {
//     this.createForm();
//     this.todosRegistros = this.registroService.getAll();
//     console.log(this.registroService.getAll);
//   }


//   onSubmit() {
//     console.log(this.registroForm);

//     this.registro = new Registro();
//     this.now = new Date();
//     this.registro.data_created = this.now.getUTCDate() + "/" + (this.now.getMonth().valueOf() + 1) + "/" + this.now.getFullYear();
//     this.registro.categoria = this.registroForm.controls.categoria.value;
//     this.registro.descricao = this.registroForm.controls.descricao.value;
//     this.registro.tipo = this.registroForm.controls.tipo.value;
//     this.registro.valor = this.registroForm.controls.valor.value;
//     this.registro = this.registroForm.controls.key.value;
//     console.log(this.registro);
//     if (this.key) {
//       this.registroService.update(this.registro, this.key);
//       console.log(this.registro);
//     } else {
//       this.registroService.insert(this.registro);
//       console.log(this.registro);
//     }
//     this.registro = new Registro();
//     console.log(this.registro);
//     alert("O registro '" + this.registroForm.controls.descricao.value + "' foi inserido com sucesso!");
 
// }
// delete (key: string) {
//   alert("Tem certeza que deseja excluir este registro?");
//   this.registroService.delete(key);

// }
// edit(registro: Registro, key: string) {
//   alert("Tem certeza que deseja editar este registro?");
//   this.newData != this.newData;
//   this.registroDataService.changeRegristro(registro, key);
// }
// toggleForm() {
//   this.newData = !this.newData;

// }
// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
