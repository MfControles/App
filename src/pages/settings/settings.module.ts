import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { SettingsPage } from './settings';

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
       NgxPaginationModule,
    FilterPipeModule,IonicPageModule.forChild(SettingsPage),
  ],
})
export class SettingsPageModule {}
