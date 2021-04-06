import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NgxMaskModule } from 'ngx-mask'
import { ControlMessages } from './Shared/control-messages.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './usuarios/usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ControlMessages,

  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

