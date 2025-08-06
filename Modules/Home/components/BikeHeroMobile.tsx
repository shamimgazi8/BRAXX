import { bikeHeroData } from "@/Data/BikeHeroData";
import ColorSelector from "@/Modules/@common/ColorSelector";

const BikeHeroMobile = () => {
  const { specs } = bikeHeroData;
  return (
    <>
      <div className=" flex justify-center items-center pointer-events-auto mb-5 rotate-90">
        <ColorSelector />
      </div>
      <div className="flex  gap-5 justify-center items-center mb-3">
        <div className="flex items-start justify-between">
          <div className="bike-hero-stagger">
            <p className=" mb-[4px] text-white opacity-50">
              {specs.speed.label}
            </p>
            <span className="heading--6 text-white">{specs.speed.value}</span>
          </div>
        </div>
        <div className="bike-hero-stagger">
          <p className=" mb-[4px] text-white opacity-50">{specs.range.label}</p>
          <span className="heading--6 text-white">{specs.range.value}</span>
        </div>
        <div className="bike-hero-stagger">
          <p className=" mb-[4px] text-white opacity-50">
            {specs.torque.label}
          </p>
          <span className="heading--6 text-white">{specs.torque.value}</span>
        </div>
        <div className="flex items-end justify-between">
          <div className="bike-hero-stagger">
            <p className=" mb-[4px] text-white opacity-50">
              {specs.charge.label}
            </p>
            <span className="heading--6 text-white">{specs.charge.value}</span>
          </div>
        </div>
      </div>
      <div>
        <div className=" h-[350px]">
          <h1 className="opacity-20 text-[250px] ">{bikeHeroData.title}</h1>
        </div>
        <div className=" absolute top-[52%] flex h-0 items-center gap-8 md:ml-4 md:gap-12">
          <span className="text-[20px]">{bikeHeroData.subtitle.name}</span>
          <span className="text-[20px]">{bikeHeroData.subtitle.type}</span>
        </div>
      </div>

      <h1 className=" text-[40px]">BRAXX O3</h1>
      <h1 className=" text-[40px]">BRAXX O3</h1>
      <h1 className=" text-[40px]">BRAXX O3</h1>
      <h1 className=" text-[40px]">BRAXX O3</h1>
      <h1 className=" text-[40px]">BRAXX O3</h1>
      <h1 className=" text-[40px]">BRAXX O3</h1>
      <h1 className=" text-[40px]">BRAXX O3</h1>
    </>
  );
};
export default BikeHeroMobile;
