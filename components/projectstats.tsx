"use client";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface StatCardProps {
  value: number;
  label: string;
  gradient: string;
  suffix?: string;
  entered: boolean;
}

export default function ProjectStats() {
  const [entered, setEntered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setEntered(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="container p-16 mx-auto">
      <div className="relative isolate grid items-center max-xs:gap-y-3 lg:grid-cols-[1fr,1.5fr] lg:gap-x-16 xl:gap-x-32">
        <div className="relative isolate">
          <h2 className="__h2 text-center text-4xl font-anton-regular tracking-wider text-white max-lg:mx-auto max-lg:max-w-[500px] max-lg:text-center">
            Proven <span className="text-purple-500">Expertise</span> and{" "}
            <span className="text-purple-500">Exceptional </span> Results
          </h2>
          <p className="mt-6 text-center font-light text-white/50 md:mt-8 md:text-lg">
            Our team of experts has a proven track record of delivering
            exceptional results for our clients.
          </p>
        </div>
        <div className="relative isolate grid overflow-hidden rounded-3xl text-center lg:grid-cols-2">
          <StatCard
            value={5}
            label="Years of Experience"
            gradient="from-accent to-accent/100"
            suffix="+"
            entered={entered}
          />
          <StatCard
            value={97}
            label="Success Rate"
            gradient="from-purple-100 to-purple-500"
            suffix="%"
            entered={entered}
          />
          <StatCard
            value={1000}
            label="Hours of Work"
            gradient="from-purple-100 to-purple-500"
            entered={entered}
          />
          <StatCard
            value={47}
            label="Completed Projects"
            gradient="from-accent to-accent/100"
            entered={entered}
          />
        </div>
      </div>
    </div>
  );
}

const StatCard = ({ value, label, gradient, suffix = "", entered }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (entered) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // Update every 16ms (60fps)
      const timer = setInterval(() => {
        start += increment;
        if (start > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [entered, value]);

  return (
    <div className={`flex flex-col bg-gradient-to-b ${gradient} justify-center py-16 relative isolate overflow-hidden max-xs:__gradient_2 xs:__gradient_1`}>
      <h3 className="font-anton-regular text-4xl tracking-wider text-white xs:text-3xl md:text-4xl">
        {entered ? `${count}${suffix}` : `0${suffix}`}
      </h3>
      <p className="text-white">{label}</p>
    </div>
  );
};