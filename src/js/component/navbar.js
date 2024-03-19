import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logoStarWars from "../../img/star-wars-logo.png.png";


export const Navbar = () => {
    const { store, actions } = useContext(Context);

    // Function to handle deleting a favorite
    const handleDeleteFavorite = (index) => {
        // Call the deleteFavorite action from the context with the index of the favorite to delete
        actions.deleteFavorite(index);
    };

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">
                <img src={logoStarWars}  width="50" height="30" alt="Icono" />
                </a>
                <div className="ms-auto">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Favoritos ( {store.myFavs.length} )
                    </button>
                </div>
            </nav>

            {/* Modal for displaying favorites */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Favoritos</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                {/* Map through each favorite item in the store and render it */}
                                {store.myFavs.map((item, index) => (
                                    <li key={item.uid}>
                                        {/* Render the favorite item */}
                                        {item}
                                        {/* Button to delete the favorite */}
                                        <button onClick={() => handleDeleteFavorite(index)}>X</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};