import React from "react";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";
import "./styles.css";

const CommunityPage = () => {
  return (
    <>
      <div className="container">
        {/* <h1>Community Page</h1>
      <h2>This is something</h2>
      <br />
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste, fugiat neque quod ipsa error alias totam dolorum sapiente explicabo?</h3>
      <br />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quaerat cumque et id sapiente accusantium commodi earum cupiditate exercitationem impedit veritatis natus pariatur repellendus odit nostrum at aut aspernatur. Perferendis!</p>
      <div className='button-div'>
        <button>Press Me</button>
      </div> */}
        <CloudinaryContext cloudName="dzbvvdev4">
          <div>
            <Image publicId="sample" width="50" />
          </div>
          <Image publicId="sample" width="0.5" />
        </CloudinaryContext>
        {}
      </div>
    </>
  );
};

export default CommunityPage;
