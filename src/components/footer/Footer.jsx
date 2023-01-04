import React from "react";

const Footer = () => {
    return (
        <>
    <footer class="Footer bg-light text-lg-center">
    <div class="container pt-4">

    <section class="mb-4">

      <a
        class="btn btn-link btn-floating btn-lg text-red m-1"><i class="fab fa-facebook-f"></i></a>


      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i></a>
        </section>

        </div>
    <h5>© 2020 Copyright:Code-Help</h5>
       
    </footer>

       </>
    )
};
export default Footer;