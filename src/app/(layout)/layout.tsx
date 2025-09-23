import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { api_url } from '@/links';
import { cookies } from 'next/headers';

import { memo, ReactNode } from 'react';


const Layout = async({children}: {children: ReactNode}) => {
    const getCookies = await cookies()
  const token = getCookies.get('token')?.value
  
  const res = await fetch(`${api_url}/auth/me`, {
    headers : {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    next: {
      revalidate: 60 * 30
    }
  })
  const data = await res.json()
  console.log(data);
  
  return (
    <div className="Layout">
        <Header data={data?.data?.fname} token={token}/>
        {children}
        <Footer/>
    </div>
  );
};

export default memo(Layout);