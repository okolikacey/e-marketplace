import React from "react";
import Card from "./_child/Card";
import Tender from "./_child/Tender";
import SectionHeader from "./_child/SectionHeader";
import { tendersDATA } from "../data/sample";

function Tenders() {
  return (
    <Card>
      <SectionHeader title="Tenders" />

      {tendersDATA.map((tender) => (
        <Tender
          key={tender.id}
          image={tender.image}
          name={tender.name}
          opportunity={tender.opportunity}
        />
      ))}
    </Card>
  );
}

export default Tenders;
