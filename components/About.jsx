import Image from "next/image"
import Pretitle from "./Pretitle"
import Button from "./Button"

const About = () => {
  return (
    <div className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          <div className="flex-1">
            <div className="max-w-[540px]">
              <Pretitle text="About us"/>
              <h2>
                Focused On Excellence In Every Project
              </h2>
              <p>
                Our unweavering commitment to excellence dirves every project we 
                undertake. From concept to completion, we meticulously craft
                solutions that embody quality, precision and innovation.
              </p>
              <div className="w-max flex flex-col text-right mb-10">
                <Image
                 src="/assets/img/about/signature.svg"
                 width={154}
                 height={38}
                 alt=""
                 />
                 <p>Company CEO</p>
              </div>
              <Button text="Contact us"/>
            </div>
          </div>
          <div className="flex-1 xl:flex xl:justify-center">
            <div className="xl:w-[444px] xl:h-[493px] relative">
              <div className="hidden xl:flex w-[444px] h-[493px] bg-accent absolute
              -top-4 -left-4 -z-10"></div>
              <Image
                src="/assets/img/about/img.jpg"
                width={444}
                height={493}
                alt="" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About