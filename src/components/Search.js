import React, { useState , useEffect } from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Fooddata from "./Fooddata";
import Cards from "./Cards";
const Search = () => {
  const [fdata, setFdata] = useState(Fooddata);
//   console.log(fdata);

    const [copydata , setCopydata] = useState([]);

    // console.log(copydata);

    const changeData = (e)=>{
            let getchangeData = e.toLowerCase();

            if( getchangeData == ""){
                setCopydata(fdata)
            }else{
                let storeData = copydata.filter((ele , id)=>{
                    return ele.rname.toLowerCase().match(getchangeData)
                });

                 setCopydata(storeData)
            }
    }


    useEffect (()=>{
            setTimeout(()=>{
                setCopydata(Fooddata)
                },3000 )

            
    },[])
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center">
        <img
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30151609/1916-768x591.png"
          alt=""
          style={{
            width: "8rem",
            position: "relative",
            left: "2%",
            cursor: "pointer",
          }}
        />
        <h2 style={{ color: "orange", cursor: "pointer" }}>
          {" "}
          Search Filter App{" "}
        </h2>
      </div>

      <Form className="d-flex justify-content-center align-items-center mt-3">
        <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
          
          <Form.Control type="text" placeholder="Search Restaurant"  onChange={(e)=> changeData(e.target.value)}/>
          
        </Form.Group>
        <button className="btn text-light col-lg-1 " style={{background: "orange"}} > Submit</button>
      </Form>

            <section className="iteam-section mt-4 container" >
                <h2 className="px-4 " style={{fontWeight:"700"}}> Restaurants in Islamabad Is Open </h2>
                <div className="row mt-2 d-flex  justify-content-between align-items-center p-2">

                   {copydata && copydata.length ? <Cards data={copydata} />:"empty" } 
                </div>
                
            </section>

    </>
  );
};

export default Search;
