import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  constructor(private http: HttpClient) {
  }

  public UserId: string = "";
  public DateSelected: Date = new Date;

  getTopInactivityService(dateSelected: Date): Observable<any> {
    let year = dateSelected.getFullYear();
    let month = dateSelected.getUTCMonth() + 1;
    let day = dateSelected.getDate();
    let fullDate = year + "-" + month + "-" + day;
    return this.http.post('https://localhost:7197/api/SifMonitor/UserInactivityTop', { "Top": 10, "Fecha": fullDate})
  }

  getTopTransactions(dateSelected: Date): Observable<any> {
    let year = dateSelected.getFullYear();
    let month = dateSelected.getUTCMonth() + 1;
    let day = dateSelected.getDate();
    let fullDate = year + "-" + month + "-" + day;
    return this.http.post('https://localhost:7197/api/SifMonitor/NumTransacrions', { "Top": 10, "Fecha": fullDate})
  }

  getInfoUser(params: Object): Observable<any> {
    return this.http.post('https://localhost:7197/api/SifMonitor/Events', params)
  }
}
