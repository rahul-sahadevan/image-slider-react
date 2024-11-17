import React from "react";
import ImageSliser from "./components/ImageSlider";


const App = ()=>{

  return (
    <div>
      <ImageSliser url={'https://picsum.photos/v2/list'} limit={'10'}/>
    </div>
  )
}

export default App