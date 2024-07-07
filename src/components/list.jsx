import { useEffect,useState } from "react";
function ProductList(){
let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div style={{backgroundColor:"lightgreen",border:'solid black 2px',width:'100%'}}>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
            <td>{product.id}</td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td><img src={product.image} alt={product.title} style={{ maxWidth: '100px', maxHeight: '100px' }} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;