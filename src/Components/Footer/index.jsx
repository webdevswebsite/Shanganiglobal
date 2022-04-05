import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useQuery } from 'react-query'
import './style.scss'
import Facebook from '../../Assets/Images/fcbk/1x/outline_facebook_white_24dp.png'


const Footer = () => {
    const signInSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().required("Please enter your password"),
        first_name: Yup.string().required("Please enter your first name"),
        last_name: Yup.string().required("Please enter your last name"),
    });
  
  // const { isLoading, error, data } = useQuery('repoData', () =>
  //    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
  //      res.json()
  //    )
  //  )
 
  //  if (isLoading) return 'Loading...'
 
  //  if (error) return 'An error has occurred: ' + error.message
    return (
        <>
        <footer>
          <div className='footer'>
            <div className='column'> 
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='clmn2'>
              <div className='bgn'>
                <div><p>Career - </p></div>
                <div className='move'>Meet Us - </div>
                <div className='move'>Press - </div>
                <div className='move'>Contact Us -</div>
              </div>
            <div>
              <div className='footer'>
                    <Formik
            initialValues={{
              first_name: "",
              last_name: "",
            }}
            onSubmit={console.log("hello world")}
            validationSchema={signInSchema}
          >
            <>
              <section className="login_form">
                <h1>Shangani Global</h1>
                <Form>
                  <div className="input-container">
                    <label className="label">First Name</label>
                    <Field type="text" name="first_name" placeholder="First name" />
                  </div>

                  <ErrorMessage name="first_name" component="div" />
                  <div className="input-container">
                    <label className="label">Last Name</label>
                    <Field
                      type="text"
                      name="last_name"
                      placeholder="last name"
                    />
                  </div>
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="error_message"
                  />
                  <div>
                    <button className="form-button" type="submit">
                      Submit
                    </button>
                  </div>
                </Form>
              </section>
            </>
          </Formik>
                </div>
            </div>
            <div><h1>ShanganiGlobal.adds something on töp.</h1></div>
          </div>
            <div className='gig'>
              <div className='bg-gig'>
                <div className='bgn'>
                    <div>Privacy Settings - </div>
                    <div className='move'>Imprint - </div>
                    <div className='move'>Data Security - </div>
                    <div className='move'>ShanganiGlobal HAFEX AOG - </div>
                </div>
              </div>
              <div className='bottom'>
                <div className='fbck'>
                  <div><img src={Facebook} alt='' /></div>
                  <div className='red'><img src={Facebook} alt='' /></div>
                  <div className='red'><img src={Facebook} alt='' /></div>
                  <div className='red'><img src={Facebook} alt=''/></div>
                </div>
                <div className='para'><p>Follow us on Social media</p></div>
              </div>
            </div>
          </div>
        </footer>
        </>
    )
}

export default Footer