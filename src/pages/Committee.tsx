import type { CollapseProps } from "antd";
import { CaretUpFilled } from "@ant-design/icons";
import { Collapse } from "antd";

import committee_2022_23 from "../data/committee_2022-23.json";
import committee_2023_24 from "../data/committee_2023-24.json";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <h1 className="text-[22px] md:text-3xl lg:text-5xl text-unics-yellow">
        2023/24 ACADEMIC YEAR
      </h1>
    ),
    children: (
      <div className="flex flex-wrap justify-center">
        {committee_2023_24.map(({ name, role, social, img, email }) => (
          <div
            className="flex flex-col items-center gap-y-0.5 p-6 text-xs"
            key={`${name}-committee`}
          >
            <a href={social} className="mb-4">
              <img className="object-cover w-56 h-56" src={img} alt={name} />
            </a>
            <p className="text-unics-white ">{name}</p>
            <p className="text-unics-purple text-bold">{role}</p>
            <a href={`mailto:${email}`}>
              <p className="text-unics-white text-center underline break-words w-56">
                {email}
              </p>
            </a>
          </div>
        ))}
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <h1 className="text-[22px] md:text-3xl lg:text-5xl text-unics-yellow">
        2022/23 ACADEMIC YEAR
      </h1>
    ),
    children: (
      <div className="flex flex-wrap justify-center ">
        {committee_2022_23.map(({ name, role, social, img, email }) => (
          <div
            className="flex flex-col items-center gap-y-0.5 p-6 text-xs"
            key={`${name}-committee`}
          >
            <a href={social} className="mb-4">
              <img className="object-cover w-56 h-56" src={img} alt={name} />
            </a>
            <p className="text-unics-white ">{name}</p>
            <p className="text-unics-purple text-bold">{role}</p>
            <a href={`mailto:${email}`}>
              <p className="text-unics-white text-center underline break-words w-56">
                {email}
              </p>
            </a>
          </div>
        ))}
      </div>
    ),
  },
];

function Committee() {
  return (
    <div className="flex items-center flex-col">
      <Collapse
        ghost={true}
        style={{ fontFamily: "rubik-mono" }}
        expandIcon={({ isActive }) => (
          <CaretUpFilled
            className="mt-8"
            style={{
              fontSize: "400%",
              color: "var(--unics-yellow)",
            }}
            rotate={isActive ? 180 : 0}
          />
        )}
        className="w-[90%]"
        items={items}
        defaultActiveKey={[1]}
      />
    </div>
  );
}

export default Committee;
