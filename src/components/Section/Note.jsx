import NoteImg from "../../assets/images/note1.png";

const Note = () => {
  return (
    <div className="note-bg relative h-48 xsm:h-48 w-full sm:h-48 md:h-56 lg:h-64 xl:h-72 2xl:h-72">
      {/* <img
        src={NoteImg}
        alt=""
        className="h-48 xsm:h-48 w-full sm:h-48 md:h-56 lg:h-64 xl:h-72 2xl:h-72 object-cover"
      /> */}
      <div className="absolute top-0 bottom-0 flex-col w-[100%] flex justify-center items-center font-spartan">
        <h1 className=" font-bold text-base xsm:text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-white">
          {/* text-5xl  font-bold */}
          תודה על התעניינותך ב-AppSpot
        </h1>
        <p className="w-[80%] text-sm xsm:text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-thin  text-white sm:w-[55%] md:w-[55%] lg:w-[55%] xl:w-[55%] 2xl:w-[55%]  text-center">
          נשמח לשמוע ממך ולדון כיצד נוכל לעזור להגשים את הרעיונות הדיגיטליים
          שלך. להלן הדרכים השונות שבהן תוכל ליצור איתנו קשר.
        </p>
      </div>
    </div>
  );
};

export default Note;
