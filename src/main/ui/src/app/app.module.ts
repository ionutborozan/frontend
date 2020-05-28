import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DisplayBoardComponent } from './display-board.component';
import { HomepageComponent } from './homepage.component';
import { environment } from '../environments/environment';
import {AppComponent} from "./app.component";
import {LoginModule} from "../projects/login/src/lib/login.module";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AddUserComponent} from "../projects/homepage/src/lib/add-user/add-user.component";
import {HomepageModule} from "../projects/homepage/src/lib/homepage.module";
import {MatTableModule} from "@angular/material/table";
import {NotificationPageModule} from "../projects/notification-page/src/lib/notification-page.module";


// state related imports
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { reducers, metaReducers } from './app-state/reducers';
// import { CustomRouterStateSerializer } from './app-state/shared/utils';
// import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayBoardComponent,
    HomepageComponent
  ],
  entryComponents: [HomepageComponent],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
      HomepageModule,
      NotificationPageModule

    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.

     StoreModule.forRoot(reducers, { metaReducers }),

     /**
     * @ngrx/router-store keeps router state up-to-date in the store.

     StoreRouterConnectingModule,

     /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension

     !environment.production ? StoreDevtoolsModule.instrument() : [],

     /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
  ],
  providers: [],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
