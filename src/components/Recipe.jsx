import React, { Component } from "react";
import style from "../recipe.module.css";

const Recipe = ({ title, cal, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mt-3">
            <div className="card">
              <div className={style.cardHorizontal}>
                <div className="img-square-wrapper">
                  <img className={style.image} src={image} alt={title} />
                </div>
                <div className="card-body" style={{ fontFamily: "cursive" }}>
                  <h4 className="card-title" style={{ fontSize: "20px" }}>
                    {title}
                  </h4>
                  <p className="card-text">
                    <ol>
                      {ingredients.map((i) => (
                        <li>{i.text}</li>
                      ))}
                    </ol>
                  </p>
                </div>
              </div>
              <div className="card-footer" style={{ padding: "10px" }}>
                <small className="text-muted">Calories: {cal}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
