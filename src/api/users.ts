import { AddUserType, User } from "../types/models";
import { api } from "../utils";
import { mapToArray } from "../helpers";

const getUsers = async (): Promise<User[]> => {
  const response = await api.get("/users.json");
  return mapToArray(response.data);
};

const addUser = async (payload: AddUserType) => {
  await api.post("/users.json", payload);
};

const deleteUser = async (id: string | undefined) => {
  const usersDB = await getUsers(); 
  const userToDelete = usersDB.find((u) => u.idDB === id )
  await api.delete(`users/${userToDelete?.idDB}.json`)
};

const addItemtoViewed = async (user: User | undefined, idDB: string) => {
 const prevViewedItems = user?.viewed || []; 
  await api.patch(`users/${user?.idDB}.json`, {viewed: [...prevViewedItems, idDB]})

}

const removeItemFromViewed = async (user: User | undefined, idDB: string) => {
  const updateViewedItems =  user?.viewed?.filter((i) => i !== idDB)
await api.patch(`users/${user?.idDB}.json`, {viewed: updateViewedItems,})
}

const updateUser = async (userID: string | undefined) => {
  const response = await api.get(`/users/${userID}.json`)
  return response.data;
}

export const usersApi = { getUsers, addUser, deleteUser, addItemtoViewed, removeItemFromViewed, updateUser };

