import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
 import {TableModule} from 'primeng/table';
import { LoginformComponent } from '../../loginform/loginform.component';
import {ButtonModule} from 'primeng/button';
import { AddBookFormComponent } from '../../add-book-form/add-book-form.component';
import { AddMemberFormComponent } from '../../add-member-form/add-member-form.component';
import { RequestBookFormComponent } from '../../request-book-form/request-book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import { ServicesService} from '../../services/services.service';
import { ConfirmationService } from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    HttpModule,
    MessagesModule,
    MessageModule,
    TableModule,
    HttpClientModule,
     ButtonModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    DialogModule
    
//    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LoginformComponent,
    AddBookFormComponent,
    RequestBookFormComponent,
    AddMemberFormComponent
    
  ],
  providers:[ServicesService,ConfirmationService]
})

export class AdminLayoutModule {}
