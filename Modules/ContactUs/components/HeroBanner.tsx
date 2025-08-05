// components/Contact/HeroBanner.tsx
export default function HeroBanner() {
  return (
    <div className="relative flex items-center text-white h-[50vh] md:h-[90vh]">
      <div className="relative z-10 flex min-h-[480px] w-full flex-col justify-center">
        <div className="my-0 mx-auto flex w-full flex-col items-start py-10 px-3 md:px-5">
          <h1
            className="heading--1 md:heading--display"
            style={{ fontSize: "11vw" }}
          >
            Contact us
          </h1>
          <h3 className="mt-2"></h3>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.prismic.io/zero-cms-disco/1d0a69f4-2e2e-4576-b085-1d8f8bb22ff8_1_AboutUs_ZERO_MY24_FinalAZ3I4426.jpg?auto=compress,format")`,
        }}
      />
    </div>
  );
}
