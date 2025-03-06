
import ViewProductButton from '../components/button.jsx'; 


const Productcard = () => {
  // Static product details
  const productImage = "https://www.google.com/imgres?q=profile%20photo&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fblue-circle-with-white-user_78370-4707.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fuser-profile-pic&docid=yBaB5iOH6jaBQM&tbnid=ZzhEBaHQM02woM&vet=12ahUKEwikmPXB2_SLAxULxjgGHRW-B9wQM3oECFMQAA..i&w=626&h=626&hcb=2&ved=2ahUKEwikmPXB2_SLAxULxjgGHRW-B9wQM3oECFMQAA"; 
  const productName = "Sample Product";
  const price = "$29.99";

  return (
    <div className="product-card">
      <img src={productImage} alt="Product" className="product-image" />
      <h3>{productName}</h3>
      <p><strong>Price:</strong> {price}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
