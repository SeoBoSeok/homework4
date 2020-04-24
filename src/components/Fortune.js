import React, { Component } from "react";
import axios from "axios";

const FORTUNE_API = "http://askat.me:8000/api/fortune/";

class Fortune extends Component {
  state = {
    data: "",
    isLoading: false,
  };
  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    axios
      .get(
        `http://askat.me:8000/api/fortune/${this.props.match.params.birthday}`
      )
      .then((response) => {
        console.log(response);
        this.setState({ data: response.data, isLoading: false });
      })
      .catch((e) => {
        console.error(e);
        this.setState({
          isLoading: false,
        });
        window.alert(e.message);
      });
  }
  render() {
    const { name, birthday } = this.props.match.params;
    return (
      <div className="Fortune">
        {this.state.isLoading && <div>Loading...</div>}
        {!this.state.isLoading && (
          <>
            {name} was born in {birthday}, FORTUNE: {this.state.data}
          </>
        )}
      </div>
    );
  }
}

export default Fortune;
