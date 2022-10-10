import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { IUsersStatsDto } from "../../interfaces/users-stats";
import { IUserEntity } from "../../entities/user-entity";
import { ICreateUserDto } from "../../dtos/create-dto";

@Injectable({
  providedIn: 'root'
})
export class HttpUsersService {
  private readonly api: string;
  private readonly route: string;

  constructor(private http: HttpClient) {
    this.api = environment.backend;
    this.route = `${environment.backend}/user`;
  }

  public getUsersStats(): Observable<IUsersStatsDto> {
    return this.http.get<IUsersStatsDto>(`${this.route}/stats`);
  }

  getUsersFullData(): Observable<IUserEntity[]> {
    return this.http.get<IUserEntity[]>(`${this.route}/all-data`);
  }

  getUser(id: string): Observable<IUserEntity> {
    return this.http.get<IUserEntity>(`${this.route}/${id}`);
  }

  createUser(signUpData: ICreateUserDto): Observable<IUserEntity> {
    return this.http.post<IUserEntity>(`${this.route}`, signUpData);
  }
}
