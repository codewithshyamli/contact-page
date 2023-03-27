import React, {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import firebaseDB from './firebase';


import './App.scss';

function App() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const {name, email, subject, message} = state;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !subject || !message) {
      toast.error("Please provide value in each input field")
    } else {
      firebaseDB.child("contacts").push(state);
      setState({name: "", email: "", subject: "", message: "" });
      toast.success("form submitted successfully");
    }
  };

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value});
  };
  return (
   <section className='contact-section'>
         <div className='container'>
         <ToastContainer position='top-center' />
           <div className='.row.justify.content.center'>
               <div className='col-md-13'>
                 <div className='wrapper'>
                   <div className='row no-gutters'>
                    <div className='col-md-6'>
                      <div className='contact-wrap w-100 p-lg-5 p-4'>
                        <h3 className='mb-4'>Send us a message</h3>
                        <form id='contactform' className='contactform' onSubmit={handleSubmit}>
                           <div className='row'>
                            <div className='col-md-12'>
                              <div className='form-group'>
                                <input
                                  type='text'
                                  className='form-control'
                                  name='name'
                                  placeholder='Name'
                                  onChange={handleInputChange}
                                  value={name}
                                />
                              </div>
                            </div>
                            <div className='col-md-12'>
                              <div className='form-group'>
                                <input
                                  type='email'
                                  className='form-control'
                                  name='email'
                                  placeholder='email'
                                  onChange={handleInputChange}
                                  value={email}
                                />
                              </div>
                            </div>
                            <div className='col-md-12'>
                              <div className='form-group'>
                                <input
                                  type='text'
                                  className='form-control'
                                  name='subject'
                                  placeholder='subject'
                                  onChange={handleInputChange}
                                  value={subject}
                                />
                              </div>
                            </div>
                            <div className='col-md-12'>
                              <div className='form-group'>
                                <textarea
                                  type='text'
                                  className='form-control'
                                  name='message'
                                  placeholder='Message'
                                  cols='30'
                                  rows='6'
                                  onChange={handleInputChange}
                                  value={message}
                                ></textarea>
                              </div>
                            </div>
                              <div className='col-md-12'>
                                <div className='form-group'>
                                  <input type='submit' value='Send Message' className='btn btn-primary' />
                                </div>
                              </div>
                           </div>
                        </form>
                      </div>
                    </div>
                      <div className='col-md-6 d-flex align-item-stretch'>
                        <div className='info-wrap w-100 p-lg-5 p-4 img'>
                          <h3>Contact Us</h3>
                          <p className='mb-4'>we are open for any suggestion or just to have a chat</p>
                          <div className='.dbox w-100.d-flex.align-item-start'>
                            <div className='.icon d-flex.align-item-center.justify-content-center'>
                              <span className='fa fa-map-marker'></span>
                            </div>
                            <div className='text pl-3'>
                              <p>
                                <span>Address:</span> 
                                <a href='#'>Katihar Engineering College,Katihar</a>
                              </p>
                            </div>
                          </div>
                          <div className='.dbox w-100.d-flex.align-item-center'>
                            <div className='.icon d-flex.align-item-center.justify-content-center'>
                              <span className='fa fa-phone'></span>
                            </div>
                            <div className='text pl-3'>
                              <p>
                                <span>phone:</span> 
                                <a href='#'>+91 1234 5678 90</a>
                              </p>
                            </div>
                          </div>
                          <div className='.dbox w-100.d-flex.align-item-center'>
                            <div className='.icon d-flex.align-item-center.justify-content-center'>
                              <span className='fa fa-paper-plane'></span>
                            </div>
                            <div className='text pl-3'>
                              <p>
                                <span>Email:</span>
                                <a href='#'>shyamlikumari243@gmail.com</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                   </div>
                 </div>
               </div>
           </div>
         </div>
   </section>
  );
}

export default App;
