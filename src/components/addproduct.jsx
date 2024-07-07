import { useState } from "react"

function AddProduct()
{
    let [title,setTitle]= useState('')
    let [price,setPrice]= useState(0)
    let [description,setDescription]= useState('')
    let [category,setCategory]= useState('')
    let [product,setProduct]=useState('')
    function addproduct(){
            setProduct({title,price,description,category})
        }
    return(
    <div>
        <h1>Enter the product details</h1><br/>
<div style={{backgroundColor:'wheat',display:'flex',border:'solid black 1px',borderRadius:'20px',
   justifyContent:'space-between',width:'70%',marginLeft:'15%'
}}>

<div style={{width:"20%",marginLeft:'20%'}}>
<div style={{display:"flex",gap:'50px',marginLeft:'10%',height:''}}>
<h3>Name:</h3>
</div>
<div style={{display:"flex",gap:'50px',marginLeft:'10%',height:''}}>
<h3>Price:</h3>
</div>
<div style={{display:"flex",gap:'50px',marginLeft:'10%',height:''}}>
<h3>Description:</h3>
</div>
<div style={{display:"flex",gap:'50px',marginLeft:'10%',height:''}}>
<h3>Category:</h3>
</div>
</div>
<div style={{display:'flex',
    flexDirection:'column',marginRight:'20%',width:'38%'}}>
    <input style={{marginTop:'3%',height:'15%'}}></input>
    <input style={{marginTop:'3%',height:'15%'}}></input>
    <input style={{marginTop:'3%',height:'15%'}}></input>
    <input style={{marginTop:'3%',height:'15%'}}></input>
</div>
</div>
<div style={{height:'100px'}}>
    <button style={{height:'60%',width:'20%',marginLeft:'40%',marginTop:'1.5%',backgroundColor:'wheat',color:"blueviolet",border:'solid black 2px',fontSize:'100%',borderRadius:'20%'}}><b>SUBMIT</b></button></div>

</div>
    )
}export default AddProduct;