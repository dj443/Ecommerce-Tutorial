import React, {Fragment, useState} from 'react';
import {createCategory} from '../api/category';
import isEmpty from 'validator/lib/isEmpty';
import {showErrorMsg, showSuccessMsg} from '../Helpers/message';
import {showLoading} from '../Helpers/loading';

const AdminDashboard = () => {
    const [category, setCategory] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);

    /*****************
     * Event Handlers
     ****************/

    const handleMessages = evt => {
        setErrorMsg('');
        setSuccessMsg('');
    }

    const handleCategoryChange = evt => {
        setErrorMsg('');
        setSuccessMsg('');
        setCategory(evt.target.value);
    }

    const handleCategorySubmit = evt => {
        evt.preventDefault();

        if (isEmpty(category)) {
            setErrorMsg('Please enter a category');
        }else{
            const data = {category};
            setLoading(true);
            createCategory(data)
                .then((response) => {
                    setLoading(false);
                    setSuccessMsg(response.data.successMessage);
                })
                .catch((err) => {
                    setLoading(false);
                    setErrorMsg(err.response.data.errorMessage);
                });
        }
    }

    /*****************
     * Views
     ****************/
    const showHeader = () => (
        <div className='bg-dark text-white py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1>
                            <i className='fas fa-home'> DashBoard</i>
                        </h1>
                    </div>
                </div>
            </div>   
        </div>
    );

    const showActionBtn = () => (
        <div className='bg-light my-2'>
            <div className='container'>
                <div className='row pb-3'>
                    <div className='col-md-4 my-1'>
                        <button className='btn btn-outline-info btn-block' data-toggle='modal' data-target='#addCategoryModal'>
                            <i className='fas fa-plus'> Add Catagory</i>
                        </button>
                    </div>

                    <div className='col-md-4 my-1'>
                        <button className='btn btn-outline-warning btn-block'>
                            <i className='fas fa-plus'> Add Food</i>
                        </button>
                    </div>

                    <div className='col-md-4 my-1'>
                        <button className='btn btn-outline-success btn-block'>
                            <i className='fas fa-money-check-alt'> View Orders</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const showCategoryModal = () => (
        <div id='addCategoryModal' className='modal' onClick={handleMessages}>
            <div className='modal-dialog modal-dialog-center modal-lg'>
                <div className='modal-content'>
                    <form onSubmit={handleCategorySubmit}>
                        <div className='modal-header bg-info text-white'>
                            <h5 className='modal-title'>Add Category</h5>
                            <button className='close' data-dismiss='modal'>
                                <span><i className='fas fa-times'></i></span>
                            </button>
                        </div>
                        <div className='modal-body my-2'>
                            {errorMsg && showErrorMsg(errorMsg)}
                            {successMsg && showSuccessMsg(successMsg)}
                            {loading ? (
                                <div className='text-center'>{showLoading()}</div>
                            ):(
                                <Fragment>
                                    <label className='text-secondary'>Category</label>
                                    <input type='text' className='form-control' onChange={handleCategoryChange} name='category' value={category} />
                                </Fragment>
                            )}                            
                        </div>
                        <div className='modal-footer'>
                            <button className='btn btn-secondary' data-dismiss='modal'>
                                Close
                            </button>
                            <button className='btn btn-info' type='submit'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

    /*****************
     * Renderer
     ****************/
    return(
        <section>
            {showHeader()}
            {showActionBtn()}
            {showCategoryModal()}
        </section>
    )
};

export default AdminDashboard;