// Hint: use props


// Custom component
const CustomComponent = (props) => {
  return (
    <div>
        {props.name}
    </div>
  );
};

// Main component as a functional component
const SimpleWeb = () => {
  return (
    <div>
      <h1>Hello from MainComponent!</h1>
      {/* Using the custom component */}
      <CustomComponent text="This is a custom component." name="This is a new component" />
    </div>
  );
};

export default SimpleWeb;
