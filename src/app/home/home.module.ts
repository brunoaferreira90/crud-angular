import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    MenubarModule
  ],
  exports: [
    MenubarModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
