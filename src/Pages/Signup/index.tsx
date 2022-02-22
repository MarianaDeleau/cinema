import { FC } from "react";
import { Layout } from "../../components";
import { AddUsers } from "../../components/forms/AddUsers";
import { WithAuth } from "../../hoc";

const SignupPage: FC = () => {
  return (
    <>
      <Layout mainClass="login">
        <AddUsers />
      </Layout>
    </>
  );
};

export const Signup = WithAuth(SignupPage);
