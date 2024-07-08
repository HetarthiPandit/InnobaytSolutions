import styled from 'styled-components';

const CarouselLayoutContainer = styled.div`
    .slick-track {
        display: flex;
        align-items: stretch;
    }

    .slick-slide {
        display: flex;
        align-self: stretch;
        height: unset;

        > div {
            display: flex;
            align-self: stretch;
            width: 100%;
        }
    }
`;

export default CarouselLayoutContainer;