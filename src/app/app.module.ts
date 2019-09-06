import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas
import { APP_ROUTES } from './app.routes';
// Modulos
import { PageModule } from './pages/pages.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegiterComponent } from './login/regiter.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegiterComponent,
  
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
