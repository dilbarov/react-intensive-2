import React, { Component } from 'react';
import Links from './Links';
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
        const array = [
            {name:"Вызов мастера",link:"#",id:"1"},
            {name:"Прайс на ремонт",link:"#",id:"2"},
            {name:"Наши преимущества",link:"#",id:"3"},
            {name:"Схема работы",link:"#",id:"4"},
            {name:"Отзывы клиентов",link:"#",id:"5"},
            {name:"Приемеры работ",link:"#",id:"6"},
            {name:"Контакты",link:"#",id:"7"}
        ];
        return (
            <Row>
                <Col lg={12}>
                    <nav>
                        <List>
                            {/*<Link link="#" text="Вызов мастера"/>*/}
                            {/*<Link link="#" text="Прайс на ремонт"/>*/}
                            {/*<Link link="#" text="Наши преимущества"/>*/}
                            {/*<Link link="#" text="Схема работы"/>*/}
                            {/*<Link link="#" text="Отзывы клиентов"/>*/}
                            {/*<Link link="#" text="Приемеры работ"/>*/}
                            {/*<Link link="#" text="Контакты"/>*/}

                            <Links links={array}/>
                        </List>
                    </nav>
                </Col>
            </Row>
        )
    }
}

export default Header;