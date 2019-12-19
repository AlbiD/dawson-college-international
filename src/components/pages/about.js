import React from "react";
import Image from "../../../static/assets/images/download.jpg";
import ImageSport from "../../../static/assets/images/sports.jpg";
import ImageOr from "../../../static/assets/images/campus.jpg";

export default function() {
    return(
        <div>
            <div className="backgrond-image">
                <div className="page-container-about">
                    <div className="content-wrapper-about">
                      <img src={Image} alt="school"/>
                      
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officiis saepe illum natus vitae, cum ab temporibus, fugit explicabo assumenda ut laboriosam quae placeat minima pariatur, porro atque quos soluta accusamus. Eaque at corporis labore sint aliquid magnam distinctio iusto. Dolore asperiores doloribus odio a obcaecati reiciendis magnam alias soluta voluptatum maxime omnis, sunt hic error aut? Provident voluptatem, asperiores aliquam, architecto aperiam obcaecati molestiae quaerat id eum sit necessitatibus voluptatibus eaque deleniti qui. Fuga laboriosam iure eligendi, distinctio nam velit corporis. In ad molestiae delectus molestias consectetur exercitationem eaque nam neque quidem sit dolore, illo eius esse repudiandae! Eum repudiandae inventore repellendus, tempora fuga laborum quibusdam sunt animi incidunt mollitia itaque magni cumque hic saepe, eos qui placeat nostrum! Repellendus minima laudantium quos quo at necessitatibus ea corrupti enim error eum adipisci, libero repellat ipsum similique neque in reprehenderit possimus quasi ad iste dolores. Aliquid laudantium hic distinctio, quasi repudiandae obcaecati corporis? Eaque pariatur excepturi magni reprehenderit rem impedit aperiam, repudiandae iure porro assumenda consequuntur. Molestias totam placeat commodi accusamus fugit, ad dolore eos exercitationem veniam quas ab nobis. Voluptatem illo assumenda vel praesentium libero unde amet molestiae mollitia debitis. Rerum laborum aut sunt sint, exercitationem odit? Recusandae, deserunt.</p>

                    </div>
                </div>
                


                <div className="squares-wrapper-about">
                    <div className="squares">
                            <div className="square">
                                    <div className="square-image">
                                       <img src={ImageSport} alt="sports"/>
                                    </div>

                                    <div className="square-text">
                                        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                                    
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex repellat corporis labore maxime at incidunt quibusdam illum tempore impedit laboriosam voluptatem voluptas dolorum expedita accusamus, earum in. Dolores dolor, accusantium iste explicabo blanditiis vero pariatur sapiente ipsum maxime quibusdam dolore repellat voluptatibus consectetur aliquam, magni quidem, nostrum ducimus quia quam?</p>
                                    </div>
                            </div>

                            <div className="square">
                                    <div className="square-text">
                                        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                                    
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex repellat corporis labore maxime at incidunt quibusdam illum tempore impedit laboriosam voluptatem voluptas dolorum expedita accusamus, earum in. Dolores dolor, accusantium iste explicabo blanditiis vero pariatur sapiente ipsum maxime quibusdam dolore repellat voluptatibus consectetur aliquam, magni quidem, nostrum ducimus quia quam?</p>
                                    </div>

                                    <div className="square-image">
                                       <img src={ImageOr} alt="orientation"/>
                                    </div>
                            </div>
                     </div>        
                </div>
            </div>
        </div>
    );
}