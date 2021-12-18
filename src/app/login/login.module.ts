import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

const declarations = [LoginComponent];

@NgModule({
  declarations,
  imports: [CommonModule],
  exports: [declarations],
  providers: [],
})
export class LoginModule {}
