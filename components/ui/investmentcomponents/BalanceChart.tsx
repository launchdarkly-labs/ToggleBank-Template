import React, { useContext } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  //   Tooltip,
  //   Legend,
  ResponsiveContainer,
} from "recharts";
import { balanceChartTierStatusData } from "./BalanceChartData";


const BalanceChart = () => {

  const showCloudMigrationTwoStagesLDFlag = true;
  const showPatchCloudMigrationLDFlag = true;
  const userTierStatus = "gold"
  let renderedData, renderTickFormatter; 

  if (showCloudMigrationTwoStagesLDFlag && showPatchCloudMigrationLDFlag){
    renderedData = balanceChartTierStatusData[userTierStatus]?.dummyData;
    renderTickFormatter = (value:number) => `$${value / 1000}.0K`
  } else if(showCloudMigrationTwoStagesLDFlag && !showPatchCloudMigrationLDFlag){
    renderedData =  balanceChartTierStatusData[userTierStatus]?.noData;
    renderTickFormatter = () => `$${0 / 1000}`
  } else {
    renderedData = balanceChartTierStatusData[userTierStatus]?.dummyData;
    renderTickFormatter = (value:number) => `$${value / 1000}.0K`
  }

  const renderedHorizontalPoints = showCloudMigrationTwoStagesLDFlag ? [5, 127, 250, 373] : [];
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={"200px"} minWidth={"100%"}>
      <LineChart
        width={500}
        height={300}
        data={renderedData}
        margin={{
          top: 0,
          right: 20,
          left: 10,
          bottom: 0,
        }}
      >
        <CartesianGrid
          strokeDasharray="4"
          vertical={false}
          horizontalPoints={renderedHorizontalPoints}
        />
        <XAxis dataKey="currentBalance" hide />
        <YAxis orientation="right" tickFormatter={renderTickFormatter } />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Line type="monotone" dataKey="currentBalance" stroke="#405BFF" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BalanceChart;
