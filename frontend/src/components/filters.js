import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton, Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';


export const  Filters =() => {
      return(
        <div>
          <div className="courseFilters" fluid>
            <Container>
              <Row>
                <Col xs={2}>
                  <Row className="rowFilters">
                    <DropdownButton variant="light" id="dropdown-basic-button" title="Язык" >
                      <Dropdown.Item href="#/action-1">Английский</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Русский</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Китайский</Dropdown.Item>
                    </DropdownButton>
                  </Row>
                  <Row className="rowFilters">
                    <DropdownButton variant="light" id="dropdown-basic-button" title="Формат" >
                      <Dropdown.Item href="#/action-1">Онлайн</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Оффлайн</Dropdown.Item>
                    </DropdownButton>
                  </Row>
                </Col>
                <Col xs={2}>
                  <Row className="rowFilters">
                    <DropdownButton variant="light" id="dropdown-basic-button" title="Категория">
                    <Dropdown.Item href="#/action-1">Бесплатные</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Для начинающих</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Веб-разработка</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Разработка программ</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Веб-дизайн</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Мобильная разработка</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Разработка игр</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Кибербезопасность</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Data Science</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Тестирование</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Интернет-маркетинг</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Системное администрирование</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">GeekClub</Dropdown.Item>
                  </DropdownButton>
                  </Row>
                  <Row className="rowFilters">
                    <DropdownButton variant="light" id="dropdown-basic-button" title="Направление">
                      <Dropdown.Item href="#/action-1">Английский</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Русский</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Китайский</Dropdown.Item>
                    </DropdownButton>
                  </Row>
                </Col>
                <Col xs={2}>
                  <Row className="rowFilters">
                    <DropdownButton variant="light" id="dropdown-basic-button" title="Платформа">
                      <Dropdown.Item href="#/action-1">SkillBox</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">GeekFactory</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Coursera</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Skillfactory</Dropdown.Item>
                    </DropdownButton>
                  </Row>
                  <Row className="rowFilters">
                    <InputGroup className="mb-3">
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
                    <DropdownButton variant="light" id="dropdown-basic-button" title="Варианты профессий">
                      <Dropdown.Item href="#/action-1">Английский</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Русский</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Китайский</Dropdown.Item>
                    </DropdownButton>
                  </Row>
                  <Row className="rowFilters">
                    <InputGroup className="mb-3">
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
                    <DropdownButton variant="light" id="dropdown-basic-button" title="Продолжительность">
                      <Dropdown.Item href="#/action-1">2 - 6 часов</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">1 - 4 дней</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">1 - 3 месяца</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Более 3 месяцев</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Бессрочно</Dropdown.Item>
                    </DropdownButton>
                  </Row>
                  <Row className="rowFilters">
                    <DropdownButton variant="light" id="dropdown-basic-button" title="Основные навыки">
                      <Dropdown.Item href="#/action-1">Skill 1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Skill 2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Skill 3</Dropdown.Item>
                    </DropdownButton>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      );
    } 


