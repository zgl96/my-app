import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    HttpClientModule
  ],
})
export class SharedModule { }