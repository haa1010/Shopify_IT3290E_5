import React from 'react'
class DetailProduct extends React.Component{
render(){
    return(
        <div className="tab-content" >
        <div className="tab-pane fade active in" id="home">
        <h4>Product Information</h4>
          <table className="table table-bordered">
          <tbody>
          <tr className="techSpecRow"><th colspan="2">Product Details</th></tr>
          <tr className="techSpecRow"><td className="techSpecTD1">Brand: </td><td className="techSpecTD2">Fujifilm</td></tr>
          <tr className="techSpecRow"><td className="techSpecTD1">Model:</td><td className="techSpecTD2">FinePix S2950HD</td></tr>
          <tr className="techSpecRow"><td className="techSpecTD1">Released on:</td><td className="techSpecTD2"> 2011-01-28</td></tr>
          <tr className="techSpecRow"><td className="techSpecTD1">Dimensions:</td><td className="techSpecTD2"> 5.50" h x 5.50" w x 2.00" l, .75 pounds</td></tr>
          <tr className="techSpecRow"><td className="techSpecTD1">Display size:</td><td className="techSpecTD2">3</td></tr>
          </tbody>
          </table>
          </div>
          </div>
    )
    }
}
export default DetailProduct;