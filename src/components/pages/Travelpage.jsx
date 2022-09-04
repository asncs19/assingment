import React from 'react';
import styled from 'styled-components';
import AccessibleIcon from '@mui/icons-material/Accessible';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const PictureDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageCinema = styled.img`
  width: 100%;
  height: 300px;
`

// ------------------------------------------

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 20px;
`
const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  color: white;
`

// ---------------------------------------------

const MapDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

`

const MapIframe = styled.iframe`
  width: 100wh;
  height: 300px;
  border: 2px solid blue;
`

// ------------------------------------

const DirectionsDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
width: 50%;
height: 500px;
`


// ------------------------------------

const TwoPictureDiv = styled.div`
  width: 100%;
`

// -----------------------

const AddressPhone = styled.h2`

`

// ---------------------------

const FootLinksDiv = styled.div`
  display: flex;
`

const LinkDiv = styled.div`
  margin: 10px 10px;
`
const LinkHeadingDiv = styled.div`
  display: flex;
  align-items: center;
`
const LinkTitle = styled.h3`

`

const LinkDescription = styled.p`
  
`

const Travelpage = () => {
  return (
    <>
      <MainContainer>
        {/* For Title  */}
        <TitleDiv>
          <Title>Welcome To QA Cinema</Title>
        </TitleDiv>

        <PictureDiv>
          <h3>QA Cinema</h3>
          <ImageCinema src='/qabuilding.png' alt='' />
        </PictureDiv>

        <AddressPhone>Address: 3rd Floor. International House, 1 St Katharine's Way, London E1W 1UN</AddressPhone>
        <AddressPhone>Tel: 0345 074 7829</AddressPhone>
        
        {/* For Map  */} 
        <MapDiv>
          <h3>Location</h3>
          <MapIframe src="https://maps.google.com/maps?q=E1W%201UN&t=&z=17&ie=UTF8&iwloc=&output=embed">

          </MapIframe>
        </MapDiv>

        {/* For Direction  */}
        <DirectionsDiv>
          <h3>Directions from Tower Bridge</h3>
          <TwoPictureDiv>
            <Image src="/dir.jpg" alt="directions" />
            <Image src="/steps.png" alt="steps"></Image>
          </TwoPictureDiv>
          
        </DirectionsDiv>

        {/* Foot Links  */}
        <FootLinksDiv>

            <LinkDiv>
              <LinkHeadingDiv>
                  <AccessibleIcon sx={{ width: "30px", height: "30px", marginRight: "10px", color: "green" }}/>
                  <LinkTitle>Accessility</LinkTitle>
              </LinkHeadingDiv>
              <LinkDescription>
                There's disability access, as the building has lifts going to all floors
              </LinkDescription>
            </LinkDiv>

            <LinkDiv>
              <LinkHeadingDiv>
                  <AccessAlarmIcon sx={{ width: "30px", height: "30px", marginRight: "10px", color: "green" }}/>
                  <LinkTitle>Accessility</LinkTitle>
              </LinkHeadingDiv>
              <LinkDescription>
                There's disability access, as the building has lifts going to all floors
              </LinkDescription>
            </LinkDiv>

            <LinkDiv>
              <LinkHeadingDiv>
                  <AccessibleIcon sx={{ width: "30px", height: "30px", marginRight: "10px", color: "green" }}/>
                  <LinkTitle>Accessility</LinkTitle>
              </LinkHeadingDiv>
              <LinkDescription>
                There's disability access, as the building has lifts going to all floors
              </LinkDescription>
            </LinkDiv>


        </FootLinksDiv>


      </MainContainer>
    </>
  );
};

export default Travelpage;