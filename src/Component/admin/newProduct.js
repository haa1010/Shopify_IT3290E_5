import React from 'react';
import axios from "axios"
import qs from "querystring"
const border = { border: '0.5px solid rgb(228, 231, 237)' };
const borderErr = { border: '1px solid red' }
class N extends React.Component {

    constructor(props) {


        super(props)
        this.state = {
            errId: {},
            errColor: {},
            errQty: {},
            errDes: {},
            errLink1: {},
            errLink2: {},
            errLink3: {},
            errMem: {},
            errName: {},
            errOs: {},
            errPin: {},
            errBefore: {},
            errBehide: {},
            errCPU: {},
            Id: [],
            count: 0,


        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }



    handleSubmit = async e => {
        e.preventDefault();
        if (this.refs.id.value === undefined || this.refs.id.value === '' || this.state.Id.includes(this.refs.id.value)) {
            this.setState({
                errId: borderErr,
                1: 0
            })
        }
        else {
            this.setState({
                errId: border,
                1: 1
            })
        }
        if (this.refs.color.value === undefined || this.refs.color.value === '') {
            this.setState({
                errColor: borderErr,
                2: 0
            })
        }
        else {
            this.setState({

                errColor: border,
                2: 1
            })
        }
        if (this.refs.name.value === undefined || this.refs.name.value === '') {
            this.setState({
                errName: borderErr,
                3: 0
            })
        }
        else {
            this.setState({

                errName: border,
                3: 1
            })
        }
        if (this.refs.qty.value === undefined || this.refs.qty.value === '') {
            this.setState({
                errQty: borderErr,
                4: 0
            })
        }
        else {
            this.setState({

                errQty: border,
                4: 1
            })
        }

        if (this.refs.des.value === undefined || this.refs.des.value === '') {
            this.setState({
                errDes: borderErr,
                5: 0
            })
        }
        else {
            this.setState({

                errDes: border,
                5: 1
            })
        }
        if (this.refs.name.value === undefined || this.refs.name.value === '') {
            this.setState({
                errName: borderErr, 6: 0
            })
        }
        else {
            this.setState({

                errName: border,
                6: 1
            })
        }
        if (this.refs.pin.value === undefined || this.refs.pin.value === '') {
            this.setState({
                errPin: borderErr, 7: 0
            })
        }
        else {
            this.setState({

                errPin: border,
                7: 1
            })
        }
        if (this.refs.os.value === undefined || this.refs.os.value === '') {
            this.setState({
                errOs: borderErr, 8: 0
            })
        }
        else {
            this.setState({

                errOs: border,
                8: 1
            })
        }
        if (this.refs.before.value === undefined || this.refs.before.value === '') {
            this.setState({
                errBefore: borderErr, 9: 0
            })
        }
        else {
            this.setState({

                errBefore: border,
                9: 1
            })
        }
        if (this.refs.behide.value === undefined || this.refs.behide.value === '') {
            this.setState({
                errBehide: borderErr, 10: 0
            })
        }
        else {
            this.setState({

                errBehide: border,
                10: 1
            })
        }
        if (this.refs.cpu.value === undefined || this.refs.cpu.value === '') {
            this.setState({
                errCPU: borderErr, 11: 0
            })
        }
        else {
            this.setState({

                errCPU: border,
                11: 1
            })
        }
        if (this.refs.mem.value === undefined || this.refs.mem.value === '') {
            this.setState({
                errMem: borderErr, 12: 0
            })
        }
        else {
            this.setState({

                errMem: border,
                12: 1
            })
        }
        if (this.refs.l1.value === undefined || this.refs.l1.value === '') {
            this.setState({
                errLink1: borderErr, 13: 0
            })
        }
        else {
            this.setState({

                errLink1: border,
                13: 1
            })
        }
        if (this.refs.l2.value === undefined || this.refs.l2.value === '') {
            this.setState({
                errLink2: borderErr, 14: 0
            })
        }
        else {
            this.setState({

                errLink2: border,
                14: 1
            })
        }
        if (this.refs.l3.value === undefined || this.refs.l3.value === '') {
            this.setState({
                errLink3: borderErr,
                15: 0
            })
        }
        else {
            this.setState({

                errLink3: border,
                15: 1
            })
        }

        if (true) {
            var data = {
                product: {
                    id: this.refs.id.value,
                    name: this.refs.name.value,
                    price: this.refs.price.value,
                    brand: this.refs.brand.value
                },
                detail: {
                    id: this.refs.id.value,
                    date: this.refs.date.value,
                    description: this.refs.des.value
                },
                color: [
                    {
                        id: this.refs.id.value,
                        color: this.refs.color.value,
                        qty: this.refs.qty.value
                    }

                ],
                spec: {
                    id: this.refs.id.value,
                    memory: this.refs.mem.value,
                    front: this.refs.before.value,
                    behind: this.refs.behide.value,
                    cpu: this.refs.cpu.value,
                    os: this.refs.os.value,
                    pin: this.refs.pin
                },
                urlImage: [
                    {
                        id: this.refs.id,
                        url: this.refs.l1.value
                    },
                    {
                        id: this.refs.id,
                        url: this.refs.l2.value
                    },
                    {
                        id: this.refs.id,
                        url: this.refs.l3.value
                    }
                ]
            }
        }
        axios.post('http://localhost:8080/newOrder', qs.stringify(data), {
            'Content-Type': 'application/json'
        }
        )
            .then(function (response) {
                console.log(data)
                alert("thêm sản phẩm thành công")
                setTimeout(window.location.href = '/', 2000)
            })
            .catch(function (error) {
                alert("Đã xảy ra lỗi, vui lòng đặt lại")
            });






    }

    componentDidMount() {

        fetch('http://localhost:8080/products')
            .then(res => res.json())
            .then(
                (result) => {
                    var id = []
                    for (var i = 0; i < result.detail.length; i++) {
                        id.push(result.detail.length[i].idproduct)
                    }

                    this.setState({
                        isLoaded: true,
                        Id: id


                    });

                },
                // error handler
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log("error");
                }
            )
        }




