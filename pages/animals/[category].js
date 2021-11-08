import Head from "next/dist/shared/lib/head"

export default function Animals({animals, category}){
    return(
        <>
         <Head>
        <title>{category}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h2>{category}</h2>
        {
            animals.map(animal =>{

                return(
                    <div key= {animal.id}>
                        <li>{animal.content}</li>
                        </div>
                )
            })
        }
        
        </>
    )
}

export async function getServerSideProps(context){

    const { params } = context
    const { category } = params

    const response = await fetch(`http://localhost:3002/animals?category=${category}`)
    const data = await response.json()

    return{
        props:{
            animals:data,
            category
        }
    }
}