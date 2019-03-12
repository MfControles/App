import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
       NgxPaginationModule,
    FilterPipeModule,IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
