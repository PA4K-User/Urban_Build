"use client";
import { useState } from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import Image from "next/image";
import Button from "./Button";

import {motion} from "framer-motion"
import { fadeIn } from "@/variants"

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 }},
};

import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill
} from "react-icons/pi"
import Pretitle from "./Pretitle";

const serviceData = [
  {
    name: "construction",
    icon: <PiWallFill/>,
    title: "Construction Services",
    description:
    "We build with precision and innovation, ensuring that every structure is strong, reliable, and built to last. From foundations to finishing touches, our excpertise transforms ideas into reality.",
    servicesList: [
      "residential Builds",
      "Structural Design",
      "Site Prep",
      "Concrete Work",
      "Framing & Roofing",
      "interior Finish",
    ],
    thumbs: [
      {url: "/assets/img/services/thumb-1.jpg"},
      {url: "/assets/img/services/thumb-2.jpg"},
    ],
  },
  {
    name: "renovation",
    icon: <PiPaintRollerFill/>,
    title: "Renovation Services",
    description:
    "Revitalizing spaces with modern designs and high-quality craftsmanship. Whether upgrading a home o remodeling an office, we bring fresh life to every project.",
    servicesList: [
      "Kitchen Remodel",
      "Basement Finish",
      "Flooring",
      "Energy Upgrades",
      "Carpentry",
      "Painting",
    ],
    thumbs: [
      {url: "/assets/img/services/thumb-3.jpg"},
      {url: "/assets/img/services/thumb-4.jpg"},
    ],
  },
  {
    name: "restoration",
    icon: <PiWrenchFill/>,
    title: "Restoration Services",
    description:
    "Bringing damaged or aging structures back to life. We specialize in restoring historical landmarks, fire-damaged buildings, and water-damaged properties with meticulous care.",
    servicesList: [
      "Historic Restore",
      "Water Damage",
      "Fire Repair",
      "Structural Fix",
      "Mold Removal",
      "Roof Restore",
    ],
    thumbs: [
      {url: "/assets/img/services/thumb-4.jpg"},
      {url: "/assets/img/services/thumb-5.jpg"},
    ],
  },
  {
    name: "consulding",
    icon: <PiUserGearFill/>,
    title: "Consulting Services",
    description:
    "Providing expert guidance for construction and renovation projects. From planning and budgeting to compliance and sustainabitiry, our consulting service ensure project success.",
    servicesList: [
      "Project Plans",
      "Costing",
      "Site Management",
      "Permits",
      "Sustainability",
      "Safety",
    ],
    thumbs: [
      {url: "/assets/img/services/thumb-1.jpg"},
      {url: "/assets/img/services/thumb-3.jpg"},
    ],
  },
]

const Services = () => {
  const [activeTab, setActiveTab] = useState('construction');

  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        <motion.div 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0.2}}
          className="text-center max-w-[540px] mx-auto mb-20"
        >
          <Pretitle text="Our Services" center/>
          <h2 className="h2 mb-3">Solution We Provide</h2>
          <p className="mb-11 max-2-[480px] mx-auto">Offering tailored construction solutins, from planning to 
            completion, with a focus on quality and innovation.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0.2}}
        >
          <Tabs 
            defaultValue="construction" 
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col xl:flex-row w-full gap-[30px]"
          >
            <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] w-full h-full rounded-none p-0 bg-transparent xl:w-[345px]">
              {serviceData.map((item) => {
                return (
                  <TabsTrigger 
                    key={item.name} 
                    value={item.name}
                    className="w-full rounded-none h-[100px] flex items-center relative
                    shadow-custom p-0 outline-none"
                  >
                    <div className={`w-[100px] h-[100px] flex items-center justify-center
                    absolute left-0 ${activeTab === item.name ? "bg-primary text-white" : "bg-accent text-primary"}`}>
                      <div className="text-4xl">{item.icon}</div>                    
                    </div>
                    <div className="uppercase font-primary text-base font-semibold
                    tracking-[.6px] w-[100px] ml-16">{item.name}</div>
                  </TabsTrigger>
                )
              })}
            </TabsList>
            <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
              {serviceData.map((item) => (
                <TabsContent key={item.name} value={item.name} className="m-0">
                  <motion.div 
                    variants={fadeInVariant}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    className="flex flex-col md:flex-row gap-[30px]"
                  >
                    <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                      {item.thumbs.map((thumb, index) => (
                        <div key={index} className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]">
                          <Image src={thumb.url} fill alt=""/>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div>
                        <h3 className="h3 mb-6">{item.title}</h3>
                        <p className="mb-10">{item.description}</p>
                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {item.servicesList.map((service, index) => {
                            return (
                              <li key={index} className="flex items-center gap-4">
                                <div className="w-[6px] h-[6px] bg-accent"></div>
                                <div className="capitalize font-medium text-primary">{service}</div>
                              </li>
                            )
                          })}
                        </ul>
                        <Button text="Read more"/>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

export default Services