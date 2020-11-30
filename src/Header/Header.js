import './Header.css'

function Header(props) {
    return (
        <div className="Header">
            <div>
                <h3>{props.item}</h3>
            </div>
            <div>
                <h3>{props.inventory}</h3>
            </div>
            <div>
                <h3>{props.cost}</h3>
            </div>
        </div>
    )

}
export default Header;