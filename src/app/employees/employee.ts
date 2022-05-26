export class Employee {

  constructor(id: number, name: string, email: string, avatar: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.avatar = avatar;
  }

  id: number;
  name: string;
  email: string;
  avatar: string;
}
