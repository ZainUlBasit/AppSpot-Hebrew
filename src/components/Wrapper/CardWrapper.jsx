import styled from "styled-components";
import OfferCard from "../Card/OfferCard";

const StyledWrapper = styled.div``;

const CardWrapper = () => {
  return (
    <div className="w-full mx-auto p-4 bg-black py-10">
      <div className="flex flex-col items-center justify-center gap-4 px-3">
        <div className="flex flex-wrap gap-2 justify-center">
          <OfferCard text="Proven track record of delivering high-quality solutions" />
          <OfferCard text="On-time delivery and meeting deadlines" />
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <OfferCard text="Dedication to customer satisfaction" />
          <OfferCard text="Customized solutions to meet unique client requirements" />
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <OfferCard text="Knowledgeable in the latest technologies and tools" />
          <OfferCard text="Flexible and adaptable to changing project needs" />
        </div>
      </div>
    </div>
  );
};
export default CardWrapper;
