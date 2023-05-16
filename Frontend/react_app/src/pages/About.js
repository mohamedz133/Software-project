import React from "react";
import "./css/all.min.css";
import "./css/world.css";
import "./css/normalize.css";
import Ibrahim_Elsheikh from "../imgs/Ibrahim_Elsheikh.jpg";
import Mohamed_Zaki from "../imgs/Mohamed_Zaki.jpg";
import Ahmed_Eida from "../imgs/Ahmed_Eida.png";
import Mohamed_Abohend from "../imgs/Mohamed_Abohend.jpg";
import Mohamed_Essam from "../imgs/Mohamed_Essam.png";
import Mohamed_fekry from "../imgs/Mohamed_Fekry.jpg";
import Omer_Elbaz from "../imgs/Omer_Elbaz.png";



function About() {
    return (
        <div className="team" id="team">
            <h2 class="main-title">Team Members</h2>
            <div class="container">
                <div class="box">
                    <div className="data">
                        <img src={Ibrahim_Elsheikh} alt=""/>
                        <div class="social">
                            <a href="https://www.facebook.com/ibrahelsheikh" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/ibrahelsheikh/" target="_blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/ibrahelsheikh/" target="_blank">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/ibrahelsheikh" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div class="info">
                        <h3>Ibrahim Elsheikh</h3>
                        <p>Frontend</p>
                    </div>
                </div>

                <div class="box">
                    <div class="data">
                        <img src={Mohamed_Zaki} alt=""/>
                        <div class="social">
                            <a href="https://www.facebook.com/profile.php?id=100061866082752"
                               target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/mohamed27496401" target="_blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/the-engineer-1b033a266/" target="_blank">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/pythonmad" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>

                    <div class="info">
                        <h3>Mohamed Zaki</h3>
                        <p>Frontend</p>
                    </div>
                </div>
                <div class="box">
                    <div class="data">
                        <img src={Ahmed_Eida} alt=""/>
                        <div class="social">
                            <a href="https://www.facebook.com/profile.php?id=100006536280657" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/ahmed-eida-24998125b/" target="_blank">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/ahmedeida77" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div class="info">
                        <h3>Ahmed Eida</h3>
                        <p>Frontend</p>
                    </div>
                </div>

                <div class="box">
                    <div class="data">
                        <img src={Mohamed_Abohend} alt=""/>
                        <div class="social">
                            <a href="#">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/abohend/" target="_blank">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/Abohend" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div class="info">
                        <h3>Mohamed Abohend</h3>
                        <p>Backend</p>
                    </div>
                </div>

                <div class="box">
                    <div class="data">
                        <img src={Mohamed_fekry} alt=""/>
                        <div class="social">
                            <a href="#">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/Mohammedfekri" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div class="info">
                        <h3>Mohamed Fekry</h3>
                        <p>Backend</p>
                    </div>
                </div>
                <div class="box">
                    <div class="data">
                        <img src={Mohamed_Essam} alt=""/>
                        <div class="social">
                            <a href="https://www.facebook.com/profile.php?id=100009035405075"
                               target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/MHMD-ELSHORBAGY" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div class="info">
                        <h3>Mohamed Essam</h3>
                        <p>Backend</p>
                    </div>
                </div>
                <div class="box">
                    <div class="data">
                        <img src={Omer_Elbaz} alt=""/>
                        <div class="social">
                            <a href="https://www.facebook.com/Omar.Albaz001" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/Omar_Albaz_?s=09" target="_blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/omar-albaz-720b15230/" target="_blank">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/OmarZoOoka" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div class="info">
                        <h3>Omer Elbaz</h3>
                        <p>Backend</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
