import { FC } from "react";
import { Layout } from "../../components";
import { UserCardMovie } from "../../components/parts/UserCardMovie";
import { WithAuth } from "../../hoc";

const MoviesPage: FC = () => {
  return (
    <>
      <Layout mainClass="peliculas">
        <div className="container d-flex flex-wrap justify-content-center">
          <UserCardMovie media_type="movie" />
        </div>
      </Layout>
    </>
  );
};

export const Movies = WithAuth(MoviesPage);
