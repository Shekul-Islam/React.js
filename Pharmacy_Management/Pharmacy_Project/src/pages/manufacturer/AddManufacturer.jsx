import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import React, {useState }from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";


const AddManufacturer = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')
  const [phone, setPhone] = useState('')
  const [photo, setPhoto] = useState('')
  const navigate= useNavigate();   
  const save = () => {
    const formdata = new FormData()
    formdata.append('name', name)
    formdata.append('email', email)
    formdata.append('phone', phone)
    formdata.append('photo', photo)
    formdata.append('details', details)
    axios.post("http://localhost/pharmacy_management/api-php/manufacturer/addmanufacturer.php", formdata, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
        .then((res) => {
            console.log(res.data)
            setName('')
            
            setEmail('')
            setPhone('')
            setDetails('')
            setPhoto(null)
            navigate('/manufacturerlist')
        })
}

  return (

    <div className="wrapper">
      <Navbar/>
      <Sidebar/>
      <div className='content-wrapper'> 
      <div className="col-md-12">
  {/* general form elements */}
  <div className="card card-primary">
    <div className="card-header">
      <h3 className="card-title">Add Manufacturer</h3>
    </div>
    {/* /.card-header */}
    {/* form start */}
    <p className="text-sucess"> {  }</p>                 
    <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-12">
                        <div className="bg-light rounded h-100 p-4">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h2 className="mb-0">Add Item</h2>

                                <NavLink to={`/manufacturerlist`}>
                                    <button className="btn btn-info btn-lg"> Manufacturer List</button>
                                </NavLink>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}

                                />
                                <label htmlFor="floatingInput">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}

                                />
                                <label htmlFor="floatingInput">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}

                                />
                                <label htmlFor="floatingInput">Phone</label>
                            </div>

                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    style={{ height: 150 }}
                                    onChange={(e) => setDetails(e.target.value)}
                                    value={details}
                                />
                                <label htmlFor="floatingTextarea">Details</label>
                            </div>

                            <div className='col-md-6'>
                                <input className="form-control form-control-lg mt-4" id="formFileLg" type="file" onChange={(e) => setPhoto(e.target.files[0])} />
                            </div>

                            <div>
                                <button onClick={save} className="btn btn-primary mt-4 btn-lg">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </div>
  {/* /.card */}
</div>
</div>
        <Footer/>
   
      </div>
  )
}

export default AddManufacturer