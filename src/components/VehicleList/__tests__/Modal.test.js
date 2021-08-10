import React from "react";
import { render } from "@testing-library/react";
import Modal from "../Modal";

describe("<Modal /> Tests", () => {
    it("Must not load the modal component", () => {
        const mockProps = {
            price: "£45000",
            model: "k17",
            bodystyles: "saloon",
            drivetrain: "AWD,RWD",
            seats: "5",
            emissions: "CO2 Emissions 99 g/km",
        };

        const { queryByTestId } = render(
            <Modal
                price={mockProps.price}
                model={mockProps.model}
                bodystyles={mockProps.name}
                drivetrain={mockProps.drivetrain}
                seats={mockProps.seats}
                emissions={mockProps.emissions}
            />
        );

        expect(queryByTestId("test-modal--model")).toBeNull();
        expect(queryByTestId("test-modal--price")).toBeNull();
        expect(queryByTestId("test-modal--bodystyles")).toBeNull();
        expect(queryByTestId("test-modal--drivetrain")).toBeNull();
        expect(queryByTestId("test-modal--seats")).toBeNull();
        expect(queryByTestId("test-modal--emissions")).toBeNull();
    });

    it("Must not load the model properly", () => {
        const mockProps = {
            price: "£45000",
            model: "k17",
            bodystyles: "saloon",
            drivetrain: "AWD,RWD",
            seats: "5",
            emissions: "CO2 Emissions 99 g/km",
        };

        const { queryByTestId } = render(
            <Modal
                price={mockProps.price}
                model={mockProps.model}
                bodystyles={mockProps.name}
                drivetrain={mockProps.drivetrain}
                seats={mockProps.seats}
                emissions={mockProps.emissions}
            />
        );

        expect(queryByTestId("test-modal--model")).toBeNull();
    });

    it("Must not load the price properly", () => {
        const mockProps = {
            price: "£45000",
            model: "k17",
            bodystyles: "saloon",
            drivetrain: "AWD,RWD",
            seats: "5",
            emissions: "CO2 Emissions 99 g/km",
        };

        const { queryByTestId } = render(
            <Modal
                price={mockProps.price}
                model={mockProps.model}
                bodystyles={mockProps.name}
                drivetrain={mockProps.drivetrain}
                seats={mockProps.seats}
                emissions={mockProps.emissions}
            />
        );

        expect(queryByTestId("test-modal--price")).toBeNull();
    });

    it("Must not load the bodystyles properly", () => {
        const mockProps = {
            price: "£45000",
            model: "k17",
            bodystyles: "saloon",
            drivetrain: "AWD,RWD",
            seats: "5",
            emissions: "CO2 Emissions 99 g/km",
        };

        const { queryByTestId } = render(
            <Modal
                price={mockProps.price}
                model={mockProps.model}
                bodystyles={mockProps.name}
                drivetrain={mockProps.drivetrain}
                seats={mockProps.seats}
                emissions={mockProps.emissions}
            />
        );

        expect(queryByTestId("test-modal--bodystyles")).toBeNull();
    });

    it("Must not load the drivetrain properly", () => {
        const mockProps = {
            price: "£45000",
            model: "k17",
            bodystyles: "saloon",
            drivetrain: "AWD,RWD",
            seats: "5",
            emissions: "CO2 Emissions 99 g/km",
        };

        const { queryByTestId } = render(
            <Modal
                price={mockProps.price}
                model={mockProps.model}
                bodystyles={mockProps.name}
                drivetrain={mockProps.drivetrain}
                seats={mockProps.seats}
                emissions={mockProps.emissions}
            />
        );

        expect(queryByTestId("test-modal--drivetrain")).toBeNull();
    });

    it("Must not load the seats properly", () => {
        const mockProps = {
            price: "£45000",
            model: "k17",
            bodystyles: "saloon",
            drivetrain: "AWD,RWD",
            seats: "5",
            emissions: "CO2 Emissions 99 g/km",
        };

        const { queryByTestId } = render(
            <Modal
                price={mockProps.price}
                model={mockProps.model}
                bodystyles={mockProps.name}
                drivetrain={mockProps.drivetrain}
                seats={mockProps.seats}
                emissions={mockProps.emissions}
            />
        );

        expect(queryByTestId("test-modal--seats")).toBeNull();
    });

    it("Must not load the emissions properly", () => {
        const mockProps = {
            price: "£45000",
            model: "k17",
            bodystyles: "saloon",
            drivetrain: "AWD,RWD",
            seats: "5",
            emissions: "CO2 Emissions 99 g/km",
        };

        const { queryByTestId } = render(
            <Modal
                price={mockProps.price}
                model={mockProps.model}
                bodystyles={mockProps.name}
                drivetrain={mockProps.drivetrain}
                seats={mockProps.seats}
                emissions={mockProps.emissions}
            />
        );

        expect(queryByTestId("test-modal--emissions")).toBeNull();
    });
});
