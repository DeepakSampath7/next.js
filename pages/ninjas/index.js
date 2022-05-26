import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/players.module.css'

export const getStaticProps  = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props : {
            players : data
        }
    }
}

const Ninjas = ({players}) => {
    return (     <>
        <Head>
          <title>
            Football players | football
          </title>
        </Head><div>
        <h1>All Players</h1>
        {
            players.map((player)=>{
                return(
                    
                        <Link href={`/ninjas/${player.id}`}>
                        <a className={styles.single}>
                        <h5>{player.name}</h5>
                        </a>
                        </Link>
                       
                    
                )
            })
        }
    </div></> );
}
 
export default Ninjas;