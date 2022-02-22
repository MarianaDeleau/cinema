import { FC } from "react";
import { Layout, UsersCard } from "../../components";
import { WithAuth } from "../../hoc";

const UsersPage: FC = () => {
  return (
    <>
      <Layout mainClass="users">
        <div className="container">
          <UsersCard />
        </div>
      </Layout>
    </>
  );
};

export const Users = WithAuth(UsersPage);
