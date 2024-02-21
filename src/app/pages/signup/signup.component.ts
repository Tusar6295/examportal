import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from '../../services/user.service';
import {HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatFormFieldModule,
     MatInputModule,
     FormsModule,
     CommonModule,
     MatButtonModule,
     HttpClientModule
    ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  //userService: UserService = inject(UserService);
  constructor(private userService: UserService){

  }

  public user ={
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  }


  formSubmit(){
    if(this.user.username== '' || this.user.username == null){
      alert('User is required !!');
      return;
    }

    this.userService.addUser(this.user).subscribe({
      next: (data) => {
            console.log(data)
            alert("success")
      },
      error: (err) => {
            console.log(err)
            alert("Error occurred")
      }
    })
  }
}
