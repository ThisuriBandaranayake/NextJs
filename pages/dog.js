import Head from "next/dist/shared/lib/head"

export default function Dog({dogs}){
    return(
        <>
         <Head>
        <title>Dog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h2>Dogs</h2>
        {
            dogs.map(dog =>{
                return(
                    <div key={dog.id}>
                <li>{dog.content}</li>
                </div>
                )
            })
        }
        
        </>
    )
}

export async function getServerSideProps(){

    const response = await fetch('http://localhost:3002/dogs')
    const data = await response.json()

    return{
        props:{
            dogs:data,
        }
    }
}