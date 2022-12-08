import React from "react";
import Card from "./_child/Card";
import SectionHeader from "./_child/SectionHeader";

import Service from "./_child/Service";
import { servicesDATA } from "../data/sample";

function Services() {
  return (
    <Card>
      <SectionHeader title="Services" />

      <div className="flex flex-row justify-between">
        {servicesDATA.map((service) => (
          <Service key={service.id} data={service} />
        ))}
      </div>
    </Card>
  );
}

export default Services;
