import React, { useState, useEffect } from 'react';
import { Button } from '../ButtonElements';
import { DiscoContainer, InfoWrapper, InfoRow, Column1, Card, CardText, CardHead, Column2, TextWrapper, Heading, BtnWrap, ImgWrap, Img } from './DiscoverElements';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

const icon = L.icon({
    iconUrl: "./placeholder.png",
    iconSize: [38, 38],
});

const position = [51.505, -0.09];

function ResetCenterView(props) {
    const { selectPosition } = props;
    const map = useMap();
  
    useEffect(() => {
      if (selectPosition) {
        map.setView(
          L.latLng(selectPosition?.lat, selectPosition?.lon),
          map.getZoom(),
          {
            animate: true
          }
        )
      }
    }, [selectPosition]);
  
    return null;
}

const DiscoverSection = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectPosition, setSelectPosition } = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <DiscoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>Resultados</Heading>
                <BtnWrap>
                <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>
                <OutlinedInput
                style={{ width: "100%" }}
                value={searchText}
                onChange={(event) => {
                setSearchText(event.target.value);
                }}
            />
            </div>
        <Button style={{ display: "flex", alignItems: "center", padding: "0px 20px" }} variant="contained" 
            onClick={() => {
              const params = {
                q: searchText,
                format: "json",
                addressdetails: 1,
                polygon_geojson: 0,
            };
              const queryString = new URLSearchParams(params).toString();
              const requestOptions = {
                method: "GET",
                redirect: "follow",
            };
              fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                  console.log(JSON.parse(result));
                  setListPlace(JSON.parse(result));
                })
                .catch((err) => console.log("err: ", err));
            }}>Search
        </Button>
      </div>
      <div>
        <List component="nav" aria-label="main mailbox folders">
          {listPlace.map((item) => {
            return (
              <div key={item?.place_id}>
                <ListItem
                  button
                  onClick={() => {
                    setSelectPosition(item);
                  }}
                >
                  <ListItemIcon>
                    <img
                      src="./placeholder.png"
                      alt="Placeholder"
                      style={{ width: 38, height: 38 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </div>
    </div>
    </BtnWrap>
        </TextWrapper>
              <Card>
                  <Img src="../../images/busca.png"></Img>
                  <CardHead>Nome</CardHead>
                  <CardText>Nome descriçao do cara</CardText>
              </Card>
            </Column1>
            <Column2>
              <ImgWrap>
              <MapContainer
                center={position}
                zoom={8}
                style={{ width: "100%", height: "100%" }}
                >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.maptiler.com/maps/basic-v2/tiles.json?key=ZublLYrNszBXhYap8FWC"
                />
                {selectPosition && (
                    <Marker position={locationSelection} icon={icon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                )}
                <ResetCenterView selectPosition={selectPosition} />
                </MapContainer>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </DiscoContainer>
      <Footer />
    </>
  );
};

export default DiscoverSection;