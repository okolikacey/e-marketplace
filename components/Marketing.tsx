import React from "react";
import Card from "./_child/Card";
import SectionHeader from "./_child/SectionHeader";
import MarketingItem from "./_child/MarketingItem";
import { marketingDATA } from "../data/sample";

function Marketing() {
  return (
    <Card>
      <SectionHeader title="Marketing" />

      <div className="flex flex-row justify-between">
        {marketingDATA.map((item) => (
          <MarketingItem key={item.id} data={item} />
        ))}
      </div>
    </Card>
  );
}

export default Marketing;
