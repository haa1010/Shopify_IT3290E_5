import React from 'react';
class NewProduct extends React.Component {
    render() {
        return (
            <div>
               
                    
                    <h2 className="title">Input Form</h2>
        <form method="POST">
                    
                        <label className="label">Product Name</label>
                        <input className="input--style-4" type="text" name="product_name" />
                  
                        <label className="label">Product ID</label>
                        <input className="input--style-4" type="text" name="product_id" />
                  
                        <label className="label">Price</label>
                      
                        <input className="input--style-4 js-datepicker" type="number" name="price" />
                   
                        <label className="label">Color</label>
                     
                        <input className="input--style-4 js-datepicker" type="text" name="color" />
                      
                        <label className="label">CPU</label>
                        <input className="input--style-4" type name="CPU" />
                  
                        <label className="label">Operating System</label>
                        <input className="input--style-4" type="text" name="OS" />
                   
                        <label className="label">Pin</label>
                        <input className="input--style-4" type="number" name="Pin" />
                  
                        <label className="label">Quantity</label>
                        <input className="input--style-4" type="number" name="quantity" />
                  
                    <label className="label">Memory</label>
                 
                    <select name="subject">
                        <option disabled="disabled" selected="selected">Choose option</option>
                        <option>16Gb</option>
                        <option>32Gb</option>
                        <option>64Gb</option>
                        <option>128Gb</option>
                        <option>256Gb</option>
                    </select>
                   
                    <label className="label">Back Camera</label>
                  
                    <select name="subject">
                        <option disabled="disabled" selected="selected">Choose option</option>
                        <option>8MP</option>
                        <option>12MP</option>
                        <option>16MP</option>
                        <option>20MP</option>
                        <option>32MP</option>
                        <option>64MP</option>
                    </select>
                   
                    <label className="label">Front Camera</label>
                    
                    <select name="subject">
                        <option disabled="disabled" selected="selected">Choose option</option>
                        <option>4MP</option>
                        <option>6MP</option>
                        <option>8MP</option>
                        <option>10MP</option>
                        <option>12MP</option>
                        <option>14MP</option>
                        <option>16MP</option>
                        <option>32MP</option>

                        </select>
                        </form>
  
            </div>
        );
    }
}

export default NewProduct;