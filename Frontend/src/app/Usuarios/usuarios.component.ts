import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Usuario } from '../Models/Usuario';
import { Departamento } from '../Models/Departamento';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  showForm = false;
  submitted = false;
  Usuario: Usuario[];
  todayDate = new Date().toISOString().split("T")[0];
  Departamento: Departamento[];
  public FormUsuario: FormGroup;
  constructor(private _service: UsuariosService, private readonly _formB: FormBuilder) { }

  ngOnInit() {
    this.InitForm();
  }

  LoadUsuarios() {
    this._service.getUsuarios().subscribe(resp => {
      this.Usuario = resp as Usuario[];
    });
  }

  // LoadDepartamento() {
  //   this._service.ge
  // }

  public InitForm() {
    this.FormUsuario = this._formB.group({
      Nombres: [null, Validators.required],
      Apellidos: [null, Validators.required],
      Genero: [null, Validators.required],
      Cedula: [null, Validators.required],
      FechaNacimiento: [null, Validators.required],
      IdDepartamento: [null, Validators.required],
      Cargo: [null, Validators.required],
      SupervisorInmediato: [null, Validators.required],

    });
  }

  GuardarUsuario() {
    this.submitted = true;
    console.log(this.FormUsuario)
    if (this.FormUsuario.invalid) {
      return;
    }

    this._service.postUsuario(this.FormUsuario.value).subscribe(resp => {
      alert("Usuario guardado correctamente");
    });
  }
}
