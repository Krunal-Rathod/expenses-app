import React from 'react'

const Form = () => {
    return (
        <>
            <div className="contact__form mt-5 bg-white" name="form">
                <h2 className="mb-3">Let's Connect</h2>
                <form id="contactform" method="post">
                    <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" name="company" className="form-control" placeholder="Your Company Name" />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" required="" placeholder="Your Full Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" required="" placeholder="Enter Your E-Mail Address" />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text" name="mobile" className="form-control" required="" placeholder="Enter Your Contact Number" />
                    </div>
                    <div className="form-group mt-5 mb-0">
                        <button type="submit" className="btn btn-primary btn-block">Send</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form