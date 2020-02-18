import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApprovedComponent } from './dashboard/approved/approved.component';
import { PendingissuesComponent } from './dashboard/pendingissues/pendingissues.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginService } from './Api/login.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RejectedissuesComponent } from './dashboard/rejectedissues/rejectedissues.component';
import { TotalissuesComponent } from './dashboard/totalissues/totalissues.component';
import { RewardsComponent } from './dashboard/rewards/rewards.component';
import { ViolationtypeComponent } from './dashboard/violationtype/violationtype.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    DashboardComponent,
    ApprovedComponent,
    PendingissuesComponent,
    RegisterComponent,
    RejectedissuesComponent,
    TotalissuesComponent,
    RewardsComponent,
    ViolationtypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
