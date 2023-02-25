import StorageList from "../components/StorageList"
import TransactionList from "../components/TransactionList"
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