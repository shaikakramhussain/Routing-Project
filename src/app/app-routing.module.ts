import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { PendingissuesComponent } from './dashboard/pendingissues/pendingissues.component';
import { ApprovedComponent } from './dashboard/approved/approved.component';
import { RewardsComponent } from './dashboard/rewards/rewards.component';
import { ViolationtypeComponent } from './dashboard/violationtype/violationtype.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
  children: [
    { path: '', redirectTo: 'approved', pathMatch: 'full' },
    { path: 'pending', component: PendingissuesComponent },
    { path: 'approved', component: ApprovedComponent },
    {path: 'rewards', component:RewardsComponent},
    {path: 'violation', component:ViolationtypeComponent}
  ]
},
  {path:'register',component:RegisterComponent},
 
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
