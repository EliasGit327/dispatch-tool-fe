export class EditUrlReqDto {
  _id!: string;
  name!: string;
  description?: string;
  url!: string;

  constructor(newData: Partial<EditUrlReqDto>) {
    Object.assign(this, newData);
  }
}
