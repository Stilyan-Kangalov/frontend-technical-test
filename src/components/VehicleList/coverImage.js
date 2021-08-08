import React from "react";

let MainImage = ({ media, name }) => {
    return (
        <picture>
            <source media="(min-width: 1000px)" srcSet={media[0].url} />
            <img src={media[1].url} alt={name} style={{ width: "auto" }} />
        </picture>
    );
};

export default MainImage;
