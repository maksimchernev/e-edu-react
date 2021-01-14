import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import React  from 'react';
import '../сss/filters.css'

export const  Filters =() => {
      return(
        <div >
          <div className="courseFilters" fluid>
            <Container>
              <Row>
                <Col xs={2}>
                  <Row className="rowFilters">
                    <select className="browser-default custom-select">
                      <option value="" selected disabled hidden>Язык</option>
                      <option value="1">Английский</option>
                      <option value="2">Русский</option>
                      <option value="3">Китайский</option>
                    </select>
                  </Row>
                  <Row className="rowFilters">
                    <select className="browser-default custom-select">
                      <option value="" selected disabled hidden>Формат</option>
                      <option value="1">Онлайн</option>
                      <option value="2">Оффлайн</option>
                    </select>
                  </Row>
                </Col>
                <Col xs={2}>
                  <Row className="rowFilters">
                    <select className="browser-default custom-select">
                      <option value="" selected disabled hidden>Категория</option>
                      <option value="1">Бесплатные</option>
                      <option value="2">Для начинающих</option>
                      <option value="3">Веб-разработка</option>
                      <option value="4">Разработка программ</option>
                      <option value="5">Веб-дизайн</option>
                      <option value="6">Мобильная разработка</option>
                      <option value="7">Разработка игр</option>
                      <option value="8">Кибербезопасность</option>
                      <option value="9">Data Science</option>
                      <option value="10">Тестирование</option>
                      <option value="11">Интернет-маркетинг</option>
                      <option value="12">Системное администрирование</option>
                      <option value="13">GeekClub</option>
                    </select>
                  </Row>
                  <Row className="rowFilters">
                    <select className="browser-default custom-select">
                      <option value="" selected disabled hidden>Направление</option>
                      <option value="1">Направление 1</option>
                      <option value="2">Направление 2</option>
                    </select>
                  </Row>
                </Col>
                <Col xs={2}>
                  <Row className="rowFilters">
                      <select className="browser-default custom-select">
                          <option value="" selected disabled hidden>Платформа</option>
                          <option value="1">SkillBox</option>
                          <option value="2">GeekFactory</option>
                          <option value="3">Coursera</option>
                          <option value="4">Skillfactory</option>
                        </select>
                  </Row>
                  <Row className="rowFilters">
                    <InputGroup>
                      <FormControl
                        placeholder="Цена от"
                        aria-label="priceFrom"
                        aria-describedby="basic-addon1"
                      />
                      <InputGroup.Append>
                        <InputGroup.Text id="basic-addon1">₽</InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </Row>
                </Col>
                <Col xs={3}>
                  <Row className="rowFilters">
                    <select className="browser-default custom-select">
                          <option value="" selected disabled hidden>Варианты профессий</option>
                          <option value="1">Профессия 1</option>
                          <option value="2">Профессия 2</option>
                    </select>
                  </Row>
                  <Row className="rowFilters">
                    <InputGroup>
                      <FormControl
                        placeholder="Цена до"
                        aria-label="priceTo"
                        aria-describedby="basic-addon1"
                      />
                      <InputGroup.Append>
                        <InputGroup.Text id="basic-addon1">₽</InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </Row>
                </Col>
                <Col xs={2}>
                  <Row className="rowFilters">
                    <select className="browser-default custom-select">
                          <option value="" selected disabled hidden>Продолжительность</option>
                          <option value="1">2 - 6 часов</option>
                          <option value="2">1 - 4 дней</option>
                          <option value="3">1 - 3 месяца</option>
                          <option value="4">Более 3 месяцев</option>
                          <option value="5">Бессрочно</option>
                    </select>
                  </Row>
                  <Row className="rowFilters">
                    <select className="browser-default custom-select">
                          <option value="" selected disabled hidden>Основные навыки</option>
                          <option value="1">Skill 1</option>
                          <option value="2">Skill 2</option>
                          <option value="3">Skill 3</option>
                    </select>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      );
    } 


