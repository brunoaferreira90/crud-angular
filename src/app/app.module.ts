import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { GerenciamentoModule } from './gerenciamento/gerenciamento.module';
import { HomeModule } from './home/home.module';
import { TableModule } from 'primeng/components/table/table';



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
    GerenciamentoModule,
    HttpClientModule
    
  ],
  exports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    MenubarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
