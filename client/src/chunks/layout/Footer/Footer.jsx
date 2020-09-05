import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
            <div className="footer-wrap container">
                <div className="footer-row">
                    <nav className="nav-col">
                        <h4 className="nav-title">Tools</h4>
                        <ul>
                            <li className="nav-item lvl1"><NavLink to="/" className="nav-link" target="_self">Job search</NavLink></li>
                            <li className="nav-item lvl1"><NavLink to="/profile/" className="nav-link" target="_self">Profile</NavLink></li>
                            <li className="nav-item lvl1"><NavLink to="" rel="nofollow" className="nav-link" target="_blank">Recommended jobs</NavLink></li>
                            <li className="nav-item lvl1"><NavLink to="" rel="nofollow" className="nav-link" target="_blank">Saved searches</NavLink></li>
                            <li className="nav-item lvl1"><NavLink to="" rel="nofollow" className="nav-link" target="_blank">Saved jobs</NavLink></li>
                            <li className="nav-item lvl1"><NavLink to="" rel="nofollow" className="nav-link" target="_blank">Applied jobs</NavLink></li>
                            <li className="nav-item lvl1"><NavLink to="/career-advice/" className="nav-link" target="_blank">Career Advice</NavLink>
                            </li>
                            <li className="nav-item lvl1">
                                <input type="checkbox" id="DownloadAppsToggle" className="nav-ckeckbox" />
                                <label className="nav-label" htmlFor="DownloadAppsToggle">Download apps<span className="ibox"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024" focusable="false"><path d="M945 305l78 67-510 524L3 372l75-69 435 451 432-449z"></path></svg></span></label>
                                <ul className="nav-list">
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">iOS</NavLink></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Android</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item lvl1">
                                <input type="checkbox" id="PartnerSitesToggle" className="nav-ckeckbox" />
                                <label className="nav-label" htmlFor="PartnerSitesToggle">SEEK sites<span className="ibox"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024" focusable="false"><path d="M945 305l78 67-510 524L3 372l75-69 435 451 432-449z"></path></svg></span></label>
                                <ul className="nav-list">
                                    <li className="nav-item lvl2"><NavLink to="" className="nav-link" target="_self">Employer site</NavLink></li>
                                    <li className="nav-item lvl2"><NavLink to="" className="nav-link" target="_self">SEEK AU</NavLink></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Courses</NavLink></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Business for sale</NavLink></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Volunteering</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <nav className="nav-col">
                        <h4 className="nav-title">Company</h4>
                        <ul>
                            <li className="nav-item lvl1"><NavLink to="/about/" className="nav-link" target="_self">About SEEK</NavLink></li>
                            <li className="nav-item lvl1"><NavLink to="/about/news" className="nav-link" target="_self">Newsroom</NavLink></li>
                            <li className="nav-item lvl1"><NavLink to="/about/investors/" className="nav-link" target="_self">Investors</NavLink></li>
                            <li className="nav-item lvl1">
                                <input type="checkbox" id="InternationalPartnersToggle" className="nav-ckeckbox" />
                                <label className="nav-label" htmlFor="InternationalPartnersToggle">International partners<span className="ibox"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024" focusable="false"><path d="M945 305l78 67-510 524L3 372l75-69 435 451 432-449z"></path></svg></span></label>
                                <ul className="nav-list">
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Bdjobs</NavLink><span className=""> — Bangladesh</span></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">BrighterMonday</NavLink><span className=""> — Kenya</span></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Catho</NavLink><span className=""> — Brazil</span></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Jobberman</NavLink><span className=""> — Nigeria</span></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">jobsDB</NavLink><span className=""> — SE Asia</span></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">JobStreet</NavLink><span className=""> — SE Asia</span></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Jora</NavLink><span className=""> — Worldwide</span></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">OCC Mundial</NavLink><span className=""> — Mexico</span></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Workana</NavLink><span className=""> — Latin America</span></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Zhaopin</NavLink><span className=""> — China</span></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Jora</NavLink><span className=""> — Australia</span></li>
                                </ul>
                            </li>
                            <li className="nav-item lvl1">
                                <input type="checkbox" id="PartnerServicesToggle" className="nav-ckeckbox" />
                                <label className="nav-label" htmlFor="PartnerServicesToggle">Partner services<span className="ibox"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024" focusable="false"><path d="M945 305l78 67-510 524L3 372l75-69 435 451 432-449z"></path></svg></span></label>
                                <ul className="nav-list">
                                    <li className="nav-item"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Sidekicker</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <nav className="nav-col">
                        <h4 className="nav-title">Connect</h4>
                        <ul>
                            <li className="nav-item lvl1"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Help centre</NavLink></li>
                            <li className="nav-item lvl1"><NavLink to="" className="nav-link" target="_self">Contact us</NavLink></li>
                            <li className="nav-item lvl1"><NavLink to="" className="nav-link" target="_self">Work for SEEK</NavLink></li>
                            <li className="nav-item lvl1"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Product &amp; Tech Blog</NavLink></li>
                            <li className="nav-item lvl1"><NavLink to="" className="nav-link" target="_self">SEEK videos</NavLink></li>
                            <li className="nav-item lvl1">
                                <input type="checkbox" id="SocialToggle" className="nav-ckeckbox" />
                                <label className="nav-label" htmlFor="SocialToggle">Social<span className="ibox"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024" focusable="false"><path d="M945 305l78 67-510 524L3 372l75-69 435 451 432-449z"></path></svg></span></label>
                                <ul className="nav-list">
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Facebook</NavLink></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Instagram</NavLink></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">Twitter</NavLink></li>
                                    <li className="nav-item lvl2"><NavLink to="" rel="noopener noreferrer" className="nav-link" target="_self">YouTube</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <nav className="nav-col">
                        <h4 className="nav-title">Employers</h4>
                        <ul>
                            <li className="nav-item lvl1"><NavLink to="" rel="nofollow" className="nav-link" target="_self">Register for free</NavLink></li>
                            <li className="nav-item lvl1"><NavLink to="" className="nav-link" target="_self">Post NavLink job ad</NavLink></li>
                            <li className="nav-item lvl1"><NavLink to="" className="nav-link" target="_self">Products &amp; prices</NavLink></li>
                            <li className="nav-item lvl1"><NavLink to="" className="nav-link" target="_self">Customer service</NavLink></li>
                            <li className="nav-item lvl1"><NavLink to="" className="nav-link" target="_self">Recruitment software partners</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="copyright">
                    <NavLink to="/my-privacy/" rel="nofollow" className="copy-link" target="_self">Privacy</NavLink>
                    <NavLink to="/terms/" rel="nofollow" className="copy-link" target="_self">Terms &amp; Conditions</NavLink>
                    <NavLink to="/safe-job-searching/" rel="nofollow" className="copy-link" target="_self">Protect yourself online</NavLink>
                    <p className="copy-text">© SEEK. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;