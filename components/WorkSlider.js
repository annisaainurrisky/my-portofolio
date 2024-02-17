// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "TukangKU",
          path: "/tukangku-project.png",
          text: " An e-commerce website that offers a range of services, including AC services, cleaning, plumbing, home repairs and CCTV installation",
          link: "https://tukangku-annisa-ainur-riskys-projects.vercel.app/",
        },
        {
          title: "Pokemon Dash",
          path: "/pokemon.png",
          text: "A Pokemon Catch app, offering a broad collection of Pokemon species with an intuitive and visually appealing UI/UX",
          link: "https://pokemon-app-eight-lac.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "LibraLink",
          path: "/libraryapp.png",
          text: "An innovative library application, delivers library of books enriched with detailed information",
          link: "https://library-app-smoky.vercel.app/",
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

// next image
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[130px] md:h-[240px] xl:h-[320px]">
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}>
                    <div className="flex items-center justify-center relative overflow-hidden group rounded-md">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-700">
                        {/* title */}
                        <div className="w-full absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 px-10">
                          <div className="flex flex-col text-center justify-center mx-auto items-center text-white gap-2">
                            {/* title part 1 */}
                            <div className="delay-100 text-3xl font-semibold hidden xl:flex">
                              {image.title}
                            </div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 font-light hidden xl:flex">
                              {image.text}
                            </div>
                            {/* icon */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 cursor-pointer">
                              <a
                                href={image.link}
                                className="w-auto h-auto p-1 md:p-2 rounded-lg shadow-lg bg-accent hover:bg-orange-500 flex flex-row items-center gap-1">
                                <div className="text-[9px] xl:text-sm">
                                  Live Project
                                </div>
                                <BsArrowRight className="text-[10px] xl:text-sm" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
