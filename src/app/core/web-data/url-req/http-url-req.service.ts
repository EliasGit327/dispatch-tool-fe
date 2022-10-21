import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import UrlRequest from "../../entities/url-request";
import { EditUrlReqDto } from "../../dtos/edit-url-req-dto";

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

  delete(_id: string): Observable<any> {
    return this.http.delete(`${this.route}/${_id}`);
  }

  update(req: EditUrlReqDto): Observable<UrlRequest> {
    return this.http.put<UrlRequest>(`${this.route}`, req);
  }
}
