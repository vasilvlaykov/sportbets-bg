import React from 'react'
import { Column, Container, Link, Row, Title, Wrapper } from '../components/Footer/styles/footer'

function FooterContainer() {
    return (
        <Container>
            <Wrapper>
                <Row>
                    <Column>
                        <Title>About Us</Title>
                        <Link href="#">Story</Link>
                        <Link href="#">Client</Link>
                    </Column>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default FooterContainer
