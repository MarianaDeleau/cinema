import { FC, useState } from "react"
import { getMovies } from "../../../api";
import { Item } from "../../../types";

// type Props = {
//     id: number;
//     title: string;
//     vote_count?: number;
// }
const CardMovie: FC = () => {
    
    const [item, setItem] = useState<Item[]>();

    const movies = async () => {
        const response = await getMovies()
        setItem(response)
    }

    if (!item) {
        movies()
    }

    return (
        <div className="container">
            {item?.map((item) => {
                return (
                    <div data-id={item.id}>
                    <div>
                        <img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} title={item.title} />
                    </div>
                    <div>
                        <h3>{item.title}</h3>
                        <h4>{item.vote_average}</h4>
                    </div>
                </div>
                )
            })
       
            }
        </div>
    )
}


export { CardMovie }