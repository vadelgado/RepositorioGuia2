import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup

  constructor(private fb: FormBuilder,
              private router:Router,
              private toastr: ToastrService){
    this.usuarioForm = this.fb.group({
      primerNombre: ['',Validators.required],
      segundoNombre: [''],
      primerApellido: ['',Validators.required],
      segundoApellido: [''],
      correo: ['',Validators.required],
      edad: ['',Validators.required]
    })
  }

  ngOnInit(): void {    
  }

  agregarUsuario(){   

    const USUARIO: usuario={
      primerNombre: this.usuarioForm.get('primerNombre')?.value,
      segundoNombre: this.usuarioForm.get('segundoNombre')?.value,
      primerApellido: this.usuarioForm.get('primerApellido')?.value,
      segundoApellido: this.usuarioForm.get('segundoApellido')?.value,
      correo: this.usuarioForm.get('correo')?.value,
      edad: this.usuarioForm.get('edad')?.value,
    }
    console.log(USUARIO);
    this.toastr.success('El Usuario fue registrado con exito!', 'Usuario Registrado!');
    this.router.navigate(['/']);

  }


}
