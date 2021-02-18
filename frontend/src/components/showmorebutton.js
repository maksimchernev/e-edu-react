import React, { useState } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';

export const  ButtonShowMore =() => {
    const [count, setCount] = useState(6);
    return(
       <div>
           <Row className="showMoreBlock">
              <Col sm={{ span: 2, offset: 5 }} className="my-auto">
                <Button onClick={() => setCount(count + 6)} className="showMoreButton" /*//BUG: [ER-14] При нажатии кнопки ничего не происходит (кнопка остаётся нажатой)*/>Показать больше</Button>
              </Col>
            </Row>
       </div>
    );
  }