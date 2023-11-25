import type { CollapseProps } from "antd";
import { CaretUpFilled } from "@ant-design/icons";
import { Collapse } from "antd";

import committee_2022_23 from "../data/committee_2022-23.json";
// import committee_2023_24 from "../data/committee_2023-24.json";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <h1 className="text-3xl text-unics-yellow">2023/24 ACADEMIC YEAR</h1>
    ),
    children: (
      <div className="grid grid-cols-5 gap-4">
        <div>01</div>
        <div>01</div>
        <div>01</div>
        <div>01</div>
        <div>01</div>
        <div>01</div>
        <div>01</div>
        <div>01</div>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <h1 className="text-3xl text-unics-yellow">2022/23 ACADEMIC YEAR</h1>
    ),
    children: (
      <div className="grid grid-cols-3 gap-4">
        {committee_2022_23.map(({ name, role, social, img, email }) => (
          <div key={`${name}-committee`}>
            <a href={social}>
              <img className="object-cover w-32 h-32" src={img} alt={name} />
            </a>
            <p>{name}</p>
            <p>{role}</p>
            <p>{email}</p>
          </div>
        ))}
      </div>
    ),
  },
];

function Committee() {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-bold text-red-200 text-3xl">
        THIS IS THE COMMITTEE PAGE...
      </h1>
      <Collapse
        ghost={true}
        expandIcon={({ isActive }) => (
          <CaretUpFilled
            style={{
              fontSize: "250%",
              marginTop: "10px",
              color: "var(--unics-yellow)",
            }}
            rotate={isActive ? 180 : 0}
          />
        )}
        className="w-4/5"
        items={items}
        defaultActiveKey={[1]}
      />
    </div>
  );
}

export default Committee;
