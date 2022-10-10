import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { IDispatchSettings } from "../../entities/dispatch-settings-entity";

@Injectable({
  providedIn: 'root'
})
export class HttpDispatchSettingsService {
  private readonly api: string;
  private readonly route: string;

  constructor(private http: HttpClient) {
    this.api = environment.backend;
    this.route = `${environment.backend}/dispatch-settings`;
  }

  public get(): Observable<IDispatchSettings> {
    return this.http.get<IDispatchSettings>(`${this.route}`);
  }

  public create(data: { name: string, password: string }): Observable<IDispatchSettings> {
    return this.http.post<IDispatchSettings>(`${this.route}`, data);
  }

  public delete(): Observable<void> {
    return this.http.delete<void>(`${this.route}`);
  }

  public test(): Observable<any> {
    return this.http.get(`${this.route}/test-auth`);
  }
}
