import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TopInactivityComponent } from './dashboard/top-inactivity/top-inactivity.component';
import TopTransactionsComponent from './dashboard/top-transactions/top-transactions.component';
import { InactivityHoursBarComponent } from './user-details/inactivity-hours-bar/inactivity-hours-bar.component';
import { InactivitySessionPieComponent } from './user-details/inactivity-session-pie/inactivity-session-pie.component';
import { TimeEventBarComponent } from './user-details/time-event-bar/time-event-bar.component';
import { TransactionCounterChartComponent } from './user-details/transaction-counter-chart/transaction-counter-chart.component';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDetailsComponent,
    TopInactivityComponent,
    TopTransactionsComponent,
    InactivityHoursBarComponent,
    InactivitySessionPieComponent,
    TimeEventBarComponent,
    TransactionCounterChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    FormsModule,
    HttpClientModule,
    MatTooltipModule,
    //Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  providers: [
    provideNativeDateAdapter(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
