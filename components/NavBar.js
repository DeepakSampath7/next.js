import Link from 'next/link'
import Image from 'next/image'

const  NavBar= () => {
    return ( 
        <nav>
            <div className="logo"><Image src={'/football.png'} width={100} height={50}/></div>
           <Link href={'/'}><a>Home</a></Link> 
           <Link href={'/about'}><a>About</a></Link>
           <Link href={'/ninjas'}><a>players</a></Link>
        </nav>
     );
}
 
export default NavBar;