import React from "react";

const Cards = ({ data }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 text-start">
            {data.map((item, index) => (
                <a href={item.url ? item.url : "No link available"} className="col text-decoration-none" key={index} target="_blank" rel="noopener noreferrer">
                    <div className="card">
                    <img src={item.featured_media || `https://placehold.co/410x230?text=${item.title}` } className="card-img-top" alt={item.title || "Placeholder image"}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title || "No title available"}</h5>
                        <p className="card-text text-break" style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                            }}>
                            {item.description || item.description_2 || item.panel__block || "No description available"}
                        </p>
                    </div>
                    </div>
                </a>
            ))}
        </div>
    )
}

export default Cards