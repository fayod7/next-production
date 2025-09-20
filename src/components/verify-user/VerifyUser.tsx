'use client'
import { dashboard_link } from '@/links'
import { memo, useEffect, useState } from 'react'

const VerifyUser = ({user}: {user:string}) => {
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        console.log(user);
        
        fetch('/api/auth/login', { 
            method: 'POST', 
            headers: {
                'Contnent-Type' : 'application/json'
            }, 
            body: user
        })
        .then((res) => {
            if(!res.ok) {
                throw new Error('error')
            } 
            window.location.href = '/profile'
        })
        .catch(() => {
            setError('Try again')
        })
    
    }, [])
  return (
     <div className='h-screen grid place-items-center'>
        <div className='text-center'>
            <h2 className='text-3xl'>Verificating your data...</h2>
            {
                error && <button onClick={() =>
                     open(`${dashboard_link}`)
                    
                    } className='text-red-500'>{error}</button> // vercel  qoy
            }
        </div>
    </div>
  )
}

export default  memo(VerifyUser)