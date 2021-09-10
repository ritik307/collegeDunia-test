import "./styles.css";
function Card (props){
    return(
        <div className="card-container">
            <div className="header">
                
                <div className="tags-container">
                    <span className="tags">{props.tag}</span>
                    <span className="tags">{props.tagdist} away</span>
                </div>
                <div className="rating-container">
                    <div className="rating-div">
                        <p className="rating-content">{props.ratingnum}/5</p>
                        <p className="rating-content">{props.ratingremark}</p>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="left-div">
                    <h2 className="heading">{props.name}</h2>
                    <p className="college-addr">
                        {props.landmark} | <span className="sub-info">{props.dist} away</span>
                    </p>
                    <p className="extra-info">
                        93% Match : <span className="landmark-dist">2.5kms</span> <span className="sub-info">from GTB Nagar</span>,<span className="landmark-dist">7kms</span> <span className="sub-info">from GTB Nagar</span>
                    </p>
                </div>
                <div className="right-div">
                    <h2 className="price">₹ {props.fee}</h2>
                    <p className="sem-info">Per Semester (3months)</p>
                </div>
            </div>
            <div className="offer-description">
                <div className="offer-left">
                    <p className="">Flat <span className="extra-info">Rs2000</span> off + upto <span className="extra-info">Rs500</span> wallet! to  avail... <span className="login-btn">LOGIN</span></p> 
                </div>
                <div className="offer-right">
                    <p className="extra-info">Fee Cancellation . Free Wifi</p>
                </div>
            </div>
        </div>
    )
}
export default Card;