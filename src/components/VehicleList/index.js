import React from "react";
import useData from "./useData";
import VehicleCard from "./vehicleCard";
import "./style.scss";

export default function VehicleList() {
    // eslint-disable-next-line no-unused-vars
    const [loading, error, vehicles] = useData();

    if (loading) {
        return <div data-testid="loading">Loading</div>;
    }

    if (error) {
        return <div data-testid="error">{error}</div>;
    }

    if (vehicles) {
        console.log(vehicles);
    }

    return (
        <div data-testid="results" id="vehicle-list">
            <div className="row">
                {vehicles
                    .filter((car) => car.price)
                    .map((car) => (
                        <div key={`Jaguar-${car.id}`} className="column">
                            <VehicleCard
                                media={car.media}
                                name={car.id}
                                price={car.price}
                                description={car.description}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}
