

import {
  CardIcon1,
  CardIcon2,
  CardIcon3,
  TypeIcon1,
  TypeIcon2,
  TypeIcon3,
  VideoIcon1,
  VideoIcon2,
  VideoIcon3,
} from "@/utils/svgicons";
import ProductDesc from "@/components/ProductDesc";
import img1 from "@/assets/images/cardimg1.png";
import img2 from "@/assets/images/cardimg2.png";
import img3 from "@/assets/images/cardimg3.png";
import Contact from "@/components/Contact";
import VideoPlayer from "@/components/VideoPlayer";

const OverviewData = [
  {
    id: "1",
    title: "Convert Your Text And Image to Live Videos",
    description:
      "Creating over 500 unique text and photo-based avatar animations to bring your digital persona to life with vibrant, dynamic visuals.",
    imgSrc: img1,
    buttonLink: "#",
    icon1: <CardIcon1 />,
    icon2: <TypeIcon1 />,
  },
  {
    id: "2",
    title: "Convert Your Text And Image to Live Videos",
    description:
      "Creating over 500 unique text and photo-based avatar animations to bring your digital persona to life with vibrant, dynamic visuals.",
    imgSrc: img2,
    buttonLink: "#",
    icon1: <CardIcon2 />,
    icon2: <TypeIcon2 />,
  },
  {
    id: "3",
    title: "Convert Your Text And Image to Live Videos",
    description:
      "Creating over 500 unique text and photo-based avatar animations to bring your digital persona to life with vibrant, dynamic visuals.",
    imgSrc: img3,
    buttonLink: "#",
    icon1: <CardIcon3 />,
    icon2: <TypeIcon3 />,
  },
];
export default function Home() {

  return (
    <main className="container">
      <div className="pt-[40px] md:pt-[80px] text-center">
        <h1 className="text-black text-[30px] md:text-[66px] font-[800] ">
          Effortless Video Production: <br />
          <span className="text-[#e56f20]">
            AI-Driven, Instant, and Multilingual{" "}
          </span>
        </h1>
        <h3 className="mt-[34px] font-[600] text-[#00000080] max-w-[540px] mx-auto ">
          Instantly Convert Videos into Multiple Languages with Just One Click,
          Expanding Your Global Reach
        </h3>
        <button className="button mt-[40px]">Free Trial</button>
      </div>
      <div>
        <div className="relative pt-[50px]">
          <div className="video-frame">
          <VideoPlayer url="/assets/homevideo.mp4" />
          </div>
          <div className="flex items-center bg-white gap-4 rounded-lg pr-5 absolute top-[25%] translate-y-[-25%] left-[50px] ">
            <VideoIcon1 />
            <h3 className="text-[#202C2F]">Text And Image To Video</h3>
          </div>
          <div className="flex items-center bg-white gap-4 rounded-lg pr-5 absolute bottom-[30%] left-[100px] ">
            <VideoIcon2 />
            <h3 className="text-[#202C2F]">Text And Image To Video</h3>
          </div>
          <div className="flex items-center bg-white gap-4 rounded-lg pr-5 absolute top-[50%] translate-y-[-50%]  right-[30px] ">
            <VideoIcon3 />
            <h3 className="text-[#202C2F]">Text And Image To Video</h3>
          </div>
        </div>
      </div>
      <section>
        {OverviewData.map((item) => (
          <ProductDesc
            key={item.id}
            title={item.title}
            description={item.description}
            imgSrc={item.imgSrc}
            icon1={item.icon1}
            icon2={item.icon2}
            buttonLink={item.buttonLink}
          />
        ))}
      </section>
      <Contact />
    </main>
  );
}
