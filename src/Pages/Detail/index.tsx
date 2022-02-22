import { FC } from "react";
import { Layout } from "../../components";
import { WithAuth } from "../../hoc";
import { DetailCard } from "../../components/parts/Detail";
import { UserCardMovie } from "../../components/parts/UserCardMovie";
import { useNavigate } from "react-router-dom";
import { ArrowLeftCircle } from "react-bootstrap-icons";
const DetailPage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Layout mainClass="detail">
        <div className="container">
          <DetailCard />
        </div>
        <div className="container d-flex  me-5 mt-5 flex-column">
          <ArrowLeftCircle
            fontSize={40}
            className="mt-5 mb-5 d-flex align-self-center"
            color="black"
            onClick={() => navigate(-1)}
          />
          <h2 className="d-flex text-align-start">Also...</h2>
        </div>
        <div className="container d-flex flex-wrap justify-content-center">
          <UserCardMovie media_type="movie" />
          <UserCardMovie media_type="tv" />
        </div>
      </Layout>
    </>
  );
};

export const Detail = WithAuth(DetailPage);
