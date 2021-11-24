import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";

class AddMovie extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    errors: {},
    genres:[]
  };


  schema = {
    _id:Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number In Stock"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Daily Rental Rate"),
  };

  componentDidMount = () => {
    const genres = getGenres();
    this.setState({genres});

    console.log();

  }
  doSubmit = () => {
    //Call server
    console.log("Submitted");
    //Save to movie table
    //redirect to home page
  };

  render() {
    return (
      <div className="container">
        <h1 className="my-3">Movie Form</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}

          {this.renderSelect("genre", "Genre", )}

          {this.renderInput("numberInStock", "Number In Stock", "number")}

          {this.renderInput("dailyRentalRate", "Rate", "number")}

          {this.renderBtn("Save")}
        </form>
      </div>
    );
  }
}

export default AddMovie;
