import React from "react";
import { render } from "@testing-library/react";
import MainImage from "../coverImage";

describe("<MainImage /> Tests", () => {
    it("It should load image from the API", () => {
        const mockProps = {
            name: "mockName",
            media: ["/images/mock-image.jpg", "/images/mock-image.jpg"],
        };

        const { queryByTestId } = render(
            <MainImage name={mockProps.name} media={mockProps.media} />
        );

        expect(queryByTestId("test-main-image")).not.toBeNull();
    });
});
