import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Row, Col, Nav, Form, Button} from 'react-bootstrap';
import person from "../images/settingsTab/Person.png";
import "../сss/settingstab.css";


export const SettingsTab = (  {user} ) => {


	const firstName = user[Object.keys(user)[2]]		//BUG: [ER-11] Некорректные номера полей
    const secondName = user[Object.keys(user)[3]]
    const lastName = user[Object.keys(user)[4]]
    const mail = user[Object.keys(user)[5]]
    const FIO = secondName + ' ' + firstName + ' ' + lastName
    return (
        <div className="container">
            <Row>
                <Col sm="12" className="title">
                    <h1>Настройки</h1>
                    <h3 className="h3Settings">Основная информация</h3>
                    <form data-toggle="validator" className="formSettings">
                                        <Row>
                                            <Col sm="6">
                                                <div className="form-group has-feedback ">
                                                    <input type="surname" className="form-control inputSettings" data-required-error="Поле не заполнено" placeholder={FIO } name="secondName" required/>
                                                    <input type="name" className="form-control inputSettings" id="nickname" data-required-error="Поле не заполнено" placeholder="Никнейм" name="nickname" required/>
                                                    <input type="email" className="form-control inputSettings" id="email"
                                                       pattern="[_0-9a-z][-_.0-9a-z]*@[0-9a-z][-.0-9a-z]*[0-9a-z]\.[a-z]{2,}"
                                                       data-pattern-error="Поле должно соответствовать формату somebody@somewhere.com"
                                                       data-required-error="Поле не заполнено" placeholder={mail} name="mail" required/>
                                                </div>

                                            </Col>
                                            <Col sm="6">
                                                <Row>
                                                    <Col sm="5">
                                                        <img src={person} rounded id="photo" className="bigUserPhoto"/>
                                                    </Col>
                                                    <Col sm="4">
                                                        <img src={person} rounded id="photo" className="smallUserPhoto"/>
                                                    </Col>
                                                </Row>

                                            </Col>
                                        </Row>
                                        <Row id="buttons">
                                          <Col sm="6">
                                                <Button variant="dark" type="submit" className="settingsButton" /*//ISSUE: [ER-10]Кнопка не сохраняет настройки*/>
                                                    Сохранить
                                                </Button>
                                          </Col>
                                          <Col sm="6">
                                              <Button variant="dark" type="submit" id="ph-btn-1" className="settingsPhotoButton" /*//TODO: [ER-13] Добавить функционал кнопкам*/>
                                                Обновить фото
                                              </Button>

                                              <Button variant="dark" type="submit" id="ph-btn-2" className="settingsPhotoButton" /*//TODO: [ER-13] Добавить функционал кнопкам*/>
                                                Удалить фото
                                              </Button>
                                          </Col>
                                        </Row>
                    </form>
                    <h3 className="h3Settings">Уведомления</h3>
                    <Form>
                          <Form.Group controlId="startOfSelectedCoursesCheckbox">
                            <Form.Check type="checkbox" id="startOfSelectedCoursesCheckbox" label="Получать уведомления о начале избранных курсов по e-mail" />
                          </Form.Group>
                           <Form.Group controlId="recommendedCoursesCheckbox">
                               <Form.Check type="checkbox" id="recommendedCoursesCheckbox" label="Получать уведомления о рекомендуемых курсах по e-mail" />
                           </Form.Group>
                            <Form.Group controlId="newCoursesCheckbox">
                                <Form.Check type="checkbox" id="newCoursesCheckbox" label="Получать уведомления о новых курсах, акциях, мероприятиях по e-mail" />
                            </Form.Group>
                    </Form>
                </Col>
                <Col sm="6">
                    <Button variant="dark" className="settingsButton" /*//BUG: [ER-14] При нажатии кнопки ничего не происходит (кнопка остаётся нажатой)*/>
                        Сохранить
                    </Button>
                </Col>
            </Row>
        </div>
    );
}