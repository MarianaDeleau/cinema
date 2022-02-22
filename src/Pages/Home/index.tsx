import { FC } from "react";
import { Layout } from "../../components";
import { UserCardMovie } from "../../components/parts/UserCardMovie";
import { WithAuth } from "../../hoc";

const HomePage: FC = () => {
  return (
    <>
      <Layout mainClass="home">
        <div className="container d-flex flex-wrap justify-content-center">
          <UserCardMovie media_type="movie" />
          <UserCardMovie media_type="tv" />
        </div>
      </Layout>
    </>
  );
};

export const Home = WithAuth(HomePage);
