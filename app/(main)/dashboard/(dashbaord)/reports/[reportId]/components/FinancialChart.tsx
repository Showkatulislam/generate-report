import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data01 = [
  { x: 2021, y: 1, z: 20 },
  { x: 2022, y: 0, z: 26 },
  { x: 2023, y: 1, z: 40 },
  { x: 2024, y: 0, z: 28 },
  { x: 2025, y: 1, z: 50 },
];
const data02 = [
  { x: 2021, y: 1, z: 20 },
  { x: 2022, y: 0, z: 50 },
  { x: 2023, y: 1, z: 40 },
  { x: 2024, y: 1, z: 28 },
  { x: 2025, y: 0, z: 50 },
];

const FinancialChart = () => {
  return (
    <div className="border p-3">
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis
            domain={[2020, 2030]}
            type="number"
            dataKey="x"
            name="stature"
            unit="year"
          />
          <YAxis
            range={[0, 1]}
            domain={[0, 1]}
            yAxisId="left"
            type="number"
            dataKey="y"
            name="weight"
          />
          <YAxis
            yAxisId="right"
            type="number"
            dataKey="y"
            range={[0, 100]}
            domain={[0, 100]}
            name="weight"
            unit="%"
            orientation="right"
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter yAxisId="left" name="A school" data={data01} fill="#000" />
          <Scatter
            yAxisId="right"
            name="A school"
            data={data02}
            fill="#82ca9d"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinancialChart;
