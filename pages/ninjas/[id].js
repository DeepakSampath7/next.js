export const getStaticPaths  = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const paths = data.map((player)=> {
        return{
            params:{
                id : player.id.toString()
            }
        }
    })

    return {
   paths,
   fallback : false
    }
}

export const getStaticProps  = async(context) => {
    const id = context.params.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    return {
        props : {
            players : data
        }
    }
}

const PlayerDetails = ({players}) => {
    return ( 
        <div>
            <h1>{players.name}</h1>
        </div>
     );
}
 
export default PlayerDetails;