import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { PollsComponent } from './polls/polls.component';
import { PollHomeComponent } from './poll-details/poll-home/poll-home.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzTableModule } from 'ng-zorro-antd/table';
import { PollMemberTableComponent } from './poll-details/poll-member-table/poll-member-table.component';
import { PollGraphComponent } from './poll-details/poll-graph/poll-graph.component';
import { NgChartsModule  } from 'ng2-charts';
import { NgApexchartsModule } from "ng-apexcharts";
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { PollStatsComponent } from './poll-details/poll-stats/poll-stats.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './Admin/admin.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {provideStorage, getStorage} from '@angular/fire/storage';
import { SignupComponent } from './signup/signup.component';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';


registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeComponent,
    PollsComponent,
    PollHomeComponent,
    PollMemberTableComponent,
    PollGraphComponent,
    PollStatsComponent,
    SignupComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    NzTableModule,
    NgChartsModule,
    NgApexchartsModule,
    NzDropDownModule,
    NzGridModule,
    NzSkeletonModule,
    NzButtonModule,
    ReactiveFormsModule,
    AdminModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(()=> getStorage()),
    provideAuth(()=> getAuth())
  ],
  providers: [
  
  
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
