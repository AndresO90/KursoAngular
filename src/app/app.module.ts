import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { TokenInterceptor } from './chunck/token.interceptor';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { LayoutsModule } from './layouts/layouts.module';
import { SimpleComponent } from './layouts/simple/simple.component';

const ROUTES: Routes = [
    { path: '', redirectTo: 'directivas', pathMatch: 'full' },
    { path: '', component: AppLayoutComponent, children: [
    { path: 'directivas',
    loadChildren: () => import('./directivas/directivas.module').then(m => m.DirectivasModule)},
     { path: 'databinding',
    loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)},
    {path: 'chunck',
    loadChildren: () => import('./chunck/chunck.module').then(m => m.ChunckModule)},
    {path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)}, ] },
    {path: 'login', component : SimpleComponent, children: [
    {path: '', component: LoginComponent},
   ]},
   { path: '**', redirectTo: 'directivas'}
   ];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    LayoutsModule,
    AuthModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
    }],
})
export class AppModule { }
