import React, {Component} from 'react';
import Webcam from 'react-webcam';
// import {Grid, Row, Col} from 'react-flexbox-grid';
import axios from 'axios';
import {connect} from 'react-redux';
import {recognizeUser, clearDisplayData} from '../../actions/index';
import UserRecognize from './user-recognize';
import NavBar from '../styles/NavBar'
import Footer from '../styles/Footer'
import {Grid, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const TextContainer = styled.div`
font-family: 'Molengo', sans-serif;


`

const Button = styled.button `
  position: relative;
  background-color: rgb(74, 74, 74);
  border-radius: 20%;
  font-size: 10px;
  color: #FFFFFF;
  padding: 10px;
  width: 75px;
  height:30px;
    font-family: 'Molengo', sans-serif;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

`
const Font = styled.div `
    font-family: 'Molengo', sans-serif;
`
// loader styling
const style = {
  container: {
    position: 'absolute'
  },
  refresh: {
    display: 'inline-block',
    position: 'absolute'
  },
  hide: {
    display: 'none',
    position: 'absolute'
  }
};

class Recognize extends Component {
  constructor(props) {
    super(props);

    this.state = {
      load: false
    };
  }

  componentDidMount() {
    this.props.clearDisplayData();
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    this.setState({load: true});

    const imageSrc = this.webcam.getScreenshot();

    axios.post(`https://api.kairos.com/recognize`, {
      gallery_name: 'newCameriaGallery',
      image: imageSrc
    }, {
      headers: {
        app_id: 'e70fee1f',
        app_key: '98112e824f82622206d370dae6ed74b9'
      }
    }).then((response) => {
      console.log('response', response);
      this.props.recognizeUser(response.data);
      this.setState({load: false});
    }).catch((error) => {
      console.log(error);
    });
  };

  render() {
    return (<div>

      <NavBar/>

      <div style={{
          'textAlign' : 'center'
        }}>
        <Font>
          <h3>Let's make sure it's really you!</h3>
          <Webcam audio={false} height={320} ref={this.setRef} screenshotFormat="image/png" width={520}/>

          <br/>
          <br/>
          <Button onClick={this.capture} label="DETECT" primary={true}>Detect</Button>
          <UserRecognize detect={this.props.detData}/>
          <Grid.Column computer={10}>
            <TextContainer>
            <h1>How it Works</h1>
            <p>Cupcake ipsum dolor sit. Amet wafer cookie cupcake. Candy gingerbread I love. I love marshmallow I love.

Gummies I love cheesecake. I love candy canes cupcake carrot cake. Pudding tiramisu dragée tootsie roll.

Cake cupcake tart powder. Pie candy canes I love biscuit sesame snaps candy canes carrot cake jelly beans soufflé. Powder powder candy canes gummies topping jelly donut. Powder dessert pastry I love apple pie.</p>
            </TextContainer>
          </Grid.Column>
          <Grid.Column computer={3}>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9fYuqUqaKrB-QpXIBZRbV0ZmXOuJoRhsliYUIQMYrGBqSpavNw'/>
          </Grid.Column>
          <TextContainer>
          <h2>Pudding</h2>
          <p>Cupcake ipsum dolor sit. Amet croissant fruitcake macaroon topping dessert jujubes candy canes powder. Pie gingerbread cake marzipan I love. Tiramisu macaroon jelly cupcake.

Soufflé danish dragée. Danish marzipan pie jujubes donut candy canes dragée. Marshmallow gummies dessert I love muffin dessert cookie brownie. Muffin sweet roll powder chocolate cake I love sesame snaps pudding jujubes bear claw.

Icing icing I love chocolate bar tart. I love donut I love soufflé. Ice cream oat cake caramels lollipop bear claw bonbon cupcake candy.</p>
          </TextContainer>
          <Grid.Column computer={3}>
            <Image src='https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_620/v1463416078/%E6%9C%BA%E5%99%A8%E8%A7%86%E8%A7%89%E5%9B%BE%E7%89%87%E6%94%B9_z0c5hp.jpg'/>
          </Grid.Column>
          <TextContainer>
          <h2>Candy</h2>
          <p>Cupcake ipsum dolor sit amet sugar plum toffee gingerbread. Jujubes cake candy. Topping I love I love muffin chocolate cake marzipan soufflé tootsie roll I love. Halvah cupcake chocolate bar fruitcake.

Marzipan bonbon topping cake brownie pudding sweet roll liquorice. Ice cream I love topping lemon drops I love brownie pudding. Candy canes apple pie chupa chups muffin carrot cake. Chocolate cake halvah cookie.

Macaroon croissant sweet gummies wafer caramels macaroon ice cream. Cake topping bear claw macaroon wafer bear claw gummi bears sweet. Tootsie roll oat cake lollipop pastry ice cream halvah chupa chups.</p>
          </TextContainer>
          <Grid.Column computer={3}>
            <Image src='https://www.myidcare.com/themes/ee/site/default/asset/img/pages/facial-recognition.jpg'/>

          </Grid.Column>
          <TextContainer>
          <h2>Cupcake</h2>
          <p>Cupcake ipsum dolor sit amet sweet fruitcake fruitcake. Apple pie gummies lemon drops pastry macaroon candy. I love jelly-o cookie. Brownie cupcake chocolate cake lollipop tootsie roll.

Sugar plum oat cake oat cake chocolate bar chocolate cake. Macaroon cookie tart tootsie roll sweet roll cheesecake. Biscuit marshmallow wafer.

Fruitcake I love dragée. Macaroon dessert cheesecake oat cake. Lemon drops jujubes donut. Sweet liquorice I love jelly beans cotton candy carrot cake.</p>
          </TextContainer>
        </Font>
      </div>

      <Footer/>
    </div>);
  }
}

function mapStateToProps(state) {
  return {detData: state.detData}
}

export default connect(mapStateToProps, {recognizeUser, clearDisplayData})(Recognize);
