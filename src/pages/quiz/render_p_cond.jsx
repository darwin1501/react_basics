import { useState } from 'react';

const RenderP = () => {
  const [condition, setCondition] = useState(false);

  const toggleCondition = () => {
    setCondition(!condition);
  };

  const OnTrue = () =>{
    return (
        <p>The condition is true, so this paragraph is rendered.</p>
    )
  }

  const OnFalse = () => {
    return (
        <p>The condition is false, so this paragraph is rendered instead.</p>
    )
  }

/**
 * how to use ternary operator
 * 
 *  condition ? value when true : value when false
 * 
 */


/**
 * how to render jsx:
 * 
 * const Component = ()=>{
 *  return (...some code)
 * }
 * 
 * <Component />
 */

  return (
    <div>
      <button onClick={toggleCondition}>Toggle Condition</button>
      {/* create ternary operator here */}
      {condition ? <OnTrue /> : <OnFalse />}
    </div>
  );
};

export default RenderP;
