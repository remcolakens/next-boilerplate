import styled from 'styled-components'
import { Cat } from '@/svgs'
import { Container, Row, Col, media } from 'styled-bootstrap-grid'

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;

  ${media.md`
    font-size: 50px;
  `}
`

export const Home: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col col xl={6} xs={12}>
          <Title>My page</Title>
        </Col>
        <Col col xl={6} xs={12}>
          <Cat />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
