export default function Home() {
    return (
        <>
            {/* Preloader area start here */}
            <section className="loader_first">
                <div className="circular-spinner"></div>
            </section>
            {/* Preloader area End here */}

            <div className="bithu_mint_header bithu_header" id="navbar">
                <div className="bithu_mint_header_inner">
                    <div className="bithu_mint_header_left">
                        <div className="logo">
                            <a href="index.html"><img src="assets/images/banner.png" width="250px" alt="logo" /></a>
                        </div>
                    </div>
                    <div className="bithu_mint_header_right">
                        <button className="btn-small-gray hov_shape_show">
                            <img src="assets/images/icon/connect_wallet.svg" alt="" className="btn_icon" />CONNECT
                            <span className="hov_shape1"><img src="assets/images/icon/hov_shape_s.svg" alt="" /></span>
                            <span className="hov_shape2"><img src="assets/images/icon/hov_shape_s.svg" alt="" /></span>
                            <span className="square_hov_shape"></span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="buthu_h5_body">

                <div className="bithu-h5-slider">
                    <div className="slideshow-container">

                        <div className="home_tab_content" id="v5Home">
                            <div className="v5-home-content">
                                <div className="container v5-home-container">
                                    <span className="v5-home-thunder-icon"><img src="assets/images/icon/cat_walk_round_shap.svg"
                                        alt="icon" className="img-fluid" /></span>
                                    <span className="v5-home-star-icon"><img src="assets/images/icon/v4_star3.svg" alt="icon"
                                        className="img-fluid" /></span>
                                    <span className="v5-home-coin-icon"><img src="assets/images/icon/aboutus_card_icon2.png" alt="icon"
                                        className="img-fluid" /></span>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="v5-home-content-left">
                                                <h2 className="uppercase">Mr.Marvo<br/>NFT Collection<span><img
                                                    src="assets/images/icon/v5-hart-icon.svg" alt="icon"
                                                    className="img-fluid" /></span></h2>
                                                <h3><span className="count">999</span> / 999 Minted</h3>
                                                <div className="v5-home-baner-buttons">
                                                    <button className="v5mint_btn btn-mid-green hov_shape_show mr-30"
                                                        data-bs-toggle="modal" data-bs-target="#mintModal">
                                                        Twitter
                                                        <span className="hov_shape1"><img
                                                            src="assets/images/icon/hov_shape_L_dark.svg" alt="" /></span>
                                                        <span className="hov_shape2"><img
                                                            src="assets/images/icon/hov_shape_L_dark.svg" alt="" /></span>
                                                        <span className="square_hov_shape_dark"></span>
                                                    </button>
                                                    <button className="v5widhlist_btn btn-mid-transparent hov_shape_show">
                                                        Whitelist Now
                                                        <span className="hov_shape1"><img src="assets/images/icon/hov_shape_L.svg"
                                                            alt="" /></span>
                                                        <span className="hov_shape2"><img src="assets/images/icon/hov_shape_L.svg"
                                                            alt="" /></span>
                                                        <span className="square_hov_shape"></span>
                                                    </button>
                                                </div>
                                                <ul>
                                                    <li className="uppercase">Max 2 nfts per wallet . Price 0.01 eth + gas</li>
                                                    <li className="uppercase">Mint is live until <span>31 Aug 04:00H</span></li>
                                                    <li className="uppercase">Presale : soldout</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                                <div className="v5-mint-right">
                                                    <div className="v5-mint-right-inner">
                                                        <h1 className="uppercase cont-address">Public Sale</h1>
                                                        <br/><br/>
                                                        <div className="mint_count_list mt-0">
                                                            <ul className="mt-10">
                                                                <li>
                                                                    <h5>Remaining</h5>
                                                                    <h5>10/<span>999</span></h5>
                                                                </li>
                                                                <li>
                                                                    <h5>Price</h5>
                                                                    <h5>0.009 ETH</h5>
                                                                </li>
                                                                <li>
                                                                    <h5>Quantity</h5>
                                                                    <div className="mint_quantity_sect">
                                                                        <button>-</button>
                                                                        <input type="text" id="quantity" defaultValue={2} />
                                                                        <button>+</button>
                                                                    </div>
                                                                    <h5><span>0.30</span> ETH + GAS</h5>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                        <button className="btn-mid-green w-100 hov_shape_show"
                                                            data-bs-toggle="modal" data-bs-target="#mintModal">
                                                            MINT NOW
                                                            <span className="hov_shape1"><img
                                                                src="assets/images/icon/hov_shape_L_dark.svg"
                                                                alt="" /></span>
                                                            <span className="hov_shape2"><img
                                                                src="assets/images/icon/hov_shape_L_dark.svg"
                                                                alt="" /></span>
                                                            <span className="square_hov_shape"></span>
                                                        </button>
                                                        <p className="cont-address">Contract Address<br /><a href="#">0x546546546545646554</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bithu_v4owl_carousel_sect v5-owl-carousel">
                                <div className="bithu_v4owl_carousel_content v5owl_carousel_content">
                                    <ul>
                                        <li><span><img src="assets/images/icon/mint_live_white_icon.svg"
                                            alt="icon" /></span>Mr-Marvo</li>
                                        <li><span><img src="assets/images/banner.png" width="150px" alt="icon" /></span></li>
                                        <li><span><img src="assets/images/icon/mint_live_white_icon.svg"
                                            alt="icon" /></span>Mr-Marvo</li>
                                        <li><span><img src="assets/images/banner.png" width="150px" alt="icon" /></span></li>
                                        <li><span><img src="assets/images/icon/mint_live_white_icon.svg"
                                            alt="icon" /></span>Mr-Marvo</li>
                                        <li><span><img src="assets/images/banner.png" width="150px" alt="icon" /></span></li>
                                        <li><span><img src="assets/images/icon/mint_live_white_icon.svg"
                                            alt="icon" /></span>Mr-Marvo</li>
                                        <li><span><img src="assets/images/banner.png" width="150px" alt="icon" /></span></li>
                                        <li><span><img src="assets/images/icon/mint_live_white_icon.svg"
                                            alt="icon" /></span>Mr-Marvo</li>
                                        <li><span><img src="assets/images/banner.png" width="150px" alt="icon" /></span></li>
                                        <li><span><img src="assets/images/icon/mint_live_white_icon.svg"
                                            alt="icon" /></span>Mr-Marvo</li>
                                        <li><span><img src="assets/images/banner.png" width="150px" alt="icon" /></span></li>
                                        <li><span><img src="assets/images/icon/mint_live_white_icon.svg"
                                            alt="icon" /></span>Mr-Marvo</li>
                                        <li><span><img src="assets/images/banner.png" width="150px" alt="icon" /></span></li>
                                    </ul>
                                    <ul>
                                        <li><span><img src="assets/images/icon/mint_live_white_icon.svg"
                                            alt="icon" /></span>Mr-Marvo</li>
                                        <li><span><img src="assets/images/banner.png" width="150px" alt="icon" /></span></li>
                                        <li><span><img src="assets/images/icon/mint_live_white_icon.svg"
                                            alt="icon" /></span>Mr-Marvo</li>
                                        <li><span><img src="assets/images/banner.png" width="150px" alt="icon" /></span></li>
                                        <li><span><img src="assets/images/icon/mint_live_white_icon.svg"
                                            alt="icon" /></span>Mr-Marvo</li>
                                        <li><span><img src="assets/images/banner.png" width="150px" alt="icon" /></span></li>
                                        <li><span><img src="assets/images/icon/mint_live_white_icon.svg"
                                            alt="icon" /></span>Mr-Marvo</li>
                                        <li><span><img src="assets/images/banner.png" width="150px" alt="icon" /></span></li>
                                        <li><span><img src="assets/images/icon/mint_live_white_icon.svg"
                                            alt="icon" /></span>Mr-Marvo</li>
                                        <li><span><img src="assets/images/banner.png" width="150px" alt="icon" /></span></li>
                                        <li><span><img src="assets/images/icon/mint_live_white_icon.svg"
                                            alt="icon" /></span>Mr-Marvo</li>
                                        <li><span><img src="assets/images/banner.png" width="150px" alt="icon" /></span></li>
                                        <li><span><img src="assets/images/icon/mint_live_white_icon.svg"
                                            alt="icon" /></span>Mr-Marvo</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>

        </>
    );
}