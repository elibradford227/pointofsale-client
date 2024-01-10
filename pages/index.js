import { Button } from 'react-bootstrap';
import Link from 'next/link';
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {/* <h1>Welcome {user.displayName}! </h1> */}
      <Link passHref href="/orders">
        <Button variant="secondary">View Orders</Button>
      </Link>
      <Link passHref href="/menu">
        <Button variant="secondary">Menu Items</Button>
      </Link>
      <Link passHref href="/orders/new">
        <Button variant="secondary">Create Order</Button>
      </Link>
      <Link passHref href="/revenue">
        <Button variant="secondary">View Revenue</Button>
      </Link>
    </div>
  );
}

export default Home;
