import { useState } from "react";


const Search = () =>{


    const products = [{

        id:1,
        name:"Product A",
        category:"Books"

    },
{
    id:2,
    name:"Product B",
    category:"Electronics"
    },


    {
        id:3,
        name:"Product C",
        category:"Books"
        },

        {
            id:4,
            name:"Product D",
            category:"Pens"
            },
            {
                id:5,
                name:"Product C",
                category:"Pads"
                }
    
    ];


    const [searchTerm,SetSerachTerm] = useState("");


    const filteredProducts = products.filter((product)=>{

        return product.category.toLowerCase().includes(searchTerm.toLowerCase());
    })


    console.log(filteredProducts)
    
    
    return(
    
    <div>
    
    <input type ="text" value={searchTerm} onChange={(e)=>SetSerachTerm(e.target.value)}/>


   {filteredProducts.length>0 ? (

    filteredProducts.map((product)=>{

        return <li>{product.name}---{product.category}</li>
    })
   ):(<h1>no products available</h1>)}

   



    
    
    
    <div>
    
    
    
    
    </div>
    
    
    
    
    </div>
    
    );
    
    }
    
    
    export default Search;
    
    
    
    
    