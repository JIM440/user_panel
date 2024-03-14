import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// components
import handleSorting from '../../utils/handlers/handleSort';
import Header from '../../commons/Header';
// images
import search from '../../assets/icons/Search.svg';

const Orders = () => {
  const orders = [
    {
      orderNumber: 1,
      customerName: 'Alice',
      quantity: 3,
      totalPrice: 50.0,
      date_added: new Date('2022-01-15'),
      location: 'New York',
      orderStatus: 'pending',
      paymentMethod: 'Credit Card',
    },
    {
      orderNumber: 2,
      customerName: 'Bob',
      quantity: 1,
      totalPrice: 20.0,
      date_added: new Date('2022-01-16'),
      location: 'Los Angeles',
      orderStatus: 'delivered',
      paymentMethod: 'PayPal',
    },
    {
      orderNumber: 3,
      customerName: 'Charlie',
      quantity: 2,
      totalPrice: 30.0,
      date_added: new Date('2022-01-17'),
      location: 'Chicago',
      orderStatus: 'pending',
      paymentMethod: 'Cash',
    },
    {
      orderNumber: 4,
      customerName: 'David',
      quantity: 4,
      totalPrice: 70.0,
      date_added: new Date('2022-01-18'),
      location: 'Miami',
      orderStatus: 'delivered',
      paymentMethod: 'Credit Card',
    },
    {
      orderNumber: 5,
      customerName: 'Eve',
      quantity: 1,
      totalPrice: 15.0,
      date_added: new Date('2022-01-19'),
      location: 'Seattle',
      orderStatus: 'pending',
      paymentMethod: 'PayPal',
    },
    {
      orderNumber: 6,
      customerName: 'Frank',
      quantity: 2,
      totalPrice: 25.0,
      date_added: new Date('2022-01-20'),
      location: 'Boston',
      orderStatus: 'pending',
      paymentMethod: 'Cash',
    },
    {
      orderNumber: 7,
      customerName: 'Grace',
      quantity: 3,
      totalPrice: 40.0,
      date_added: new Date('2022-01-21'),
      location: 'San Francisco',
      orderStatus: 'delivered',
      paymentMethod: 'Credit Card',
    },
    {
      orderNumber: 8,
      customerName: 'Henry',
      quantity: 1,
      totalPrice: 10.0,
      date_added: new Date('2022-01-22'),
      location: 'Dallas',
      orderStatus: 'delivered',
      paymentMethod: 'Cash',
    },
  ];

  const [displayedOrders, setDisplayedOrders] = useState(orders);
  const [orderByDateValue, setOrderByDateValue] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleOnchange = (e) => {
    if (e.target.name === 'order_by_date') {
      setOrderByDateValue(e.target.value);
      const search = orders.filter((order) =>
        order.customerName.toLowerCase().includes(searchValue.toLowerCase())
      );
      const status = search.filter((order) =>
        order.orderStatus.toLowerCase().includes(orderStatus.toLowerCase())
      );
      const date = handleSorting(status, e.target.value);
      setDisplayedOrders(date);
    } else if (e.target.name === 'search') {
      setSearchValue(e.target.value);
      const search = orders.filter((order) =>
        order.customerName.toLowerCase().includes(e.target.value.toLowerCase())
      );
      const status = search.filter((order) =>
        order.orderStatus.toLowerCase().includes(orderStatus.toLowerCase())
      );
      const date = handleSorting(status, orderByDateValue);
      setDisplayedOrders(date);
    } else if (e.target.name === 'order_status') {
      setOrderStatus(e.target.value);
      const search = orders.filter((order) =>
        order.customerName.toLowerCase().includes(searchValue.toLowerCase())
      );
      const status = search.filter((order) =>
        order.orderStatus.toLowerCase().includes(e.target.value.toLowerCase())
      );
      const date = handleSorting(status, orderByDateValue);
      setDisplayedOrders(date);
    }
  };
  return (
    <>
      <Header text="Orders" />
      <div className="container">
        <div className="search-filters">
          <div className="search-container">
            <img src={search} alt="search icon" />
            <input
              type="search"
              placeholder="Search"
              name="search"
              onChange={handleOnchange}
            />
          </div>
          <div className="filters-container">
            {/* filter by status */}
            <select name="order_status" id="" onChange={handleOnchange}>
              <option value="">Status</option>
              <option value="pending">Pending</option>
              <option value="delivered">Delievered</option>
            </select>
            {/* order by date */}
            <select name="order_by_date" id="" onChange={handleOnchange}>
              <option value="">Order By</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
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
              {displayedOrders.length === 0 ? (
                <h2 style={{ textAlign: 'center', width: '90vw' }}>
                  No Order Found
                </h2>
              ) : (
                displayedOrders.map((order) => (
                  <tr key={order.orderNumber}>
                    <td>{order.orderNumber}</td>
                    <td>{order.customerName}</td>
                    <td>{order.quantity}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order.date_added.toLocaleDateString()}</td>
                    <td>{order.location}</td>
                    <td className="checkbox">
                      <input type="checkbox" name="" id="" />{' '}
                      <span className="pending">{order.orderStatus}</span>
                    </td>
                    <td>{order.paymentMethod}</td>
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
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Orders;
