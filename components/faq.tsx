"use client"

import { useState } from "react";
import saas from "@/public/saas.jpg";
import { Button } from "./ui/button";
import Image from 'next/image';
import { ChevronDown, ChevronUp } from "lucide-react";


export default function Faq() {
  const [tabExpand, setTabExpand] = useState(Array(7).fill(false)); // Initialize state for all tabs


  const toggleTab = (index: number) => {
    const updatedTabs = [...tabExpand];
    updatedTabs[index] = !updatedTabs[index];
    setTabExpand(updatedTabs);
  };

  return (
    <div id="Faq" className="flex flex-col gap-y-10 sm:gap-y-2 md:flex-row items-center md:items-start space-y-6 lg:space-y-2 justify-evenly my-5">
      <div className="flex flex-col  w-11/12 md:w-2/5 space-y-4">
        <div className="flex items-center space-x-2 px-4 py-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <p className="text-purple-500 font-semibold">FAQ</p>
        </div>
        {[
          {
            question: "How can LabridTech expand my business?",
            answer:
              "LabridTech is your one-stop shop for unlocking growth through technology. We offer strategic guidance to identify opportunities, custom software development to streamline processes, and cutting-edge AI solutions to gain valuable insights and automate tasks. With LabridTech, you'll make smarter decisions, improve efficiency, and achieve explosive results."
          },
          {
            question: "I'm interested in improving my business with technology, but I'm not sure where to start.",
            answer:
              "Need tech help? We're here for you! Labridtech offers expert consultations and workshops to help you pinpoint your tech needs and explore the best solutions. From initial brainstorming to final implementation, we'll guide you every step of the way. Book a free consultation today!"
          },
          {
            question: "How can latest technology help my business?",
            answer:
              "Technology is the game-changer in modern business. By embracing technology, companies can optimize their processes, boost efficiency, and uncover valuable data-driven insights. This enables them to make informed decisions, anticipate customer preferences, and adapt to evolving market trends. Conversely, businesses that neglect technology adoption may face operational bottlenecks, lack crucial customer insights, and miss out on significant growth opportunities."
          },
          {
            question: "What is the difference in LabridTech than other companies?",
            answer:
              "We're committed to driving business growth. Our comprehensive approach combines state-of-the-art technology solutions with expert consulting to deliver innovative and effective results. We align our strategies with your business objectives and guarantee measurable outcomes that propel your business forward."
          },
          {
            question: "How much does your software development services cost?",
            answer:
              "The cost of our services varies depending on the complexity and scope of the project. We provide customized quotes based on your specific requirements."
          },
          {
            question: "What happens after the project is completed?",
            answer:
              "We offer ongoing maintenance and support to ensure your software continues to function optimally. This includes bug fixes, updates, and enhancements as needed. You can also opt for additional support packages to meet your specific needs."
          },
          {
            question: "Can you work with my existing team?",
            answer:
              "Absolutely. We can collaborate with your existing team to seamlessly integrate our services into your development process. Whether it's providing technical expertise, additional resources, or project management, we can work together to achieve your goals."
          }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-start space-x-2 rounded-3xl space-y-2 p-4 bg-black">
            <div className="flex w-full justify-between">
              <h6 className="text-white font-semibold">{item.question}</h6>
              <button
                className="h-8 w-8 rounded-full hover:bg-cyan-200"
                onClick={() => toggleTab(index)}

              >
                {tabExpand[index] ? (
                  <ChevronUp className="!h-8 !w-8 rounded-full hover:!fill-cyan-200" />
                ) : (
                  <ChevronDown className="!h-8 !w-8 rounded-full hover:!fill-cyan-200" />
                )}
              </button>
            </div>
            {tabExpand[index] && (
              <p className="text-white font-semibold">
                {item.answer}
              </p>
            )}

          </div>
        ))}
      </div>
      <div className="flex flex-col w-full sm:w-1/3  justify-center items-center  ">
      <h2 className="__h2 text-center text-4xl font-anton-regular tracking-wider text-white max-lg:mx-auto max-lg:max-w-[500px] max-lg:text-center">
             <span className="text-purple-500">FREQUANTLY</span> ASK
             <br/>
            <span className="text-purple-500">QUESTIONS </span> 
          </h2>
          <p className="mt-6 text-center font-light text-white/50 md:mt-8 md:text-lg">
            Our team of experts has a proven track record of delivering
            exceptional results for our clients.
          </p>
      </div>
    </div>
  );
}