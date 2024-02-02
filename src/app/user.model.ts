export class UserModel {
    id: number;
  username: string;
  password: string;
  email: string;
  // Add other properties as needed

  constructor(id: number, username: string, password: string, email: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    // Initialize other properties as needed
  }
}
