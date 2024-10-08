import React, { useRef } from 'react'
import { toast } from 'react-toastify';



const Footer = () => {

        const inputRef = useRef(null);

        const handleSubscribe = () => {
            if(inputRef.current.value){
                toast.success("Thank you for subscribing us!");
            }
            else{
                toast.error("Enter your Email to Subscribe");
        }
            if (inputRef.current) {
                inputRef.current.value = "";  
            }
        };

        return (


            <div>
                <div className="footer">
                    <div className="boxes">
                        <div className="firstbox">
                            <p className='bold'>FREE SHIPPING</p>
                            <p>FREE SHIPPING ON ORDER ABOVE PKR5000</p>
                        </div>

                        <div className="secondbox">
                            <p className='bold'>CUSTOMER SUPPORT</p>
                            <p>Monday-Saturday | 9AM-11PM</p>
                        </div>

                        <div className="thirdbox">
                            <p className='bold'>10 DAYS OF RETURN AND EXCHANGE</p>
                            <p>Simply return for an exchange within 10 days</p>
                        </div>
                    </div>

                    <div className="bodyfooter">
                        <div className="firstline">
                            <div className="heading1">
                                <p className='bold1'>Get in touch</p>
                            </div>


                            <p>+923267180777</p>
                            <p>fahadsohail952@gmail.com</p>
                        </div>


                        <div className="firstline">
                            <div className="heading1">
                                <p className='bold1'>About</p>
                            </div>
                            <p>Our Story</p>
                            <p>Career@stylo</p>
                            <p>Contact us</p>
                            <p>Blogs</p>
                            <p>Download our app</p>
                            <p>Terms of Service</p>
                            <p>Share location</p>
                        </div>



                        <div className="firstline">
                            <div className="heading1">
                                <p className='bold1'>Information</p>
                            </div>
                            <p>Online Order Tracking</p>
                            <p>Shipping Policy</p>
                            <p>Return & Exchange Policy</p>
                            <p>Privacy Policy</p>
                            <p>FAQs</p>
                            <p>Refund Policy</p>
                            <p>Condition</p>
                        </div>


                        <div className="firstline">
                            <div className="heading1">
                                <p className='bold1'>Size Chart</p>
                            </div>
                            <p>Ladies Shoes Size Chart</p>
                            <p>Ladies Apparel Size Chart</p>
                            <p>Denim Size Chart</p>
                            <p>Kids Shoes Size Chart</p>
                            <p>Kids Pret Size Chart</p>
                        </div>


                        <div className="firstline">
                            <div className="heading1">
                                <p className='bold1'>NewsLetter Signup</p>
                            </div>
                            <p>
                                Subscribe and Stay updated
                            </p>

                            <div>
                                <input ref={inputRef} className='inputsubscribe' placeholder="Your email address" />
                                <div onClick={handleSubscribe} className="btnsubscribe">Subscribe</div>
                            </div>



                        </div>

                        <div className="copyright">
                            Copyright © 2024 stylo.pk | All Rights Reserved
                        </div>

                    </div>



                </div>

                </div>
                





                )
}

                export default Footer
