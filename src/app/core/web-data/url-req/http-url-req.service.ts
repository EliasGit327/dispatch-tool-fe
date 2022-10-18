import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { IUsersStatsDto } from "../../interfaces/users-stats";
import { IUserEntity } from "../../entities/user-entity";
import { CreateUserDto } from "../../dtos/create-user-dto";
import UrlRequest from "../../entities/url-request";

@Injectable({
  providedIn: 'root'
})
export class HttpUrlReqService {
  private readonly api: string;
  private readonly route: string;

  constructor(private http: HttpClient) {
    this.api = environment.backend;
    this.route = `${environment.backend}/request`;
  }

  public getForUser(): Observable<UrlRequest[]> {
    return this.http.get<UrlRequest[]>(`${this.route}`);
  }

  public create(urlReq: UrlRequest): Observable<UrlRequest> {
    return this.http.post<UrlRequest>(`${this.route}`, urlReq);
  }

  getUsersFullData(): Observable<IUserEntity[]> {
    return this.http.get<IUserEntity[]>(`${this.route}/all-data`);
  }

  getUser(id: string): Observable<IUserEntity> {
    return this.http.get<IUserEntity>(`${this.route}/${id}`);
  }

  createUser(signUpData: CreateUserDto): Observable<IUserEntity> {
    return this.http.post<IUserEntity>(`${this.route}`, signUpData);
  }

  getLoggedUserData(): Observable<IUserEntity> {
    return this.http.get<IUserEntity>(`${this.route}/current`);
  }
}
