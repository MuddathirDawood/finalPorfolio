<template>
    <section class="contact pt-100 pb-100" id="contact">
         <div class="container">
            <div class="row">
               <div class="col-xl-6 mx-auto text-center">
                  <div class="section-title mb-100">
                     <p>GET IN TOUCH</p>
                     <h4>contact me</h4>
                  </div>
               </div>
            </div>
            <div class="row text-center">
                  <div class="col-md-8">
                     <form action="https://formspree.io/f/xoqrgelw" method="post" target="_blank" class="contact-form">
                        <div class="row">
                           <div class="col-xl-6">
                              <input type="text" placeholder="Name" id="name" name="Name" required>
                           </div>
                           <div class="col-xl-6">
                              <input type="email" placeholder="Email" id="email" name="Email" required>
                           </div>
                           <div class="col-xl-6">
                              <input type="text" placeholder="Subject" id="subject" name="Subject" required>
                           </div>
                           <div class="col-xl-6">
                              <input type="text" placeholder="Cellphone" id="number" name="Number" required>
                           </div>
                           <div class="col-xl-12">
                              <textarea placeholder="Message" cols="30" rows="10" id="message" name="Message"></textarea>
                              <input type="submit" value="Send Message">
                           </div>
                        </div>
                     </form>
                  </div>
                  <div class="col-md-4">
                     <div class="single-contact">
                        <i class="fa fa-map-marker"></i>
                        <h5>Address</h5>
                        <p>Mitchells Plain, Cape Town</p>
                     </div>
                     <div class="single-contact">
                        <i class="fa fa-phone"></i>
                        <h5>Phone</h5>
                        <p>(+27) 81 049 6540</p>
                     </div>
                     <div class="single-contact">
                        <i class="fa fa-envelope"></i>
                        <h5>Email</h5>
                        <p>dmuddathir@gamil.com</p>
                     </div>               
                  </div>
            </div>
         </div>
      </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.pb-100 {
	padding-bottom: 100px;
}

.pt-100 {
	padding-top: 100px;
}

.mb-100 {
	margin-bottom: 100px;
}

a {
	text-decoration: none;
	color: #333;
	-webkit-transition: .4s;
	transition: .4s;
}

.section-title {
	position: relative;
}

.section-title p {
	font-size: 16px;
	margin-bottom: 5px;
	font-weight: 400;
}

.section-title h4 {
	font-size: 40px;
	font-weight: 600;
	text-transform: capitalize;
	position: relative;
	padding-bottom: 20px;
	display: inline-block;
}

.section-title h4::before {
	position: absolute;
	content: "";
	width: 120px;
	height: 2px;
	background-color: #d8d8d8;
	bottom: 0;
	left: 40%;
	margin-left: -40px;
}

.section-title h4::after {
	position: absolute;
	content: "";
	width: 90px;
	height: 2px;
	background-color: #ff5e14;
	left: 0;
	bottom: 0;
	left: 40%;
	margin-left: -25px;
	animation: leftright 3s ease-in-out infinite;
}

@keyframes leftright{
	25%{
		transform: translateX(-10px);
	}
	75%{
		transform: translateX(10px);
	}
}

.contact {
	color: white;
}

.contact-form input,
textarea {
	width: 100%;
	border: 1px solid #555;
	padding: 5px 10px;
	margin-top: 15px;
	background-color: rgba(51, 51, 51, 0.35);
	color: #fff;
}

.single-contact {
	text-align: left;
	position: relative;
	padding-left: 70px;
	margin-bottom: 50px;
	margin-top: 10px;
	animation: float 3s ease-in-out infinite;
}

@keyframes float{
	0%{
		transform: translateY(0px);
	}
	50%{
		transform: translateY(-4px);
	}
	100%{
		transform:  translateY(0px);
	}
}

.single-contact i.fa {
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	background-color: #ff5e14;
	width: 40px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	border-radius: 1px;
}

.single-contact h5 {
	font-size: 18px;
	margin-bottom: 10px;
	font-weight: 500;
}

.single-contact p {
	font-size: 15px;
	font-weight: 400;
}

.contact-form input[type="submit"] {
	background-color: #ff5e14;
	border: 1px black solid;
	font-size: 16px;
	transition: 0.4s
}

.contact-form input[type="submit"]:hover {
	background-color: #f95407
}

.contact-form input:focus, textarea:focus {
	border-color: #f95407
}

</style>