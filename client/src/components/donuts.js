import React from 'react';

class Donut extends React.Component {
  constructor(props) {
    super();
    this.state = { donuts: [] };
  }

  componentDidMount() {
    fetch(`/api`)
    .then(res => res.json())
    .then(json => this.setState({donuts: json}));
  }

  render() {
    return (
      <div className='container pt-5'>
        <div className='row d-flex justify-content-center'>
          {this.state.donuts.map(donut => (
            <div className='col-3 d-flex align-items-stretch'>
              <div className='card' style="width: 18rem">
              <img src={"https://paradisedonutco376.s3.us-east-2.amazonaws.com/" + donut.img_link} className="card-img-top" />
                <div className='card-body'>
                  <p className="card-title">
                    {donut.donut_name}
                  </p>
                  <a className="btn btn-primary">Buy A Dozen Now!</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Donut;