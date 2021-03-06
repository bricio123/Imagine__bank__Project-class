import React from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Tab,
  ListGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faShieldAlt,
  faUserTie,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import "./FrequentDoubts.scss";
import "./IconText";
const Doubts = () => (
  <section className="p-3 text-white back-color">
    <Container className="pb-5">
      <Col>
        <Row className="d-flex flex-column align-items-center py-5 ">
          <h2 className="ti-color">Dúvidas frequentes</h2>
        </Row>

        <Tab.Container
          id="list-group-tabs-example"
          defaultActiveKey="#link1"
          className=""
        >
          <Row lg="2">
            <Col className="d-flex flex-column align-items-center justify-content-center">
              <ListGroup className="d-flex justify-content-center">
                <span className="list__icon-faq" sm={12}>
                  <ListGroup.Item
                    action
                    href="#link1"
                    className="bg-transparent border-0"
                  >
                    <Row className="p-2 ">
                      <span className="d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={faCreditCard}
                          size="2x"
                          className="pad-icons"
                        />
                      </span>
                      <Col className="h5 m-0  d-flex  align-items-center">
                        <h3 className="Doubts__text__icons d-none d-lg-flex m-0 p-0">
                          Cartão de crédito e débito
                        </h3>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link2"
                    className="bg-transparent border-0"
                  >
                    <Row className="p-2">
                      <span className="d-flex align-items-center">
                        <FontAwesomeIcon
                          icon={faWallet}
                          size="2x"
                          className="pad-icons"
                        />
                      </span>
                      <Col className="h5 m-0 p-auto-1 d-flex align-items-center">
                        <h3 className="Doubts__text__icons d-none d-lg-flex m-0 p-0">
                          Conta e abertura
                        </h3>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link3"
                    className="bg-transparent border-0"
                  >
                    <Row className="p-2">
                      <span className="d-flex align-items-center">
                        <FontAwesomeIcon
                          icon={faShieldAlt}
                          size="2x"
                          className="pad-icons"
                        />
                      </span>
                      <Col className="h5 m-0 p-auto-1 d-flex  align-items-center">
                        <h3 className="Doubts__text__icons d-none d-lg-flex m-0 p-0">
                          Token digital
                        </h3>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link4"
                    className="bg-transparent border-0"
                  >
                    <Row className="p-2">
                      <span className="d-flex align-items-center">
                        <FontAwesomeIcon
                          icon={faUserTie}
                          size="2x"
                          className="pad-icons"
                        />
                      </span>
                      <Col className="h5 m-0 p-auto-1 d-flex  align-items-center">
                        <h3 className="Doubts__text__icons  d-none d-lg-flex  m-0 p-0">
                          Produtos e serviços
                        </h3>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </span>
                <div>
                  <Col className="resp-icons"></Col>
                  <Row className=" flex-column align-items-center py-3 ">
                    <small className="credit-text my-4"></small>
                  </Row>
                </div>
              </ListGroup>
            </Col>

            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <Col className="acor">
                    <Accordion
                      defaultActiveKey="0"
                      className="border border-secondary"
                    >
                      <Card className="border border-secondary">
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="0"
                          className="first_text text-white"
                        >
                          Lorem ipsum dolor sit amet
                        </Accordion.Toggle>
                        <Accordion.Collapse
                          eventKey="0"
                          className="back-color text-white "
                        >
                          <Card.Body className="text_body m-3">
                            <p>
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nullam tincidunt arcu vel arcu fermentum,
                              eget accumsan dolor dignissim. Nam eget quam
                              semper, varius ligula sed, auctor augue. Maecenas
                              et porta magna. Nulla mattis tortor vitae metus
                              vestibulum scelerisque. Ut mollis a nisl vel
                              suscipit. Curabitur scelerisque placerat ultrices.
                              Proin purus ante, congue vel arcu ac, porta
                              condimentum mauris. Maecenas massa orci, fringilla
                              eget fermentum nec, dignissim nec diam.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>

                      <Card className="border border-secondary">
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="1"
                          className="first_text text-white"
                        >
                          Nulla porttitor eros ac ex tristique posuere
                        </Accordion.Toggle>
                        <Accordion.Collapse
                          eventKey="1"
                          className="back-color text-white"
                        >
                          <Card.Body className="text_body m-3">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nullam tincidunt arcu vel arcu fermentum,
                              eget accumsan dolor dignissim. Nam eget quam
                              semper, varius ligula sed, auctor augue. Maecenas
                              et porta magna. Nulla mattis tortor vitae metus
                              vestibulum scelerisque. Ut mollis a nisl vel
                              suscipit. Curabitur scelerisque placerat ultrices.
                              Proin purus ante, congue vel arcu ac, porta
                              condimentum mauris. Maecenas massa orci, fringilla
                              eget fermentum nec, dignissim nec diam.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>

                      <Card className="border border-secondary">
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="2"
                          className="first_text text-white"
                        >
                          Quisque fringilla tincidunt arcu
                        </Accordion.Toggle>
                        <Accordion.Collapse
                          eventKey="2"
                          className=" back-color text-white"
                        >
                          <Card.Body className="text_body m-3">
                            <p>
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nullam tincidunt arcu vel arcu fermentum,
                              eget accumsan dolor dignissim. Nam eget quam
                              semper, varius ligula sed, auctor augue. Maecenas
                              et porta magna. Nulla mattis tortor vitae metus
                              vestibulum scelerisque. Ut mollis a nisl vel
                              suscipit. Curabitur scelerisque placerat ultrices.
                              Proin purus ante, congue vel arcu ac, porta
                              condimentum mauris. Maecenas massa orci, fringilla
                              eget fermentum nec, dignissim nec diam.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>

                      <Card className="border border-secondary">
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="3"
                          className="first_text text-white"
                        >
                          Nam elementum lobortis purus a maximus tortor
                        </Accordion.Toggle>
                        <Accordion.Collapse
                          eventKey="3"
                          className="back-color text-white"
                        >
                          <Card.Body className="text_body m-3">
                            <p className="p_body">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nullam tincidunt arcu vel arcu fermentum,
                              eget accumsan dolor dignissim. Nam eget quam
                              semper, varius ligula sed, auctor augue. Maecenas
                              et porta magna. Nulla mattis tortor vitae metus
                              vestibulum scelerisque. Ut mollis a nisl vel
                              suscipit. Curabitur scelerisque placerat ultrices.
                              Proin purus ante, congue vel arcu ac, porta
                              condimentum mauris. Maecenas massa orci, fringilla
                              eget fermentum nec, dignissim nec diam.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </Col>

                  <Container />
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <Container />
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  <Col className="acor">
                    <Accordion
                      defaultActiveKey="0"
                      className="border border-secondary"
                    >
                      <Card className="border border-secondary">
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="0"
                          className="first_text text-white"
                        >
                          Lorem ipsum dolor sit amet
                        </Accordion.Toggle>
                        <Accordion.Collapse
                          eventKey="0"
                          className="back-color text-white "
                        >
                          <Card.Body className="text_body m-3">
                            <p>
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nullam tincidunt arcu vel arcu fermentum,
                              eget accumsan dolor dignissim. Nam eget quam
                              semper, varius ligula sed, auctor augue. Maecenas
                              et porta magna. Nulla mattis tortor vitae metus
                              vestibulum scelerisque. Ut mollis a nisl vel
                              suscipit. Curabitur scelerisque placerat ultrices.
                              Proin purus ante, congue vel arcu ac, porta
                              condimentum mauris. Maecenas massa orci, fringilla
                              eget fermentum nec, dignissim nec diam.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>

                      <Card className="border border-secondary">
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="1"
                          className="first_text text-white"
                        >
                          Nulla porttitor eros ac ex tristique posuere
                        </Accordion.Toggle>
                        <Accordion.Collapse
                          eventKey="1"
                          className="back-color text-white"
                        >
                          <Card.Body className="text_body m-3">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nullam tincidunt arcu vel arcu fermentum,
                              eget accumsan dolor dignissim. Nam eget quam
                              semper, varius ligula sed, auctor augue. Maecenas
                              et porta magna. Nulla mattis tortor vitae metus
                              vestibulum scelerisque. Ut mollis a nisl vel
                              suscipit. Curabitur scelerisque placerat ultrices.
                              Proin purus ante, congue vel arcu ac, porta
                              condimentum mauris. Maecenas massa orci, fringilla
                              eget fermentum nec, dignissim nec diam.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>

                      <Card className="border border-secondary">
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="2"
                          className="first_text text-white"
                        >
                          Quisque fringilla tincidunt arcu
                        </Accordion.Toggle>
                        <Accordion.Collapse
                          eventKey="2"
                          className=" back-color text-white"
                        >
                          <Card.Body className="text_body m-3">
                            <p>
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nullam tincidunt arcu vel arcu fermentum,
                              eget accumsan dolor dignissim. Nam eget quam
                              semper, varius ligula sed, auctor augue. Maecenas
                              et porta magna. Nulla mattis tortor vitae metus
                              vestibulum scelerisque. Ut mollis a nisl vel
                              suscipit. Curabitur scelerisque placerat ultrices.
                              Proin purus ante, congue vel arcu ac, porta
                              condimentum mauris. Maecenas massa orci, fringilla
                              eget fermentum nec, dignissim nec diam.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>

                      <Card className="border border-secondary">
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="3"
                          className="first_text text-white"
                        >
                          Nam elementum lobortis purus a maximus tortor
                        </Accordion.Toggle>
                        <Accordion.Collapse
                          eventKey="3"
                          className="back-color text-white"
                        >
                          <Card.Body className="text_body m-3">
                            <p className="p_body">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nullam tincidunt arcu vel arcu fermentum,
                              eget accumsan dolor dignissim. Nam eget quam
                              semper, varius ligula sed, auctor augue. Maecenas
                              et porta magna. Nulla mattis tortor vitae metus
                              vestibulum scelerisque. Ut mollis a nisl vel
                              suscipit. Curabitur scelerisque placerat ultrices.
                              Proin purus ante, congue vel arcu ac, porta
                              condimentum mauris. Maecenas massa orci, fringilla
                              eget fermentum nec, dignissim nec diam.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </Col>

                  <Container />
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                  <Container />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Col>
    </Container>
  </section>
);
export default Doubts;
