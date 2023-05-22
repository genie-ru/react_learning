import "./Child.css";

const Child = () => {
  return (
    //key属性のみFragmentに指定できる
    <>
    <div className="component">
      <h3>Hello Component</h3>
    </div>
      <h3>Hello Fragment</h3>
      <p>Lorem</p>
    
    </>
  );
};

export default Child;
