import React from "react";

import hellyerCat from "../../shared/Images/hellYeahCat.png";
import "./Racing.css";

function Racing() {
    return (
        <div className="racing-content">
        {/* not pulling from css rn */}
            <img src={hellyerCat} alt="Hellyer Cat" />
        </div>

    )
}

export default Racing;


// For now, the race tab should just be the link to Square: https://hellyervelodrome.square.site/training-sessions
//Maybe have links to results on the page and we can import the race flyer carousel?
//Both should have a link to waivers. Race might have upgrade info too. But, that can be in info only?
//Should also implament ontheday.net for current results.
