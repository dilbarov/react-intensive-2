import React, { Component } from 'react';
import Link from './Link';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    height: 49px;
`;

class Header extends Component{
    render() {
        return (
            <Row>
                <Col lg={12}>
                    <nav>
                        <List>
                            <Link link="#" text="Вызов мастера"/>
                            <Link link="#" text="Прайс на ремон"/>
                            <Link link="#" text="Наши преимущества"/>
                            <Link link="#" text="Схема работы"/>
                            <Link link="#" text="Отзывы клиентов"/>
                            <Link link="#" text="Приемеры работ"/>
                            <Link link="#" text="Контакты"/>
                        </List>
                    </nav>
                </Col>
            </Row>
        )
    }
}

export default Header;