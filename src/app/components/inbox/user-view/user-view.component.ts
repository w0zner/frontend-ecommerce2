import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/common/user';
import { UserType } from 'src/app/common/user-type';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {

  public registerForm: FormGroup;
  public typeUSER: UserType = UserType.USER;
  public typeADMIN: UserType = UserType.ADMIN;
  userId: number=0;

  constructor(private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private sesionStorage: SessionStorageService,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute)
  {
    this.userId=this.sesionStorage.getItem('userData').id;
    this.registerForm = this.fb.group({
      id: [0],
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      cellphone: ['', Validators.required],
      userType: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getUserById();
  }

  onSubmit() {
    const user = new User(
      this.registerForm.value.id,
      this.registerForm.value.email,
      this.registerForm.value.firstname,
      this.registerForm.value.lastname,
      this.registerForm.value.email,
      this.registerForm.value.address,
      this.registerForm.value.cellphone,
      this.registerForm.value.userType,
      this.registerForm.value.password
    );
      console.log(user)
    this.authenticationService.register(user).subscribe({
      next: (response) => {
        this.toastr.success("Registro de usuario exitoso!","Usuarios")

        this.router.navigate(['/admin/users']);
      },
      error: error => console.error('Error al registrar un usuario ', error)
    })
}


getUserById() {
      if(this.userId!=0){
        this.userService.getUserById(this.userId).subscribe(
          data => {
            this.registerForm.patchValue({
              id: data.id,
              username: data.email,
              firstname: data.firstname,
              lastname:data.lastname,
              email:data.email,
              address:data.address,
              cellphone:data.cellphone,
              userType:data.userType,
              password:data.password
            });
          }
        )
      }
}

}
