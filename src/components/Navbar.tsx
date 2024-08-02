import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
      <>
            <div className='text-white' >Navbar</div>
            <Image src={"/next.svg"} height={100} width={100} alt='img' />
            <Link href={"/login"}>link</Link>
      </>
    );
}

export default Navbar