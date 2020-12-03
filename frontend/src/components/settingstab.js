import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Row, Col, Nav, Form, Button} from 'react-bootstrap';

export const SettingsTab = () => {
    return (
    <div class="container">
    	<h1>Настройки</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          	<Row>
	            <Col sm={3}>
	              <Nav variant="pills" className="flex-column">
	                <Nav.Item>
	                  <Nav.Link eventKey="first">Аккаунт</Nav.Link>
	                </Nav.Item>
	                <Nav.Item>
	                  <Nav.Link eventKey="second">Уведомления</Nav.Link>
	                </Nav.Item>
	              </Nav>
	            </Col>
	            <Col sm={9}>
	              	<Tab.Content>
		                <Tab.Pane eventKey="first">
		                	<div class="tab_content">
			                	<h3>Основная информация</h3>
			                	<form data-toggle="validator">
		                        	<Row>
			                          	<Col>
				                            <div className="form-group has-feedback ">
				                            	<h5>Фамилия</h5>
				                                <input type="surname" className="form-control" data-required-error="Поле не заполнено" placeholder="Фамилия" name="secondName" required/>
				                            	<h5>Имя</h5>
				                                <input type="name" class="form-control" id="input-name" data-required-error="Поле не заполнено" placeholder="Имя" name="firstName" required/>
				                                <h5>Отчество</h5>
					                            <input type="Lastname" className="form-control" data-required-error="Поле не заполнено" placeholder="Отчество(если есть)" name="lastName"/>
				                                <h5>EMAIL</h5>
				                                <input type="email" className="form-control" id="email"
									               pattern="[_0-9a-z][-_.0-9a-z]*@[0-9a-z][-.0-9a-z]*[0-9a-z]\.[a-z]{2,}"
									               data-pattern-error="Поле должно соответствовать формату somebody@somewhere.com"
									               data-required-error="Поле не заполнено" placeholder="Адрес почты" name="mail" required/>
				                            </div>
			                          	</Col>
			                          	<Col>
				                            <div className="form-group has-feedback">
				                                <img
											      	className="d-block w-100"
											      	src=""
											      	alt="Photo"
											    />
				                            </div>
			                          	</Col>
			                          	<Col>
				                            <div className="form-group has-feedback">
					                            <Button variant="outline-secondary">Удалить фотографию</Button>{' '}
					                            <Button variant="outline-secondary">Обновить фотографию</Button>
				                            </div>
			                          	</Col>
			                        </Row>
			                    </form>
			                    <h3>Сменить пароль</h3>
			                	<form data-toggle="validator">
				                    <Row>
				                    	<Col>
				                            <h5>Текущий пароль</h5>
				                            <input type="password" className="form-control" id="input-password" data-required-error="Поле не заполнено" placeholder="Password" name="password" />
				                        </Col>
				                        <Col>
				                            <h5>Новый пароль</h5>
				                            <input type="password" className="form-control" id="input-password" data-required-error="Поле не заполнено" placeholder="Password" name="password" />
				                        </Col>
				                        <Col>
				                            <h5>Повторите пароль</h5>
				                            <input type="password" className="form-control" id="input-password" data-required-error="Поле не заполнено" placeholder="Password" name="password" />
				                        </Col>
				                        <Col>
				                        	<Button variant="outline-secondary">Сохранить изменения</Button>
				                        </Col>
			                        </Row>
			                    </form>
							</div>
		                </Tab.Pane>
		                <Tab.Pane eventKey="second">
		                	<div class="tab_content">
			                	<h3>Настройка уведомлений</h3>
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
								<Button variant="primary" type="submit">
							    	Сохранить изменения
								</Button>
							</div>
		                </Tab.Pane>
	              	</Tab.Content>
	            </Col>
          	</Row>
        </Tab.Container>
    </div>
    );
}