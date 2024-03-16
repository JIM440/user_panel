import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../../commons/Header';
// images
import search from '../../../assets/icons/Search.svg';
import dots from '../../../assets/icons/horizontal-dots.png';
import star from '../../../assets/icons/Star.svg';

const OrderDetails = () => {
  const { id } = useParams();
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
  const [order, setOrder] = useState(
    orders.find((order) => order.orderNumber === parseInt(id))
  );
  // useEffect(() => {
  //   fetch(`api/order/fetchOne/${id}`)
  //   .then(res => res.json())
  //   .then(data => {setOrder(data)})
  //   .catch(err => console.log("Error fetching orders:", err))
  // }, [])
  return (
    <>
      <Header text="Orders" />
      <div className="container">
        <div className="table-container orders-table order-details-table">
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th className="items">Items Ordered</th>
                <th>Qunatity</th>
                <th>Price</th>
                <th>Status</th>
                <th className="shipping">Shipping Address</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>John Dankilowise</td>
                <td>
                  <span>MacBook 2023: Red</span>
                  <span>Apple Watch Series 9: Pink</span>
                </td>
                <td>
                  <span>2</span>
                  <span>2</span>
                </td>
                <td>
                  <span>$21</span>
                  <span>$133</span>
                </td>
                <td>Delivered</td>
                <td>
                  <ul>
                    <li>Joseph Parker</li>
                    <li>+(256) 345 354 783</li>
                    <li>2186 Joyce Street Rocky Mountain</li>
                    <li>California - 24567</li>
                    <li>United States</li>
                  </ul>
                </td>
              </tr> */}
              {order ? (
                <tr>
                  <td>{order.customerName}</td>
                  <td>{order.id}</td>
                  <td>{order.quantity}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.location}</td>
                  <td>{order.orderStatus}</td>
                  <td>{order.paymentMethod}</td>
                </tr>
              ) : (
                <p>Order Details get issues</p>
              )}
            </tbody>
          </table>
        </div>
        <div className="order-summary order-details-summary">
          <h3>Order Summary</h3>
          <div className="summary">
            <div>
              <p>Sub-Total:</p>
              <span>$500</span>
            </div>
            <div>
              <p>Coupon:</p>
              <span>- $0</span>
            </div>
            <div>
              <p>Shipping:</p>
              <span>$29</span>
            </div>
            <hr />
            <div>
              <p>
                <b>Total:</b>
              </p>
              <span>
                <b>$520</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
