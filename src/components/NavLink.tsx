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
    <div className='flex flex-row gap-9'>
      {navLinkTabs.map((tab) => {
        return (
          <div key={tab.name} className='text-sm'>
            {tab.name}
          </div>
        );
      })}
    </div>
  );
};

export default NavLink;
