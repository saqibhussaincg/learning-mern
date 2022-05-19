import React, { useState } from 'react'

function AddProduct() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');

    const addProduct = async () => {
        const userId = JSON.parse(localStorage.getItem('user'))._id;

        let result = fetch('http://localhost:5000/add-product', {
            method: 'post',
            body:JSON.stringify({name, price, category, userId, company}),
            headers:{
                "Content-Type" : "application/json"
            }
        });

        result = await result.json();
        console.log(result);
        // console.log(userId.name);
    }

  return (
    <div className='product'>
        <h1>Add Product</h1>

        <input type="text" placeholder='Enter Product Name' className='inputBox' onChange={(e) => {setName(e.target.value)}} value={name} />

        <input type="text" placeholder='Enter Product Price' className='inputBox' onChange={(e) => {setPrice(e.target.value)}} value={price}  />

        <input type="text" placeholder='Enter Product Category' className='inputBox' onChange={(e) => {setCategory(e.target.value)}} value={category} />

        <input type="text" placeholder='Enter Product Company' className='inputBox' onChange={(e) => {setCompany(e.target.value)}} value={company} />

        <button className='appButton' onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProduct;