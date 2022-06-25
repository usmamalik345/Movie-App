import React from "react";
import Card from "react-bootstrap/Card";

const Cards = ({ data }) => {
  return (
    <div>
      {data.map((element, key) => {
        return (
          <>
            <Card style={{ width: "22rem", border: "none", padding: "12px" }}  className="display-content" >
              <Card.Img
                variant="top"
                src={element.imgdata}
                className="imge-h "
              />

              <div className="cart_boy ">
                <div className="upper_data d-flex justify-content-between align-items-center">
                  <h4 className="mt-2"> {element.rname}</h4>
                  <span> {element.rating} &nbsp; ⭐</span>
                </div>
                <div className="lower_data d-flex justify-content-between">
                  <h5> {element.address} </h5>
                  <span> {element.price} </span>
                </div>

                <div className="extra"></div>
                <div className="last_data d-flex justify-content-between align-items-center">
                  <img src={element.arrimg} alt="" style={{width: "18px"}}  />
                  <p  style={{fontSize: "14px" , fontWeight:"700"}}> {element.somedata}</p>
                  <img src={element.delimg} alt="" style={{width: "45px"}} />
                </div>
              </div>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default Cards;
