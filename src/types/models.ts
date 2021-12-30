export type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  birthdate: string;
};

export type AddUserType = Omit<User, "id">;

