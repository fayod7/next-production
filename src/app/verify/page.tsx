import VerifyUser from '@/components/verify-user/VerifyUser';
import React from 'react'

const Verify = async ({searchParams}: {searchParams: Promise<{q: string}>}) => {
    const {q} = await searchParams
    const user = atob(q);
    
  return (
   <>
   <VerifyUser user={user}/>
   </>
  )
}

export default Verify