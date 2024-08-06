import styled from "styled-components";
import OfferCard from "../Card/OfferCard";

const StyledWrapper = styled.div``;

const CardWrapper = () => {
  return (
    <div className="w-full mx-auto p-4 bg-black py-10">
      <div className="flex flex-col items-center justify-center gap-4 px-3">
        <div className="flex flex-wrap gap-2 justify-center">
          <OfferCard text="רקורד מוכח של מתן פתרונות באיכות גבוהה" />
          <OfferCard text="אספקה בזמן ועמידה בלוחות זמנים" />
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <OfferCard text="מסירות לשביעות רצון הלקוח" />
          <OfferCard text="פתרונות מותאמים אישית לצרכים ייחודיים של הלקוח" />
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <OfferCard text="ידע בטכנולוגיות ובכלים החדשים ביותר" />
          <OfferCard text="גמישות והסתגלות לצרכים המשתנים של הפרויקט" />
        </div>
      </div>
    </div>
  );
};
export default CardWrapper;
