import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UserLoginComponent } from './user-login/user-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { NotificationMessageComponent } from './notification-message/notification-message.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RegistrosComponent } from './registros/registros.component';
import { RegistroDataService } from '../core/registro-data.service';
import { RegistroService } from '../core/registros.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RegistroComponent } from './registros/registro/registro.component';
import { RegistroListComponent } from './registros/registro-list/registro-list.component';
import { ToastrModule } from 'ngx-toastr';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  imports: [CommonModule, RouterModule, 
    ReactiveFormsModule,
    AngularFireDatabaseModule, FormsModule,
    ToastrModule.forRoot(),
    NoopAnimationsModule, MatTableModule,
    MatSortModule,
    MatPaginatorModule],
  declarations: [
    UserLoginComponent,
    HomePageComponent,
    MainNavComponent,
    NotificationMessageComponent,
    UserProfileComponent,
    UserFormComponent,
    RegistrosComponent,
    RegistroComponent,
    RegistroListComponent,
  ],
  providers:[RegistroDataService, RegistroService],
  exports: [
    MainNavComponent,
    NotificationMessageComponent,
    UserProfileComponent,
    UserFormComponent
  ]
})
export class UiModule {}