    render() {
        return (


            <div className='container ' style={{ marginLeft: '25%' }} >

                <h4 className=" mt-5 mb-3" style={{ fontSize: '30px' }}>Điền thông tin sản phẩm </h4>

                <form style={{ fontSize: '20px' }}>


                    <div className="form-group" >
                        <label>ID sản phẩm</label>
                        <input className="form-control" type="text" name="product_id" ref='id' style={this.state.errId} />

                    </div>
                    <div className="form-group">

                        <label >Tên sản phẩm </label>
                        <input className="form-control" type="text" ref='name' style={this.state.errName} />

                    </div>
                    <div className="form-group">

                        <label >Hãng  </label>
                        <input className="form-control" type="text" ref='brand' style={this.state.errName} />
                    </div>
                    <div className='row '>
                        <div className="col-lg-2">

                            <label >Màu</label>
                            <input type='text' ref='color' style={this.state.errColor} />


                        </div>
                        <div className="col-lg-2 offset-1">

                            <label >số lượng</label>
                            <input type="number" ref='qty' name="quantity" min='1' style={this.state.errQty} />

                        </div>
                    </div>
                    <div className="form-group">

                        <label >Ngay sx</label>
                        <input className="form-control" ref='date' type="date" style={this.state.errQty} />

                    </div>
                    <div className="form-group">

                        <label >Mô tả</label>
                        <textarea className="form-control" type="text" ref='des' style={this.state.errDes} />

                    </div>
                    <div className='row'>


                        <div className="col-lg-2 ">

                            <label >Memory</label>
                            <input type="text" ref='mem' style={this.state.errMem} />

                        </div>
                        <div className="col-lg-2 offset-1 ">

                            <label >CPU</label>
                            <input type="text" ref='cpu' style={this.state.errCPU} />

                        </div>
                    </div>
                    <div className='row'>


                        <div className="col-lg-2 ">

                            <label >Camera trước</label>
                            <input type="text" ref='before' style={this.state.errBefore} />

                        </div>
                        <div className="col-lg-2 offset-1 ">

                            <label >Camera sau</label>
                            <input type="text" ref='behide' style={this.state.errBehide} />

                        </div>
                    </div>
                    <div className='row'>


                        <div className="col-lg-2 ">

                            <label >Hệ điều hành</label>
                            <input type="text" ref='os' style={this.state.errOs} />

                        </div>
                        <div className="col-lg-2 offset-1 ">

                            <label >Pin</label>
                            <input type="text" ref='pin' style={this.state.errPin} />

                        </div>
                    </div>

                    <div className="form-group">

                        <label >Link ảnh</label>
                        <input className="form-control" ref='l1' type="text" style={this.state.errLink1} />
                        <input className="form-control mt-2" ref='l2' type="text" style={this.state.errLink2} />
                        <input className="form-control mt-2" type="text" ref='l3' style={this.state.errLink3} />

                    </div>
                    <button className="btn btn-primary justify-content-center d-flex" onClick={this.handleSubmit} style={{ width: '100px', height: '40px', fontSize: '18px' }} type="submit">Xác nhân</button>



                </form>

            </div>)
    }
}
export default N;