/* eslint-disable @next/next/no-img-element */
import { Button } from 'react-bootstrap';
import Link from 'next/link';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '0px',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <img src="logo.png" alt="logo" id="logo" />
      <div className="circle-outline" />
      <Link passHref href="/orders">
        <Button variant="secondary" className="homebutton">View Orders</Button>
      </Link>
      <Link passHref href="/menu">
        <Button variant="secondary" className="homebutton">Menu Items</Button>
      </Link>
      <Link passHref href="/orders/new">
        <Button variant="secondary" className="homebutton">Create Order</Button>
      </Link>
      <Link passHref href="/revenue">
        <Button variant="secondary" className="homebutton">View Revenue</Button>
      </Link>
    </div>
  );
}

export default Home;
