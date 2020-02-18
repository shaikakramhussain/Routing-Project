import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  paramsname: any;
  idname: any;
  result: Object;
  registerForm: FormGroup;
  submitted = false;
   
  formBuilder: any;
  profile: { "first_name": any; "emai": any; };
  constructor(private router: Router,private route: ActivatedRoute, private htt:HttpClient) { }
  ngOnInit(): void {   
    this.route.queryParams.subscribe(params => {
      console.log("PARAMS",params);
      this.paramsname=params.usname;
      this.idname=params.id;
      console.log("PARAMS",this.paramsname);
      console.log("IDNAME",this.idname);
  })
  this.htt.get('http://192.168.3.235:3001/get/list/').subscribe((response) => {
      this.result = response
      console.log("name00000000", this.result);
    });
  }
  logOut(){
    this.router.navigateByUrl('/login');
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
      this.submitted = true;
      this.profile = {
        "first_name":this.registerForm.controls.first_name.value,
          "emai":this.registerForm.controls.emai.value
      }
      console.log("akram",this.registerForm);
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  //     this.loginService.loginPost(this.profile).subscribe((response) => {
  //     this.router.navigateByUrl('/dashboard');
  // })
  this.htt.post('http://192.168.3.235:3001/post/list',this.profile).subscribe((response) => {
    this.result = response
    console.log("idname", this.result);
  });
}
}
