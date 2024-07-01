import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDto } from 'src/app/common/userdto';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router,
              private toastr: ToastrService,
              private sesionStorage: SessionStorageService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
      const userDto = new UserDto(
        this.loginForm.value.username,
        this.loginForm.value.password
      );

      this.authenticationService.login(userDto).subscribe({
        next: (response) => {
          this.sesionStorage.setItem('userData', response)

          let nombre= response.nombre != null || response.nombre != undefined ? response.nombre : userDto.username

          this.toastr.info("Bienvenido " +  nombre + "!", "Sign In");
          this.router.navigate(['']);
        },
        error: (error) => {
          console.error('Error al loguearse ', error)
          if(error.status===403) {
            this.toastr.error("Verifique sus datos", "Error");
          }
          if(error.status===500) {
            this.toastr.error("Comuniquese con el administrador", "Error");
          }
        }
      })
  }

}

