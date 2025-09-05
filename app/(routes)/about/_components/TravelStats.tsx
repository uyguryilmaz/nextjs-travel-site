"use client";

import React from "react";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const TravelStats = () => {
  const stats = [
    { label: "Visited Countries", end: 50, suffix: "+" },
    { label: "Happy Clients", end: 1200, suffix: "+" },
    { label: "Completed Tours", end: 300, suffix: "+" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="bg-blue-50 py-16">
      <div className="mx-auto container text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-blue-600 mb-8">
          why choose us ?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Join thousands of travelers around the world and make your journey
          unforgettable with Trendy Travel. Explore unique destinations with us!
        </p>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center"
            >
              <h3 className="text-4xl lg:text-6xl font-bold text-orange-500">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.end}
                    duration={2.75}
                    
                    
                    suffix={stat.suffix}
                    
                  ></CountUp>
                ) : (
                  "0"
                )}
              </h3>
              <p className="text-gray-600 text-lg mt-4">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelStats;
