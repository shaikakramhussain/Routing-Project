import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
  profile: { "username": any; "password": any; };
  result: Object;

    constructor(private formBuilder: FormBuilder, private router: Router
      , private htt:HttpClient) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
            
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
        console.log(this.registerForm);

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        this.htt.post('http://192.168.1.55:3055/api/admin/register',this.profile).subscribe((response) => {
      this.result = response
      console.log(this.result);
      this.router.navigateByUrl('/login');
    })
  }
    
}