import React from 'react'
import Logo from './images/logo.svg'

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
                            <img src={Logo} alt="img" classNameName="fh5co_logo_width" />
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

            <div className="container-fluid bg-faded fh5co_padd_mediya padding_786">
                <div className="container padding_786">
                    <nav className="navbar navbar-toggleable-md navbar-light ">
                        <button className="navbar-toggler navbar-toggler-right mt-3" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation"><span className="fa fa-bars"></span></button>
                        <a className="navbar-brand" href="#"><img src="images/logo.png" alt="img" className="mobile_logo_width" /></a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="blog.html">Blog <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="single.html">Single <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton2" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">World <span className="sr-only">(current)</span></a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink_1">
                                        <a className="dropdown-item" href="#">Action in</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton3" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">Community<span className="sr-only">(current)</span></a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink_1">
                                        <a className="dropdown-item" href="#">Action in</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="Contact_us.html">Contact <span className="sr-only">(current)</span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar