import React from "react";
import MainImage from "./coverImage";
import Modal from "./Modal";
import useModal from "./useModal";

let VehicleCard = ({
    media,
    name,
    price,
    description,
    model,
    bodystyles,
    drivetrain,
    seats,
    emissions,
}) => {
    const { toggle, visible } = useModal();

    return (
        <div className="car-card" data-testid="test-vehicle-card">
            <MainImage media={media} name={name} toggle={toggle} />
            <div className="main-part">
                {name && (
                    <h1
                        className="car-title"
                        data-testid="test-vehicle-card--title"
                    >
                        {`Jaguar ${name}`}
                    </h1>
                )}
                {price && (
                    <p
                        className="car-price"
                        data-testid="test-vehicle-card--price"
                    >
                        From {price}
                    </p>
                )}
                {description && (
                    <p
                        className="car-desc"
                        data-testid="test-vehicle-card--description"
                    >
                        {description}
                    </p>
                )}
            </div>
            <>
                <Modal
                    visible={visible}
                    toggle={toggle}
                    name={name}
                    price={price}
                    model={model}
                    bodystyles={bodystyles}
                    drivetrain={drivetrain}
                    seats={seats}
                    emissions={emissions}
                />
            </>
        </div>
    );
};

export default VehicleCard;
