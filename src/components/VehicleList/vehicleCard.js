import React from "react";
import MainImage from "./coverImage";

let VehicleCard = ({ media, name, price, description }) => {
    return (
        <div className="car-card" data-testid="test-vehicle-card">
            <MainImage media={media} name={name} />
            <div className="main-part">
                {name && (
                    <h1 className="car-title" data-testid="test-card--title">
                        {`Jaguar ${name}`}
                    </h1>
                )}
                {price && (
                    <p className="car-price" data-testid="test-card--price">
                        From {price}
                    </p>
                )}
                {description && (
                    <p
                        className="car-desc"
                        data-testid="test-card--description"
                    >
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default VehicleCard;
