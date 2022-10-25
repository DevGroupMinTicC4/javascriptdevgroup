import React from 'react'
import { MetaData } from './layout/MetaData'
import Producto from './Producto'

export default function Home ({productos}){
    console.log(productos)
    return(
        <div>
            <MetaData title='zapatos'></MetaData>
        
            <section id='productos' className='container mt-5'>
                <div className='row'>
                    <div className='container'>
                        <h1 id='encabezado productos' >Ultimos productos</h1>
                    </div>               
                {
                    productos.map(p=><Producto 
                    key={p.id}
                    img={p.img}
                    precio={p.precio}
                    nombre={p.nombre}
                    />)
                }
                    
                </div>
            </section>
        </div>
    )
}
// export const Home = ({productos}) => {
//   return (
//     <Fragment>
//         <MetaData title='zapatos'></MetaData>
        
//         <section id='productos' className='container mt-5'>
//             <div className='row'>
//             <div className='container'>
//             <h1 id='encabezado productos' >Ultimos productos</h1>
//         </div>
//                 <div className='col-sm-12 col-md-6 col-lg-3 my-3 '>
//                     {
//                         productos.map(p=><Producto 
//                             key={p.id}
//                             img={p.img}
//                             precio={p.precio}
//                             nombre={p.nombre}
//                         />)
//                     }
//                 </div>
//             </div>
//         </section>
//     </Fragment>
//   )
// }
