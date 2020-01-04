
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
import { ToastrModule } from 'ngx-toastr';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { AuthPageComponent } from './auth-page/auth-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    AuthPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ShowHidePasswordModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ToastrModule.forRoot(),
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
