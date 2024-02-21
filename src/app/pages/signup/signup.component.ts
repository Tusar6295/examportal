import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatFormFieldModule,
     MatInputModule,
     FormsModule,
     CommonModule,
     MatButtonModule,
    ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  userService: UserService = inject(UserService);

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
      
    })
  }
}
