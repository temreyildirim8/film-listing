import React, { Component } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { connect } from "react-redux";
import reducer from "../../store/reducer.js";
import { searchAction } from "../../store/actions.js";
import Spinner from "../Spinner/Spinner";
import List from "../List/List";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchData: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      searchText: event.target.value
    });
    this.props.doSearch(this.state.searchText);
    this.setState({
      searchData: this.props.searchData
    });
  }
  handleSubmit() {
    console.log("SUBMITTED");
  }
  spinner() {
    if (this.props.loading) {
      return <Spinner />;
    }
  }

  render() {
    return (
      <div className="body bg-white">
        <div className="container">
          <div className="card m-t-20">
            <div className="row">
              <div className="col-xs-6 col-xs-offset-3 text-center font-33 col-grey">
                Film listing app
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card bg-light-gray">
            <div className="row">
              <div className="col-xs-4 col-xs-offset-4">
                <div className="row p-t-100 p-b-100">
                  <div className="row outside-border">
                    <div className="right p-r-10 col-blue">
                      <Link
                        to="/List"
                        className="button1"
                        onClick={this.handleSubmit}
                      >
                        <i className="material-icons md-36 p-t-10">search</i>
                      </Link>
                    </div>

                    <div>
                      <input
                        className="col-xs-9 p-t-15 borderless-input"
                        type="search"
                        placeholder="Bulmak istediginiz filmin adini yaziniz"
                        onChange={this.handleChange}
                        value={this.state.searchText}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row p-t-10">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-lg-offset-3 col-md-offset-3 col-sm-offset-3 col-sm-offset-3">
                {this.props.loading ? (
                  <Spinner />
                ) : this.state.searchData ? (

                    <ul>
                      {this.state.searchData.map(movie => (
                        <div className="row center">
                          <div className="poster col-lg-6 col-md-6 col-sm-6 col-xs-6 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-sm-offset-2">
                            <img src={movie.Poster} />
                          </div>
                        </div>
                      ))}
                    </ul>

                ) : (
                  <div className="row text-center"> NO RESULTS </div>
                )}
                {this.state.searchData && this.state.searchText ? (
                  <div>
                    <Link
                      to="/List"
                      className="button1"
                      onClick={this.handleSubmit}
                    >
                      DAHA FAZLA SONUC
                    </Link>
                  </div>
                ) : (
                  <div> </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.search.loading,
    searchData: state.search.searchData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doSearch: searchTitle => dispatch(searchAction(searchTitle))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
