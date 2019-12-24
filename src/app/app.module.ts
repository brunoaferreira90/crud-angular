import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GerenciamentoModule } from './gerenciamento/gerenciamento.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    MenubarModule,
    BrowserAnimationsModule,
    HomeModule,
    GerenciamentoModule
    
  ],
  exports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
