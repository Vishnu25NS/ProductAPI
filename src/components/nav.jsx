function NavBar()
{
    return(
        <div style={{height:"100px",backgroundColor:'grey',
            padding:'10px',backgroundSize:'cover',display:'flex',
         textEmphasisColor:'Highlight',
         justifyContent:'space-between',
         border:'solid white 2px',width:'98.45%'
        }}><text style={{fontSize:'200%',color:'wheat'}}><i><b>Market Zone</b></i></text>
        <div style={{width:'60%',marginLeft:'50%',display:'flex',gap:'10%'}}>
            <button style={{color:'aqua',height:'50%',width:'20%',
        borderRadius:'20%',marginTop:'8%'
        }}><text style={{color:'blue',
            fontSize:'150%'
        }}><i><a href="http://localhost:3000">Home</a></i></text></button>
        <button style={{color:'aqua',height:'50%',width:'20%',
        borderRadius:'20%',marginTop:'8%'
        }}><text style={{color:'blue',fontSize:'150%'
        }}><i><a href="http://localhost:3000/Products">Products</a></i></text></button>
        <button style={{color:'aqua',height:'50%',width:'20%',
        borderRadius:'20%',marginTop:'8%'
        }}><text style={{color:'blue',
            fontSize:'150%'
        }}><i><a href="http://localhost:3000/add">Add Product</a></i></text></button></div>
        </div>
    
    )
}export default NavBar;