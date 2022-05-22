import React from "react";
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
interface Props {}

const Project: React.FC<Props> = () => {
  const cards = [
    {
      index: 0,
      title: "Levitating",
      artist: "Dua Lipa",
      price: "0.1 WMatic",
      img: "/post1",
    },
    {
      index: 0,
      title: "Levitating",
      artist: "Dua Lipa",
      price: "0.1 WMatic",
      img: "/post1",
    },
    {
      index: 0,
      title: "Levitating",
      artist: "Dua Lipa",
      price: "0.1 WMatic",
      img: "/post1",
    },
    {
      index: 0,
      title: "Levitating",
      artist: "Dua Lipa",
      price: "0.1 WMatic",
      img: "/post1",
    },
  ];

  return (
    <>
      {cards.map((card) => (
        <Container key={card.index} className=" w-25 my-5">
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  Artist - {card.artist}
                  <Button variant="outline-primary">Follow</Button>
                </Card.Header>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  {/* <Card.Text>{card.content}</Card.Text> */}
                  <Stack
                    className="justify-content-end"
                    direction="horizontal"
                    gap={3}
                  >
                    <Card.Text className=""> {card.price} </Card.Text>
                    <Button variant="outline-primary">Join</Button>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
};

export default Project;
