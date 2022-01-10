import { FC } from "react"
import { useItems } from "../../../hooks/useItems";
import { BasicRating } from "../Rating";



const CardMovie: FC = () => {
    
    const { items } = useItems();  
    
    return (
        <div className="container">
            {items?.results.map((item) => {
                return (
                    <div key={item.id} data-id={item.id}>
                    <div>
                        <img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} title={item.title} />
                    </div>
                    <div>
                        <h3>{item.title}</h3>
                        <h4>{item.vote_average}</h4>
                    </div>
                    <BasicRating />
                </div>
                )
            })
       
            }
        </div>
    )
}


export { CardMovie }