import { Link } from "react-router-dom"
export default function Feedback() {
    return (
        <>
            <div class="container-fluid page-header py-5">
                <h1 class="text-center text-white display-6">Feedback</h1>
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/shop">Shop</Link></li>
                    <li class="breadcrumb-item active text-white">Feedback</li>
                </ol>
            </div>

            <div class="container-fluid py-5 container" style={{ marginLeft: '450px' }}>
                <div class="container py-5">

                    <form action="#">
                        <div class="row g-5">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-12 col-lg-6">
                                        <div class="form-item w-100">
                                            <label class="form-label my-3 text-dark">First Name<sup>*</sup></label>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-6">
                                        <div class="form-item w-100">
                                            <label class="form-label my-3">Last Name<sup>*</sup></label>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div class="form-item">
                                    <label class="form-label my-3">Address <sup>*</sup></label>
                                    <input type="text" class="form-control" placeholder="House Number Street Name" />
                                </div>
                                <div class="form-item">
                                    <label class="form-label my-3">Town/City<sup>*</sup></label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-item">
                                    <label class="form-label my-3">Country<sup>*</sup></label>
                                    <input type="text" class="form-control" />
                                </div>


                                <div class="form-item">
                                    <label class="form-label my-3">Email Address<sup>*</sup></label>
                                    <input type="email" class="form-control" />
                                </div>

                                <hr />
                                <div class="form-item">
                                    <textarea name="text" class="form-control" spellcheck="false" cols="30" rows="11" placeholder="Order Notes (Optional)"></textarea>
                                </div>

                                <button type="button" class="btn btn-dark border border-secondary rounded-pill px-3 text-white" style={{ marginLeft: '540px', marginTop: '20px' }}>Submit</button>

                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}