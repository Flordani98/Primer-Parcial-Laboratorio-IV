import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../Models';
import { lastValueFrom } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

    private user!: User;

    constructor(private apiService: ApiService) { }

    public async login(email: string, password: string): Promise<boolean>{
        let isLogin = false;

        try{
            let apiResponse = this.apiService.getToAuth(email, password); 
            //* ApiService
            let userResponse = await lastValueFrom(apiResponse); 
            this.user = userResponse[0];
            if(this.user){ 
                localStorage.setItem('token', this.user.id!.toString()); 
                isLogin = true;
          
            }
        }catch (error){
            throw error;
        }
        console.log(this.user);

        return isLogin; 
    }
    
}