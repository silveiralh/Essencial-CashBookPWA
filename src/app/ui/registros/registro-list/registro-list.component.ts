import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/ui/shared/registro.model';
import { RegistroService } from 'src/app/ui/shared/registro.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro-list',
  templateUrl: './registro-list.component.html',
  styleUrls: ['./registro-list.component.css']
})
export class RegistroListComponent implements OnInit {

  list: Registro[]=[];
  
  constructor(private service: RegistroService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getRegistros().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Registro;
      },
      console.log(this.list),)
    });
    
  }

  onEdit(reg: Registro, $element): void {
    if (confirm("Tem certeza que deseja editar esse registro?")) {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    this.service.formData = Object.assign({}, reg);
    }
  }
 
  onDelete(id: string) {
    if (confirm("Tem certeza que deseja excluir esse registro?")) {
      this.firestore.doc('registros/' + id).delete();
      this.toastr.warning("Registro deletado com sucesso!","Delete");
    }
  }
  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
