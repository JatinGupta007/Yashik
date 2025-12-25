"use client"


import FinalCTA from "@/components/FinalCTA";
import ServiceDetails from "@/components/ServiceDetails";
import { serviceData } from "@/components/ServiceData";
import React from "react";

export default function Page({params}){
  let  {serviceName}  = React.use(params)
  serviceName = decodeURIComponent(serviceName)

  const serviceDetails = serviceData.find((service) => service.slug.includes(serviceName))
  console.log(serviceDetails)
  console.log(serviceName)

  return (
    <main className="overflow-hidden lg:overflow-visible">
      <ServiceDetails data={serviceDetails} />
      <FinalCTA />
    </main>
  );
}