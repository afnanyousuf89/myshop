import React, { useState } from 'react'

function ProductForm({category}) {

    const [formData, setFormData] = useState({});

    const handelChange = (e)=>{
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        setFormData({...formData, ["isactive"]: true})
        setFormData({...formData, ["isdeleted"]: false})

        fetch("http://localhost:8081/product",{
            method: 'POST',
            body: JSON.stringify(formData),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((response)=>{
            response.json()
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.error(err)
        })

        console.log(formData)
        // setFormData({})
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <table>
            <tr>
                <td>Product Name: </td>
                <td><input type="text" name="pname" onChange={handelChange} value={formData.pname || ""}  /></td>
            </tr>
            <tr>
                <td>Product Description: </td>
                <td><textarea name="pdesc" onChange={handelChange} value={formData.pdesc || ""} ></textarea></td>
            </tr>
            <tr>
                <td>Product Image: </td>
                <td><input type="text" name="pimg" onChange={handelChange} value={formData.pimg || ""}  /></td>
            </tr>
            <tr>
                <td>Product Price: </td>
                <td><input type="number" name="pprice" onChange={handelChange} value={formData.pprice || ""}  /></td>
            </tr>
            <tr>
                <td>Category</td>
                <td>
                    <select name="cid" onChange={handelChange}>
                        <option value="0">Select Category</option>
                        {
                            category.map((item)=>{
                                return <option key={item.cid} value={item.cid}>{item.cname}</option>
                            })
                        }
                    </select>
                </td>
            </tr>

                    <tr>
                        <td></td>
                        <td><input type="submit" value="Save" /></td>
                    </tr>
       

        </table>


      </form>
    </div>
  )
}

export default ProductForm