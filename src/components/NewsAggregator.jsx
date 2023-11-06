import React, { useState, useEffect } from 'react'
import './NewsAggregator.css'
import Recent from './images/recent-1.jpg'
import Recent2 from './images/recent-2.jpg'
import New1 from './images/new1.jpg'
import New2 from './images/new2.jpg'
import New3 from './images/new3.jpg'
import New4 from './images/new4.jpg'

const API_KEY = '6cbdef411b3b47529a17b5cf4667303b'

function NewsAggregator() {

    const [newsHeadlines, setNewsHeadlines] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedNews, setSelectedNews] = useState(null); // State for the selected news article

    useEffect(() => {
        if (searchTerm.trim() === '') {
            fetchTopHeadlines();
        } else {
            fetchNewsHeadlinesWithSearch();
        }
    }, [searchTerm]);

    const fetchTopHeadlines = () => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                setNewsHeadlines(data.articles);
            })
            .catch((error) => console.error('Error:', error));
    };

    const fetchNewsHeadlinesWithSearch = () => {
        fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                setNewsHeadlines(data.articles);
            })
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div>
            <div class="container-fluid paddding mb-5">
                <div class="row mx-0">
                    <div class="col-md-6 col-12 paddding animate-box" data-animate-effect="fadeIn">
                        <div class="fh5co_suceefh5co_height"><img src={New2} alt="img" />
                            <div class="fh5co_suceefh5co_height_position_absolute"></div>
                            <div class="fh5co_suceefh5co_height_position_absolute_font">
                                <div class=""><a href="#" class="color_fff"> <i class="fa fa-clock-o"></i>&nbsp;&nbsp;Dec 31,2017
                                </a></div>
                                <div class=""><a href="single.html" class="fh5co_good_font"> After all is said and done, more is said than done </a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
                                <div class="fh5co_suceefh5co_height_2"><img src={New3} alt="img" />
                                    <div class="fh5co_suceefh5co_height_position_absolute"></div>
                                    <div class="fh5co_suceefh5co_height_position_absolute_font_2">
                                        <div class=""><a href="#" class="color_fff"> <i class="fa fa-clock-o"></i>&nbsp;&nbsp;Nov
                                            7,2023 </a></div>
                                        <div class=""><a href="single.html" class="fh5co_good_font_2"> After all is said and done, <br />more is said than done </a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
                                <div class="fh5co_suceefh5co_height_2"><img src={New4} alt="img" />
                                    <div class="fh5co_suceefh5co_height_position_absolute"></div>
                                    <div class="fh5co_suceefh5co_height_position_absolute_font_2">
                                        <div class=""><a href="#" class="color_fff"> <i class="fa fa-clock-o"></i>&nbsp;&nbsp;Nav 7,2023 </a></div>
                                        <div class=""><a href="single.html" class="fh5co_good_font_2"> After all is said and done... </a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
                                <div class="fh5co_suceefh5co_height_2"><img src={New1} alt="img" />
                                    <div class="fh5co_suceefh5co_height_position_absolute"></div>
                                    <div class="fh5co_suceefh5co_height_position_absolute_font_2">
                                        <div class=""><a href="#" class="color_fff"> <i class="fa fa-clock-o"></i>&nbsp;&nbsp;Oct
                                            28,2017 </a></div>
                                        <div class=""><a href="single.html" class="fh5co_good_font_2"> After all is said and done, more is said than done </a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
                                <div class="fh5co_suceefh5co_height_2"><img src={Recent2} alt="img" />
                                    <div class="fh5co_suceefh5co_height_position_absolute"></div>
                                    <div class="fh5co_suceefh5co_height_position_absolute_font_2">
                                        <div class=""><a href="#" class="color_fff"> <i class="fa fa-clock-o"></i>&nbsp;&nbsp;Oct
                                            28,2017 </a></div>
                                        <div class=""><a href="single.html" class="fh5co_good_font_2"> After all is said and done, more is said... </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='news_container'>
                <div className=''>
                    <h1>Tranding</h1>
                    <div className="news_icons">
                    <i class="fas fa-chevron-circle-left"></i>
                    <i class="fas fa-chevron-circle-right"></i>
                    </div>
                </div>
                <div className="content_news">
                    {newsHeadlines
                        .slice(0, 7) 
                        .map((news, index) => (
                            <div className='news_card' key={news.id}>
                                <img
                                    className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                                    src={news.urlToImage || 'placeholder.jpg'}
                                    alt="News"
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default NewsAggregator











