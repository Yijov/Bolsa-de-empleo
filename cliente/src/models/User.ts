enum accessLevels {
  user = "user",
  admin = "admin",
  poster = "poster",
}

export default class User {
  static accessLevels = accessLevels;
  constructor(
    private name: string,
    private lastName: string,
    private password: string,
    private email: string,
    private accessLevel: accessLevels = accessLevels.user,
    private _id?: string
  ) {}

  public get Name() {
    return this.name;
  }

  public set Name(value: string) {
    this.name = value;
  }
  public get LastName() {
    return this.lastName;
  }
  public set LastName(value: string) {
    this.lastName = value;
  }
  public get Password() {
    return this.password;
  }

  public set Password(value: string) {
    this.password = value;
  }
  public get Email() {
    return this.email;
  }

  public set Email(value: string) {
    this.email = value;
  }
  public get AccessLevel() {
    return this.accessLevel;
  }
  public set AccessLevel(value: accessLevels) {
    this.accessLevel = value;
  }

  public get _Id() {
    return this._id;
  }
}
