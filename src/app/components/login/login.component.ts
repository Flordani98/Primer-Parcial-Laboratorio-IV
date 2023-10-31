import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public email: string = '';
  public password: string = '';

  constructor(private authService: AuthService, private router: Router){}

  async onSubmit(){
    try{
      let isLogin: boolean = await this.authService.login(this.email, this.password); 

      if(isLogin){ 
        this.router.navigate(["/home"]);  
      }else{
        alert("Usuario no registrado!");
        this.email = '';
        this.password = '';

      }

    }catch(error){
      console.log(error);
    }


    console.log(this.email, this.password);
  }

}
