import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../commons/Header';
// images
import search from '../../assets/icons/Search.svg';
import dots from '../../assets/icons/horizontal-dots.png';
import star from '../../assets/icons/Star.svg';

const Orders = () => {
  return (
    <>
      <Header text="Orders" />
      <div className="container">
        <div className="search-filters">
          <div className="search-container">
            <img src={search} alt="" />
            <input type="search" placeholder="Search" />
            <button>
              <img src={search} alt="" />
            </button>
          </div>
          <div className="filters-container">
            <select name="" id="">
              <option value="last added">Order Status</option>
              <option value="">Pending</option>
              <option value="">Delivered</option>
            </select>
            <select name="" id="">
              <option value="">Last Added</option>
              <option value="">Newest First</option>
            </select>
          </div>
        </div>
        <div className="table-container orders-table">
          <table>
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Customer</th>
                <th>Items Ordered</th>
                <th>Total Price</th>
                <th className="date">Date (dd/mm/yyyy)</th>
                <th>Location</th>
                <th>Order Status</th>
                <th>Payment Method</th>
                <th>Order Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1002</td>
                <td>Achamba Dacosta</td>
                <td>4</td>
                <td>$550</td>
                <td>02/02/2023</td>
                <td>London</td>
                <td className="checkbox">
                  <input type="checkbox" name="" id="" />{' '}
                  <span className="pending">Pending</span>
                </td>
                <td>Master Card</td>
                <td>
                  <Link className="link">
                    <span
                      style={{
                        fontSize: '14px',
                      }}
                    >
                      View
                    </span>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Orders;
