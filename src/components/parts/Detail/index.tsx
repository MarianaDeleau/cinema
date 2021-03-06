import { FC, useEffect, useState } from "react";
import { useItems } from "../../../hooks/useItems";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { movieApi } from "../../../api";
import { Trailer } from "../../../types";

const DetailCard: FC = () => {
  const { openDetail, movieDetail } = useItems();
  const params = new URLSearchParams(window.location.search);

  const idDetail = params.get("id");

  useEffect(() => {
    openDetail(idDetail!);
  }, [idDetail]);

  const [trailers, setTrailers] = useState<Trailer[]>([]);

  useEffect(() => {
    movieApi
      .getTrailers(movieDetail?.id!, movieDetail?.media_type!)
      .then((results) => setTrailers(results));
  }, [movieDetail]);

  return (
    <div className="d-flex flex-wrap justify-content-center ">
      <Card
        sx={{
          width: "100%",
          margin: 2,
          height: "auto",
          display: "flex",
          borderRadius: 15,
          padding: 3,
        }}
        className="card_detail"
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardActionArea>
            <CardContent sx={{ height: "auto" }}>
              <Typography
                component="div"
                sx={{
                  color: "gray",
                  fontWeight: 600,
                  fontSize: 30,
                  textAlign: "center",
                  lineHeight: 1.2,
                  marginTop: 5,
                }}
              >
                <p>{movieDetail?.title || movieDetail?.name}</p>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "gray",
                  fontWeight: 500,
                  fontSize: 15,
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                <p>Resumen: {movieDetail?.overview}</p>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "gray",
                  fontWeight: 400,
                  fontSize: 15,
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                <p>
                  Lanzamiento:{" "}
                  {movieDetail?.release_date || movieDetail?.first_air_date}
                </p>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "gray",
                  fontWeight: 400,
                  fontSize: 15,
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                <p>Language: {movieDetail?.original_language}</p>
              </Typography>
            </CardContent>
            <Box
              sx={{
                "& > legend": { mt: 2 },
                color: "gray",
                textAlign: "center",
              }}
            >
              <Rating
                name="read-only"
                value={movieDetail?.vote_average! / 2}
                precision={0.5}
                max={5}
                sx={{ mb: 5 }}
                readOnly
              />
            </Box>
            <Box
              sx={{
                "& > legend": { mt: 2 },
                color: "gray",
                display: "flex",
                flexWrap: "wrap",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {trailers?.map((video) => (
                <div
                  className={`col-md-${trailers.length === 1 ? 12 : 6} mb-3`}
                >
                  <iframe
                    width="90%"
                    height={trailers.length === 1 ? 320 : 215}
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </Box>
          </CardActionArea>
        </Box>
        <Box>
          <CardMedia
            component="img"
            sx={{ width: 400, height: 600, borderRadius: 10 }}
            image={`http://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`}
            alt={movieDetail?.title || movieDetail?.name}
            className="card_media"
          />
        </Box>
      </Card>
    </div>
  );
};

export { DetailCard };
