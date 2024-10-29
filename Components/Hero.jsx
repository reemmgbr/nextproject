import CardSpotlight from "./ui/CardSpotlight";

const Hero = () => {
return (
  <div className="pb-20 pt-36">
  
    <div>
      <CardSpotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <CardSpotlight
        className="h-[80vh] w-[50vw] top-10 left-full"
        fill="purple"
      />
      <CardSpotlight
        className="left-80 top-28 h-[80vh] w-[50vw]"
        fill="blue"
      />
    </div>

   
    <div
      className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
      absolute top-0 left-0 flex items-center justify-center"
    >
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
        bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
    </div>
    <div className="flex justify-center relative my-20 z-10">
      <div className="mx-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center"></div>
<h2 className=" uppercase -tracking-widest text-center text-blue-100 max-w-80 text-xs">   
   Dynamic Web Magic with Next.js
</h2>

    </div>




   
  </div>
);
};

export default Hero;