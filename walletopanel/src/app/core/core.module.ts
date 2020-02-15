import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { ImgDirective } from '../shared/directives/img.directive';



@NgModule({
  declarations: [
    ImgDirective
  ],
  imports: [
    CommonModule,
    AuthModule
  ]
})
export class CoreModule { }
