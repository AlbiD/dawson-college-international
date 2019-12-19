import React from "react";
import Email from "emailjs-com";

export default class extends React.Component {

    render() {  
    return(
        <div className="backgrond-image">
            <form action="POST" data-netlify="true">
                <div className="field half">
                        <input type="text" name="name" id="name" placeholder="Name" />
                </div>

                <div className="field half">
                        <input type="email" name="email" id="email" placeholder="Email" />
                </div>

                <div class="field">
                        <textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
                </div>

                <div className="field">
                        <input type="file" name="myfile" id="myfile" placeholder="Uploud File" rows="7"/>
                </div>

                <div
                        data-netlify-recaptcha="true">
                </div>
                <ul class="actions">
									<li><input type="submit" value="Send Message" class="button primary" /></li>
								</ul>
            </form>
        </div>
    );
}
}