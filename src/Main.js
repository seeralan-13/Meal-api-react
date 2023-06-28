import axios from 'axios';
import React,{useState, useEffect } from 'react';



 function Main() {
    const [items,setItems]=useState([]);

    useEffect(()=>{
        axios
        .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res)=>{
            //console.log(res.data);
            setItems(res.data.meals);
  
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);


    const itemslist=items.map(({strMeal,strMealThumb,idMeal})=>{
        return(
            <div >
                <div className="card">
                <img src={strMealThumb}  alt="seaFood"/>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <p className="card-text">#{idMeal}</p>
                </div>
                </div>
               
            </div>         
        )
    });
    return <div className="row row-cols-2 row-cols-md-3 g-4">{itemslist}</div>
}


export default Main;