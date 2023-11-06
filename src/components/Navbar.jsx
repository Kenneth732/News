import React from 'react'

function Navbar() {
    return (
        <div>
            <div classNameName="container-fluid fh5co_header_bg">
                <div classNameName="container">
                    <div classNameName="row">
                        <div classNameName="col-12 fh5co_mediya_center"><a href="#" classNameName="color_fff fh5co_mediya_setting"><i
                            classNameName="fa fa-clock-o"></i>&nbsp;&nbsp;&nbsp;Friday, 5 January 2018</a>
                            <div classNameName="d-inline-block fh5co_trading_posotion_relative"><a href="#" classNameName="treding_btn">Trending</a>
                                <div classNameName="fh5co_treding_position_absolute"></div>
                            </div>
                            <a href="#" classNameName="color_fff fh5co_mediya_setting">Instagram’s big redesign goes live with black-and-white app</a>
                        </div>
                    </div>
                </div>
            </div>

            <div classNameName="container-fluid">
                <div classNameName="container">
                    <div classNameName="row">
                        <div classNameName="col-12 col-md-3 fh5co_padding_menu">
                            <img src="images/logo.png" alt="img" classNameName="fh5co_logo_width" />
                        </div>
                        <div classNameName="col-12 col-md-9 align-self-center fh5co_mediya_right">
                            <div classNameName="text-center d-inline-block">
                                <a classNameName="fh5co_display_table"><div classNameName="fh5co_verticle_middle"><i classNameName="fa fa-search"></i></div></a>
                            </div>
                            <div classNameName="text-center d-inline-block">
                                <a classNameName="fh5co_display_table"><div classNameName="fh5co_verticle_middle"><i classNameName="fa fa-linkedin"></i></div></a>
                            </div>
                            <div classNameName="text-center d-inline-block">
                                <a classNameName="fh5co_display_table"><div classNameName="fh5co_verticle_middle"><i classNameName="fa fa-google-plus"></i></div></a>
                            </div>
                            <div classNameName="text-center d-inline-block">
                                <a href="https://twitter.com/fh5co" target="_blank" classNameName="fh5co_display_table"><div classNameName="fh5co_verticle_middle"><i classNameName="fa fa-twitter"></i></div></a>
                            </div>
                            <div classNameName="text-center d-inline-block">
                                <a href="https://fb.com/fh5co" target="_blank" classNameName="fh5co_display_table"><div classNameName="fh5co_verticle_middle"><i classNameName="fa fa-facebook"></i></div></a>
                            </div>
                            {/* <!--<div classNameName="d-inline-block text-center"><img src="images/country.png" alt="img" classNameName="fh5co_country_width" /></div>--> */}
                            <div classNameName="d-inline-block text-center dd_position_relative ">
                                <select classNameName="form-control fh5co_text_select_option">
                                    <option>English </option>
                                    <option>French </option>
                                    <option>German </option>
                                    <option>Spanish </option>
                                </select>
                            </div>
                            <div classNameNameName="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>

   
        </div>
    )
}

export default Navbar