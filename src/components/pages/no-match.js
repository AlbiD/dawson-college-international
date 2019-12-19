import React from'react';
import Link from "react-router-dom";

export default function() {
    return(
        <div>
            <h2>We coudn`t find that page</h2>

            <Link to="/">return to homepage</Link>
        </div>
    );
}