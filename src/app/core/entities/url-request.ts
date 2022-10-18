export default class UrlRequest {
  _id!: string;
  userId!: string;
  name!: string;
  description!: string;
  url!: string;
  createdAt?: Date;
  isActive = false;
  lastResult?: { made?: Date, items?: any[] };

  constructor(urlReq?: Partial<UrlRequest>) {
    Object.assign(this, urlReq);
  }

}
