import { NgModule ,HostListener } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AjustesVPage } from './ajustes-v';

@NgModule({
  declarations: [
    AjustesVPage,
  ],
  imports: [
       NgxPaginationModule,
    FilterPipeModule,IonicPageModule.forChild(AjustesVPage),
  ],
})
export class AjustesVPageModule {}
