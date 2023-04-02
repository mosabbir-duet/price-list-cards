import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Dashboard = () => {
  let studentArray = [
    { id: 1, name: "Alice", physics: 75, chemistry: 80, math: 90 },
    { id: 2, name: "Bob", physics: 85, chemistry: 90, math: 70 },
    { id: 3, name: "Charlie", physics: 60, chemistry: 70, math: 80 },
    { id: 4, name: "David", physics: 95, chemistry: 80, math: 85 },
    { id: 5, name: "Eve", physics: 80, chemistry: 75, math: 95 },
    { id: 6, name: "Frank", physics: 70, chemistry: 85, math: 75 },
    { id: 7, name: "Grace", physics: 90, chemistry: 70, math: 60 },
    { id: 8, name: "Harry", physics: 75, chemistry: 85, math: 70 },
    { id: 9, name: "Ivy", physics: 85, chemistry: 60, math: 80 },
    { id: 10, name: "Jack", physics: 80, chemistry: 95, math: 85 },
    { id: 11, name: "Kate", physics: 70, chemistry: 80, math: 75 },
    { id: 12, name: "Liam", physics: 90, chemistry: 85, math: 60 },
  ];

  return (
    <div>
      <LineChart width={768} height={400} data={studentArray}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="physics"></Line>
        <Line dataKey="math" stroke="#3a2a1d"></Line>
        <Line dataKey="chemistry" stroke="#8884d8"></Line>
      </LineChart>
    </div>
  );
};

export default Dashboard;
