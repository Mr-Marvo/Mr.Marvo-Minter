import React from 'react';
import { Helmet } from "react-helmet";
import Home from './Home/Home'

function App() {
  return (
    <>

      <Helmet>
        <meta charset="utf-8" />
        <title>Mr.Marvo</title>
        <meta name="description" content="Mr-Marvo Minting dApp with Fully customizable front-end." />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="assets/images/logo.png" />
        <link rel="shortcut icon" type="image/x-icon" href="assets/images/logo.png" />

        <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/animate.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/fontawesome-min.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/off-canvas.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/ico-moon-fonts.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/sc-spacing.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/owl.theme.default.min.css" />

        <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/responsive.css" />
      </Helmet>

      <Home />

      <Helmet>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/modernizr-2.8.3.min.js"></script>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/imagesloaded.pkgd.min.js"></script>
        <script src="assets/js/wow.min.js"></script>
        <script src="assets/js/jquery.counterup.min.js"></script>
        {/* <script src="assets/js/waypoints.min.js"></script> */}
        <script src="assets/js/owl.carousel.min.js"></script>
        <script src="assets/js/main.js"></script>
      </Helmet>

    </>
  );
}

export default App;
