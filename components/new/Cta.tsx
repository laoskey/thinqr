"use client";
export default function Cta() {
  const onMovetoContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative mt-24 mb-24 h-32 ">
      <div className="w-full h-full flex  justify-around c--cta-c c--cta-c--second">
        <div
          className=" text-black c--cta-c-warpper flex items-center
         "
        >
          <div className="flex items-center flex-row justify-end gap-16 mx-auto ">
            <div className="relative z-10">Lets talk!</div>
            <div
              className="bg-black rounded-full p-2 text-white c--cta-c-warpper-svg "
              onClick={() => onMovetoContact()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[5rem] w-[5rem]"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
