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
  Usuarios: Usuario[];
  todayDate = new Date().toISOString().split("T")[0];
  Departamentos: Departamento[];
  public FormUsuario: FormGroup;
  constructor(private _service: UsuariosService, private readonly _formB: FormBuilder) { }

  ngOnInit() {
    this.InitForm();
    this.LoadDepartamento();

  }

  LoadUsuarios() {
    this._service.getUsuarios().subscribe(resp => {
      this.Usuarios = resp as Usuario[];
      for (let i = 0; i < this.Usuarios.length; i++) {
        this.Usuarios[i].departamento = this.Departamentos.find(x => x.idDepartamento === this.Usuarios[i].idDepartamento ).nombre;

      }
    });
  }

  LoadDepartamento() {
    this._service.getDepartamento().subscribe(resp =>{
      this.Departamentos = resp as Departamento[];
      this.LoadUsuarios();
    });
  }

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
      this.submitted = false;
      this.FormUsuario.reset();
      this.showForm = false;
      this.LoadDepartamento();
      this.LoadUsuarios();
    });
  }
}
