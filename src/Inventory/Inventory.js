import './Inventory.css'

function Inventory(props) {
    return (
        <div className="inventory">
            <div>
                <h4>{props.item}</h4>
            </div>
            <div>
                <p>{props.count}</p>
            </div>
            <div>
                <p>{props.cost}</p>
            </div>
        </div>
    )

}
export default Inventory;