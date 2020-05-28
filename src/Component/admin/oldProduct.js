import React, { Component } from 'react';
import axios from "axios"
import qs from "querystring"
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
class OldProduct extends Component {

    constructor(props){
        super(props)
        this.state={
errId:{border:"0.5px solid #E4E7ED" },
errColor:{border:"0.5px solid #E4E7ED" },
errQty:{boder:"0.5px solid #E4E7ED" },
ErrID:'',
ErrColor:'',
ErrQty:'',
Id:0,
Color:0,
Qty:0,
Product:[]

        }
        this.handleColor=this.handleColor.bind(this);
        this.handleId=this.handleId.bind(this);
        this.handleQty=this.handleQty.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

handleId(){
    if(this.refs.id===null||this.refs.id===undefined||this.refs.id===''){
        this.setState({
            errId:{boder:'1px solid red'},
            Id:0,
            ErrID:"Vui lòng nhập id"
        })
    }
    else
    this.setState({
        errId:{boder:'0.5px solid #E4E7ED'},
        Id:1,
        ErrID:''
    })

}


handleSubmit=async e =>{
e.preventDefault();
if(this.state.Id===1&&this.state.Qty===1&&this.state.Color===1){
    var flat=0;
for(var i=0;i<this.state.Product.length;i++){
    if(this.state.Product[i].idProduct===this.refs.id){
        flat=1;
        break;
    }
}
var order={
 idProduct:this.refs.id,
 color:capitalizeFirstLetter(this.refs.color),
 quantity:this.refs.qty


}
axios.post('http://localhost:8080/newOrder',  qs.stringify(order), {
				  'Content-Type': 'application/json'
				}
			  )
			  .then(function (response) {
				  console.log(order)
				alert("thêm thành công")
				
			  })
			  .catch(function (error) {
				console.log(error);
			  });
			
			
			

        }
        else alert("chưa điền đủ thông tin hoặc id không tồn tại")
		

}


handleQty(){
    if(this.refs.qty===null||this.refs.qty===undefined||this.refs.qty===0){
        this.setState({
            errQty:{boder:'1px solid red'},
            Qty:0,
            ErrQty:"Vui lòng nhập so luong"
        })
    }
    else
    this.setState({
        errQty:{boder:'0.5px solid #E4E7ED'},
        Qty:1,
        ErrQty:''
    })

}

    handleColor(){

if(this.refs.color===null||this.refs.color===undefined||this.refs.color===''){
    this.setState({
        errColor:{boder:'1px solid red'},
        Color:0,
        ErrColor:"Vui lòng nhập màu"
    })
}
else this.setState({
    errColor:{boder:'0.5px solid #E4E7ED'},
    Color:1,
    ErrColor:''
})

    }
    render() {
        return (
            <div className='container 'style={{marginLeft:'25%'}} >
                
        <h4 className=" mt-5 mb-3" style={{fontSize:'30px'}}>Điền thông tin sản phẩm </h4>
    
        <form  style={{fontSize:'20px'}}>
         
           
              <div className="form-group" >
                <label>ID sản phẩm</label>
                <input className="form-control" type="text" name="product_id"  ref='id' onChange={this.handleId} style={this.state.errId}/>
        <p style={{color:'red'}}>{this.state.ErrID}</p>
                </div>
                <div className="form-group">
                
                  <label >Màu</label>
                 <input type='text' ref='color' className="form-control" onChange={this.handleColor} />
                 <p style={{color:'red'}}>{this.state.ErrColor}</p>
                
              </div>
              <div className="form-group">
                
                  <label >số lượng</label>
                  <input className="form-control" type="number" ref='qty' onChange={this.handleQty} name="quantity" min='1' style={this.state.errQty}/>
                  <p style={{color:'red'}}>{this.state.ErrQty}</p>
              </div>
              
                  <button className="btn btn-primary justify-content-center d-flex" onSubmit={this.handleSubmit} style={{width:'100px', height:'40px', fontSize:'18px'}} type="submit">Xác nhân</button>
              
            
            
        </form>
      
</div>

           
        );
    }
}

export default OldProduct;