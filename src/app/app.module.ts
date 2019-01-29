import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginformComponent } from './loginform/loginform.component';
 import {ButtonModule} from 'primeng/button';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
 
import { RequestBookFormComponent } from './request-book-form/request-book-form.component';

import { AddMemberFormComponent } from './add-member-form/add-member-form.component';



//import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    
   // HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
