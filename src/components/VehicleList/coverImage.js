import React from "react";

let MainImage = ({ media, name }) => {
    return (
        <div className="image-container">
            <picture>
                <source media="(min-width: 1000px)" srcSet={media[0].url} />
                <img
                    src={media[1].url}
                    alt={name}
                    data-testid="test-main-image"
                    style={{ width: "auto" }}
                />
            </picture>
            <div className="centered-text">Read more</div>
        </div>
    );
};

export default MainImage;
