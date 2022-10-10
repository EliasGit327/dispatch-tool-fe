import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { IUserDto } from "../../dtos/user-dto";

interface ILoginResponse {
  token: string;
  user: IUserDto;
}

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {
  private readonly api: string;
  private readonly route: string;

  constructor(private http: HttpClient) {
    this.api = environment.backend;
    this.route = `${environment.backend}/auth`;
  }

  public login(loginData: { name: string, password: string }): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`${this.route}/login`, loginData);
  }

  public testAuth(): Observable<any> {
    return this.http.get(`${this.route}`);
  }
}
