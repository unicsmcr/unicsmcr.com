import type { CollapseProps } from "antd";
import { CaretUpFilled } from "@ant-design/icons";
import { Collapse } from "antd";

import DiscordIcon from "../assets/icons/logo-discord.svg?react";
import LinkedinIcon from "../assets/icons/logo-linkedin.svg?react";
import EmailIcon from "../assets/icons/mail.svg?react";

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
      <div className="flex flex-wrap justify-center gap-8">
        {committee_2023_24.map(({ name, role, social, img, email }) => (
          <div className="flex flex-col justify-between items-center p-6 bg-black bg-opacity-20 rounded-3xl">
            <div
              className="flex flex-col items-center gap-y-0.5"
              key={`${name}-committee`}
            >
              <a href={social} className="mb-4">
                <img
                  className="object-cover w-52 h-52 rounded-3xl"
                  src={img}
                  alt={name}
                />
              </a>
              <p className="text-unics-white text-md text-center w-52">
                {name}
              </p>
              <p className="text-unics-purple text-bold text-md text-center w-52">
                {role}
              </p>
            </div>

            <div className="flex gap-8 mt-4">
              <a href={`mailto:${email}`}>
                <EmailIcon className="fill-unics-white w-10 h-10" />
              </a>
              <a href={""}>
                <DiscordIcon className="fill-unics-white w-10 h-10" />
              </a>
              <a href={social}>
                <LinkedinIcon className="fill-unics-white w-10 h-10" />
              </a>
            </div>
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
      <div className="flex flex-wrap justify-center gap-8">
        {committee_2022_23.map(({ name, role, social, img, email }) => (
          <div className="flex flex-col justify-between items-center p-6 bg-black bg-opacity-20 rounded-3xl">
            <div
              className="flex flex-col items-center gap-y-0.5"
              key={`${name}-committee`}
            >
              <a href={social} className="mb-4">
                <img
                  className="object-cover w-52 h-52 rounded-3xl"
                  src={img}
                  alt={name}
                />
              </a>
              <p className="text-unics-white text-md text-center w-52">
                {name}
              </p>
              <p className="text-unics-purple text-bold text-md text-center w-52">
                {role}
              </p>
            </div>

            <div className="flex gap-8 mt-4">
              <a href={`mailto:${email}`}>
                <EmailIcon className="fill-unics-white w-10 h-10" />
              </a>
              <a href={""}>
                <DiscordIcon className="fill-unics-white w-10 h-10" />
              </a>
              <a href={social}>
                <LinkedinIcon className="fill-unics-white w-10 h-10" />
              </a>
            </div>
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
