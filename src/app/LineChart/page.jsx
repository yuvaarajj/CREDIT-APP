import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 3, 4, 5.5, 6, 8] }]}
      series={[
        {
          data: [100, 300, 500, 700, 900, 1100],
        },
      ]}
      height={300}
    />
  );
}
