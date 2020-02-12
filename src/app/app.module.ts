import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';

const ROUTES: Routes = [
   { path: '', redirectTo: 'directivas', pathMatch: 'full' },
   { path: 'directivas',
  loadChildren: () => import('./directivas/directivas.module').then(m => m.DirectivasModule)},
   { path: 'databinding',
  loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)},
   { path: '**', redirectTo: 'directivas'}
   ];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
