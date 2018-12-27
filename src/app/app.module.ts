import { CanDeactivateGaurd } from './servers/edit-server/can-deactivate-gaurd.service';
import { AuthGaurd } from './auth-gaurd.service';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ServersService } from './servers/servers.service';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { BrowserModule } from '@angular/platform-browser';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
   
  ],
  providers: [ServersService,
  AuthService,AuthGaurd,CanDeactivateGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
