import StorageList from "./StorageList"
import TransactionList from "./TransactionList"

function StoragePage() {
    return (
        <div style={{display: "flex", flexDirection:"row"}}>
            <StorageList />    
            <TransactionList />
        </div>
    )
}


export default StoragePage