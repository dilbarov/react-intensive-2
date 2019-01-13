import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import Slider from './Slider'

const Repair = styled.div`
    color: #ffffff;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    
    span {
        display: block;
        font-size: 24px;
        line-height: 30px;
    }
`;
const LightText = styled.div`
    color: #ffffff;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    margin-top: 54px;
`;
const Button = styled.button`
    width: 245px;
    height: 64px;
    background-color: #ffa14b;
    border-radius: 32px;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    margin-top: 32px;
`;

class Main extends Component{
    render() {
        return (
            <Row>
                <Col lg={5}>
                    <Repair>
                        Качественный ремонт
                        <span>iphone за 35 минут и гарантия 1 год</span>
                    </Repair>
                    <LightText>
                        Оставьте заявку на бесплатную диагностику без очереди,
                        и получите защитное стекло, стоимостью 1000 рублей,
                        с установкой в подарок!
                    </LightText>
                    <Button>Отправить заявку!</Button>
                </Col>
                <Col lg={6} lgOffset={1}>
                    <Slider />
                </Col>
            </Row>
        )
    }
}

export default Main;