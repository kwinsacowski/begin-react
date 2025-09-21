import { useState} from "react";

function Subscribed({}){
    const [subscription, setEnrollment] = useState(false);
    return (
        <div className='subscriptionStatus'>
            <h1>Subscription Status</h1>
            <button onClick = {() => setEnrollment(!subscription)}>{subscription ? "Unsubscribed" : "Subscribe"}</button>
        </div>
            
    );
}


export default Subscribed;