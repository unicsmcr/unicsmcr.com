import React, { useState } from 'react';
import { Menu, MenuProps, ConfigProvider } from 'antd';
import "@fontsource/rubik-mono-one";

const items: MenuProps['items'] = [
  {
    label: '/About',
    key: 'about',
  },
  {
    label: '/Events',
    key: 'events',
  },
  {
    label: '/Sponsors',
    key: 'sponsors',
  },
  {
    label: '/Committee',
    key: 'committee',
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState('about');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <ConfigProvider 
      theme={{
        components: { 
          Menu: {
            itemColor: '#F1F1F1',
            horizontalItemSelectedColor: "#9050B0",
            itemHoverColor: '#9050B0',
            fontFamily: 'Rubik Mono One',
            
          },
        },
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img alt='UniCS logo' src='src/assets/logos/logo.png' width={60} height={60} className='mx-20'></img>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className="bg-unics-black"
          
        />
      </div>
    </ConfigProvider>
  );
};

export default Navbar;
