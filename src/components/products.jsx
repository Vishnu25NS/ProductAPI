import { useEffect,useState } from "react";
function Product()
{
    let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
    return(
        <div  style={{
            display:"flex",flexDirection:'column',backgroundImage: 'url("green.jpg")',height:"700px",
            backgroundSize:'cover',
            backgroundPosition:'center' ,width:"98%",padding:"10px"
        ,border:'solid white 2px'}}>
            <h1 style={{textAlign:"center",color:'black'
            }}>Products Management</h1>
        <div style={{backgroundColor:"",position:'relative',
           width:'87%',height:'200%',padding:'20px',marginLeft:'5%',display:'flex',justifyContent:"space-between"
        }}><div style={{backgroundColor:'wheat',borderRadius:'10px',
            width:"30%",height:'85%',padding:"10px",border:"solid grey 5px"
        }}><table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody style={{backgroundColor:'aqua'}}>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td><img src={product.image} alt={product.title} style={{ maxWidth: '100px', maxHeight: '100px' }} /></td>
            </tr>
          ))}
        </tbody>
      </table>
            </div>
           
            </div>
        </div>
    )
}
export default Product;