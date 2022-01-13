import React from 'react';
function WishList(props) {
    return (
        <section class="pt-7 pb-12">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
    
              <h3 class="mb-10">My Account</h3>
    
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-3">
    
              <nav class="mb-10 mb-md-0">
                <div class="list-group list-group-sm list-group-strong list-group-flush-x">
                  <a class="list-group-item list-group-item-action dropright-toggle " href="account-orders.html">
                    Orders
                  </a>
                  <a class="list-group-item list-group-item-action dropright-toggle active" href="account-wishlist.html">
                    Widhlist
                  </a>
                  <a class="list-group-item list-group-item-action dropright-toggle " href="account-personal-info.html">
                    Personal Info
                  </a>
                  <a class="list-group-item list-group-item-action dropright-toggle " href="account-address.html">
                    Addresses
                  </a>
                  <a class="list-group-item list-group-item-action dropright-toggle " href="account-payment.html">
                    Payment Methods
                  </a>
                  <a class="list-group-item list-group-item-action dropright-toggle" href="#!">
                    Logout
                  </a>
                </div>
              </nav>
    
    
            </div>
            <div class="col-12 col-md-9 col-lg-8 offset-lg-1">
    
              <div class="row">
    
                <div class="col-6 col-md-4">
                  <div class="card mb-7">
                    <div class="card-img">
    
                      <button class="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
                        <i class="fe fe-x"></i>
                      </button>
    
                      <button class="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal"
                        data-target="#modalProduct">
                        <i class="fe fe-eye mr-2 mb-1"></i> Quick View
                      </button>
    
                      <img class="card-img-top" src="img/products/product-6.jpg" alt="..."/>
    
                    </div>
    
                    <div class="card-body font-weight-bold text-center">
                      <a class="text-body" href="product.html">Cotton floral print Dress</a> <br/>
                      <span class="text-muted">$40.00</span>
                    </div>
    
                  </div>
                </div>
    
               
    
              </div>
    
              <nav class="d-flex justify-content-center justify-content-md-end">
                <ul class="pagination pagination-sm text-gray-400">
                  <li class="page-item">
                    <a class="page-link page-link-arrow" href="#">
                      <i class="fa fa-caret-left"></i>
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">4</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">5</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">6</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link page-link-arrow" href="#">
                      <i class="fa fa-caret-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
    
            </div>
          </div>
        </div>
      </section>
    );
}

export default WishList;