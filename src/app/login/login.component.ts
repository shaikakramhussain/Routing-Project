import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Api/login.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
      profile: { "username": any; "password": any; };
  result: any;
    constructor(private formBuilder: FormBuilder, private router: Router,
      private loginService: LoginService,private htt:HttpClient) { }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(5)]],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        this.profile = {
          "username":this.registerForm.controls.username.value,
          "password":this.registerForm.controls.password.value
        }
        console.log("akram",this.registerForm);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
    //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    //     this.loginService.loginPost(this.profile).subscribe((response) => {
    //     this.router.navigateByUrl('/dashboard');
    // })
    this.htt.post('http://192.168.1.55:3055/api/admin/login',this.profile).subscribe((response) => {
      this.result = response
      console.log("idname", this.result);
      console.log("idname", this.result.data._id);
      this.router.navigate(['/dashboard'],{ queryParams: { usname: this.profile.username,id: this.result.data._id}});
    });
  }
    register(){
      this.router.navigateByUrl('/register');
    }
}