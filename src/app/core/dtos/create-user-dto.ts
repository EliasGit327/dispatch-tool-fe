export class CreateUserDto {
  name?: string;
  password?: string;

  constructor(u: Partial<any>) {
    Object.assign(this, u);
  }
}
