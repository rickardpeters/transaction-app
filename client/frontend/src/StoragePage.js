import StorageList from "./StorageList"
import TransactionList from "./TransactionList"
import { Container, Row, Col } from "react-bootstrap"

function StoragePage() {
    return (
        <Container fluid="lg">
            <Row>
                <Col>
                <StorageList />
                </Col>
                <Col>
                <TransactionList />
                </Col>
            </Row>
        </Container>
    )
}


export default StoragePage