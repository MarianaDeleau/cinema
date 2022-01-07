export type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  birthdate: string;
  password: string;
  type: string;
};

export type AddUserType = Omit<User, "id">;

export type UserLoginType = Omit<User, "id" | "name" | "lastname" | "birthdate" | "type">;