import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// components
import Header from '../../commons/Header';
// images
import search from '../../assets/icons/Search.svg';
import performFetchPut from '../../utils/Fetch/PerformFetchPut';
import Loader from '../../layout/Loader';

const Orders = () => {
  // const [orders, setOrders] = useState([
  //   {
  //     order_id: 1,
  //     customerName: 'Alice',
  //     quantity: 3,
  //     total_Amount: 50.0,
  //     date_added: new Date('2022-01-15'),
  //     location: 'New York',
  //     order_status: 'pending',
  //     paymentMethod: 'Credit Card',
  //   },
  // ]);
  useEffect(() => {
    fetch('https://appleproductsbackend.vercel.app/api/order/fetchAll')
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setDisplayedOrders(data);
      })
      .catch((err) => console.log('Error fetching orders:', err));
  }, []);
  const [orders, setOrders] = useState([]);
  const [displayedOrders, setDisplayedOrders] = useState(null);
  const [orderByDateValue, setOrderByDateValue] = useState('');
  const [order_status, setorder_status] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [checked, setChecked] = useState(null);

  // fomat date
  const FormatDate = (date) => {
    return new Date(date);
  };
  // handle sorting
  const handleSorting = (cat, orderByDateValue) => {
    if (orderByDateValue === 'newest') {
      return cat.sort((a, b) => {
        const dateA = FormatDate(a.createdAt);
        const dateB = FormatDate(b.createdAt);
        return dateA < dateB ? 1 : -1;
      });
    } else if (orderByDateValue === 'oldest') {
      return cat.sort((a, b) => {
        const dateA = FormatDate(a.createdAt);
        const dateB = FormatDate(b.createdAt);
        return dateA > dateB ? 1 : -1;
      });
    } else {
      return cat;
    }
  };

  const handleOnchange = (e) => {
    if (e.target.name === 'order_by_date') {
      setOrderByDateValue(e.target.value);
      const search = orders.filter((order) =>
        order.delivery_info.delivery_person
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      const status = search.filter((order) =>
        order.order_status.toLowerCase().includes(order_status.toLowerCase())
      );
      const date = handleSorting(status, e.target.value);
      setDisplayedOrders(date);
    } else if (e.target.name === 'search') {
      setSearchValue(e.target.value);
      const search = orders.filter((order) =>
        order.delivery_info.delivery_person
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      const status = search.filter((order) =>
        order.order_status.toLowerCase().includes(order_status.toLowerCase())
      );
      const date = handleSorting(status, orderByDateValue);
      setDisplayedOrders(date);
    } else if (e.target.name === 'order_status') {
      setorder_status(e.target.value);
      const search = orders.filter((order) =>
        order.delivery_info.delivery_person
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      const status = search.filter((order) =>
        order.order_status.toLowerCase().includes(e.target.value.toLowerCase())
      );
      const date = handleSorting(status, orderByDateValue);
      setDisplayedOrders(date);
    }
  };

  return (
    <div className="jim">
      <Header text="Orders" />
      <div className="container">
        {displayedOrders && (
          <div className="search-filters">
            <div className="search-container">
              <img src={search} alt="search icon" />
              <input
                type="search"
                placeholder="Search by customer name, payment method or location"
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
        )}
        <Loader display="hide" />
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
              {displayedOrders ? (
                displayedOrders.length === 0 ? (
                  <h2 style={{ textAlign: 'center', width: '90vw' }}>
                    No Order Found
                  </h2>
                ) : (
                  displayedOrders.map((order) => (
                    <tr key={order.order_id}>
                      <td>{order.order_id}</td>
                      <td>{order.delivery_info.delivery_person}</td>
                      <td>{order.products.length}</td>
                      <td>${order.total_Amount}</td>
                      {/* <td>{order.date_added.toLocaleDateString()}</td> */}
                      <td>{new Date(order.createdAt).toLocaleString()}</td>
                      <td>{order.location}</td>
                      <td className="checkbox">
                        <input
                          checked={
                            checked ||
                            order.order_status.toLowerCase() === 'delivered'
                          }
                          type="checkbox"
                          name=""
                          id=""
                          onChange={() => {
                            setChecked(!checked);
                          }}
                        />
                        <span
                          className="pending"
                          style={{
                            color: `${
                              order.order_status.toLowerCase() === 'delivered'
                                ? 'green'
                                : 'red'
                            }`,
                            textTransform: 'capitalize',
                            marginLeft: '10px',
                          }}
                        >
                          {order.order_status}
                        </span>
                      </td>
                      <td>{order.paymentMethod}</td>
                      <td>
                        <Link to={`${order.order_id}`} className="link">
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
                )
              ) : (
                <>
                  <tr className="table-skeleton">
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                  </tr>
                  <tr className="table-skeleton">
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
