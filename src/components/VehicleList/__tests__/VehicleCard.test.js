import React from "react";
import { render } from "@testing-library/react";
import VehicleCard from "../vehicleCard";

describe("<VehicleCard /> Tests", () => {
    it("Must load the main component", () => {
        const mockProps = {
            media: ["/images/mock-image.jpg", "/images/mock-image.jpg"],
            name: "mockName",
            price: "£67,000",
            description: "Mock Description",
        };

        const { queryByTestId } = render(
            <VehicleCard
                name={mockProps.name}
                media={mockProps.media}
                price={mockProps.price}
                description={mockProps.description}
            />
        );

        expect(queryByTestId("test-vehicle-card")).not.toBeNull();
        expect(queryByTestId("test-vehicle-card--title")).not.toBeNull();
        expect(queryByTestId("test-vehicle-card--price")).not.toBeNull();
        expect(queryByTestId("test-vehicle-card--description")).not.toBeNull();
    });

    it("Loads the title properly", () => {
        const mockProps = {
            media: ["/images/mock-image.jpg", "/images/mock-image.jpg"],
            name: "mockName",
            price: "£67,000",
            description: "Mock Description",
        };

        const { queryByTestId } = render(
            <VehicleCard
                name={mockProps.name}
                media={mockProps.media}
                price={mockProps.price}
                description={mockProps.description}
            />
        );

        expect(queryByTestId("test-vehicle-card--title")).not.toBeNull();
    });

    it("Loads the price properly", () => {
        const mockProps = {
            media: ["/images/mock-image.jpg", "/images/mock-image.jpg"],
            name: "mockName",
            price: "£67,000",
            description: "Mock Description",
        };

        const { queryByTestId } = render(
            <VehicleCard
                name={mockProps.name}
                media={mockProps.media}
                price={mockProps.price}
                description={mockProps.description}
            />
        );

        expect(queryByTestId("test-vehicle-card--price")).not.toBeNull();
    });

    it("Loads the description properly", () => {
        const mockProps = {
            media: ["/images/mock-image.jpg", "/images/mock-image.jpg"],
            name: "mockName",
            price: "£67,000",
            description: "Mock Description",
        };

        const { queryByTestId } = render(
            <VehicleCard
                name={mockProps.name}
                media={mockProps.media}
                price={mockProps.price}
                description={mockProps.description}
            />
        );

        expect(queryByTestId("test-vehicle-card--description")).not.toBeNull();
    });
});
