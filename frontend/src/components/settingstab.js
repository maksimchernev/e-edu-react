import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Row, Col, Nav, Form, Button} from 'react-bootstrap';
import '../сss/myaccount.css'
import person from "../images/settingsTab/Person.png";

export const SettingsTab = (  {user} ) => {


	const firstName = user[Object.keys(user)[1]]
    const secondName = user[Object.keys(user)[2]]
    const lastName = user[Object.keys(user)[3]]
    const mail = user[Object.keys(user)[4]]

    return (
    <div className="container">
		<Row>
			<Col sm="12" className="title">
				<h1>Настройки</h1>
			</Col>
		</Row>
    	
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          	<Row>
	            <Col sm={3}>
	              <Nav variant="pills" className="flex-column">
	                <Nav.Item>
	                  <Nav.Link eventKey="first" className="tabsMyAcc">Аккаунт</Nav.Link>
	                </Nav.Item>
	                <Nav.Item>
	                  <Nav.Link eventKey="second" className="tabsMyAcc">Уведомления</Nav.Link>
	                </Nav.Item>
	              </Nav>
	            </Col>
	            <Col sm={9}>
	              	<Tab.Content>
		                <Tab.Pane eventKey="first">
		                	<div className="tab_content">
			                	<h3 className="h3Settings">Основная информация</h3>
			                	<form data-toggle="validator" className="formSettings">
		                        	<Row>
			                          	<Col sm="6">
				                            <div className="form-group has-feedback ">
				                                <input type="surname" className="form-control inputSettings" data-required-error="Поле не заполнено" placeholder={secondName} name="secondName" required/>
				                                <input type="name" className="form-control inputSettings" id="input-name" data-required-error="Поле не заполнено" placeholder={firstName} name="firstName" required/>
					                            <input type="lastname" className="form-control inputSettings" data-required-error="Поле не заполнено" placeholder={lastName} name="lastName"/>
				                                <input type="email" className="form-control inputSettings" id="email"
									               pattern="[_0-9a-z][-_.0-9a-z]*@[0-9a-z][-.0-9a-z]*[0-9a-z]\.[a-z]{2,}"
									               data-pattern-error="Поле должно соответствовать формату somebody@somewhere.com"
									               data-required-error="Поле не заполнено" placeholder={mail} name="mail" required/>
				                            </div>
											<Button variant="primary" type="submit" className="settingsButton">
												Сохранить изменения
											</Button>
			                          	</Col>
										<Col sm="6">
											<Row>
												<Col sm="5">
													<img src={person} rounded className="bigUserPhoto"/>
												</Col>
												<Col sm="4">
													<img src={person} rounded className="smallUserPhoto"/>
												</Col>
											</Row>
											<Row>
												<Col sm="5">
													<Button variant="primary" type="submit" className="settingsPhotoButton">
														Обновить
													</Button>
												</Col>
												<Col sm="4">
													<Button variant="primary" type="submit" className="settingsPhotoButton">
														Удалить
													</Button>
												</Col>
											</Row>
										</Col>
			                          	
			                        </Row>
			                    </form>
			                    <h3 className="h3Settings">Сменить пароль</h3>
			                	<form data-toggle="validator">
				                    <Row>
				                    	<Col sm="6">
											<div className="form-group has-feedback ">
												 <input type="password" className="form-control inputSettings" id="input-password" data-required-error="Поле не заполнено" placeholder="Пароль" name="password" />
												 <input type="password" className="form-control inputSettings" id="input-password" data-required-error="Поле не заполнено" placeholder="Новый пароль" name="password" />
												 <input type="password" className="form-control inputSettings" id="input-password" data-required-error="Поле не заполнено" placeholder="Повторите новый пароль" name="password" />
											</div>
											<Button variant="primary" type="submit" className="settingsButton">
												Сохранить изменения
											</Button>
				                        </Col>
			                        </Row>
			                    </form>
							</div>
		                </Tab.Pane>
		                <Tab.Pane eventKey="second">
		                	<div className="tab_content">
			                	<h3 className="h3Settings">Настройка уведомлений</h3>
			                	<Form>
								  <Form.Group controlId="formBasicCheckbox">
								    <Form.Check type="checkbox" label="Я хочу получать уведомления о начале избранных курсов по email" />
								  </Form.Group>
								  <Form.Group controlId="formBasicCheckbox">
								    <Form.Check type="checkbox" label="Я хочу получать уведомления о рекомендованных курсах по email" />
								  </Form.Group>
								  <Form.Group controlId="formBasicCheckbox">
								    <Form.Check type="checkbox" label="Я хочу получать уведомления о новых курсах, акциях и различных мероприятиях по email" />
								  </Form.Group>
								</Form>
								<Col sm={{ span: 5, offset: 7 }}>
									<Button variant="primary" type="submit" className="settingsRightButton">
										Сохранить изменения
									</Button>
								</Col>
							</div>
		                </Tab.Pane>
	              	</Tab.Content>
	            </Col>
          	</Row>
        </Tab.Container>
    </div>
    );
}