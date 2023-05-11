import React  from "react";

function Navigation(){
    return(
    <!-- Start Header -->
    <header>
        <a href="#" class="logo">World</a>
        <nav>
            <ul>
                <li>
                    <a href="#articles">articles</a>
                </li>
                <li>
                    <a href="#gallery">gallery</a>
                </li>
                <li>
                    <a href="#features">features</a>
                </li>
                <li>
                    <a href="#">other links</a>
                    <!-- Start Megamenu -->
                    <div class="mega-menu">
                        <div class="image">
                            <img src="./imgs/megamenu.png" alt="Image Not Found" />
                        </div>
                        <ul class="links">
                            <li>
                                <a href="#testimonials">
                                    <i class="far fa-comments fa-fw"></i> Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#team">
                                    <i class="far fa-user fa-fw"></i> Team Members
                                </a>
                            </li>
                            <li>
                                <a href="#services">
                                    <i class="far fa-building fa-fw"></i> Services
                                </a>
                            </li>
                            <li>
                                <a href="#our-skills">
                                    <i class="far fa-check-circle fa-fw"></i> Our Skills
                                </a>
                            </li>
                            <li>
                                <a href="#work-steps">
                                    <i class="far fa-clipboard fa-fw"></i> How It Works
                                </a>
                            </li>
                        </ul>
                        <ul class="links">
                            <li>
                                <a href="#events">
                                    <i class="far fa-calendar-alt fa-fw"></i> Events
                                </a>
                            </li>
                            <li>
                                <a href="#pricing">
                                    <i class="fas fa-server fa-fw"></i> Pricing Plans
                                </a>
                            </li>
                            <li>
                                <a href="#video">
                                    <i class="far fa-play-circle fa-fw"></i> Top Videos
                                </a>
                            </li>
                            <li>
                                <a href="#stats">
                                    <i class="far fa-chart-bar fa-fw"></i> Stats
                                </a>
                            </li>
                            <li>
                                <a href="#discount">
                                    <i class="fas fa-percent fa-fw"></i> Request A Discount
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- End Megamenu -->
                </li>
            </ul>
        </nav>
    </header>
    <!-- End Header -->
    );

}

