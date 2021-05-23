/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from "react";
import {Image, ScrollView} from "react-native";
import {Button,Text,Container,Accordion,Badge,Content,Card,CardItem,Left,Thumbnail,Body,Icon,Right,Footer, FooterTab, Header, Title} from "native-base";

const dataArray = [
  { title: "blat", content: "Hello, We're updating our system" },
  { title: "Second Element", content: "Licensing" },
  { title: "Third Element", content: "About Us" }
];

export default class App extends Component{
  render(){
    return(
      <Container>


        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>


      <ScrollView style={{marginTop:10}}>

    <Button><Text>Post</Text></Button>


          <Accordion
           style={{marginTop:15}}
            dataArray={dataArray} expanded={[0]}
            icon="add" expandedIcon="remove"
            iconStyle={{ color: "green" }} expandedIconStyle={{ color: "red" }}
          />


    <Badge style={{ backgroundColor: 'blue' }}>
      <Text>2</Text>
    </Badge>

    <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png'}} />
                <Body>
                  <Text>Victor Jokovic</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://images.pexels.com/photos/2227826/pexels-photo-2227826.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
       </ScrollView>


       <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
            <Button  style={{backgroundColor:"red"}}>
              <Icon name="card"/>
            </Button>
          </FooterTab>
        </Footer>


      </Container>

      );
  }
}
