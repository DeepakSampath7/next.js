import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className='not-found'>
            <h1>oooooops....</h1>
            <h1>page not found</h1>
            <p>go back to <Link href={'/'}><a>HomePage</a></Link></p>
        </div>
     );
}
 
export default NotFound;