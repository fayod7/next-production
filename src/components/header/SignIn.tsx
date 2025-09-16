'use client'
import { FC, memo } from 'react';

interface Props{
    handleSignIn: () => void
}

const SignIn:FC<Props> = (props) => {
    const { handleSignIn } = props
  return (
    <button onClick={handleSignIn} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-md shadow-sm font-medium transition">Sign in</button>
  );
};

export default memo(SignIn);