import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChunckComponent } from './chunck/chunck.component';

const ROUTES: Routes = [
  { path: '', component: ChunckComponent}
];

@NgModule({
  declarations: [ChunckComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule
  ]
})
export class ChunckModule { }
