import React from 'react';

const navLinkTabs = [
  { name: 'Mua' },
  { name: 'Thuê' },
  { name: 'Bán' },
  { name: 'Quản lý' },
  { name: 'Tài nguyên' },
];

const NavLink = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-5 lg:gap-9'>
      {navLinkTabs.map((tab) => (
        <div
          key={tab.name}
          className='text-xl cursor-pointer hover:text-primaryLight'
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
};

export default NavLink;
