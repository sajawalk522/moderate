import React, { Component } from 'react';
// import Moderate from "../moderator";
class Outstanding extends Component {
  render() {
    return (

      <div className="">
      
           <div className="list-below">
           <form>
                <ul>
                    <li><span>Name</span><span>Question</span><span>Approved</span><span>Deny</span></li>
                    <li><span>Jhon Doe</span><span>Lorem Ipsum dolar?</span><span className="approved"><input type="radio" checked/></span><span className="gray"><input type="radio" /></span></li>
                    <li><span>Jhon Doe</span><span>Lorem Ipsum dolar?</span><span className="approved"><input type="radio" checked/></span><span className="gray"><input type="radio" /></span></li>
                    <li><span>Jhon Doe</span><span>Lorem Ipsum dolar?</span><span className="gray"><input type="radio" /></span><span className="approved"><input type="radio" checked/></span></li>
                    <li><span>Jhon Doe</span><span>Lorem Ipsum dolar?</span><span className="approved"><input type="radio" checked/></span><span className="gray"><input type="radio"/></span></li>
                </ul>
                </form>
            </div>
            <div className="responsive-list">
                <ul>
                      <li><span>Name</span><span>Jhon Doe</span></li>
                      <li><span>Question</span><span>Lorem Ipsum dolar?</span></li>
                      <li><span>Approved</span><span><input type="radio" name="r" value="" checked/></span></li>
                      <li><span>Deny</span><span><input type="radio" name="" value="" /></span></li>
                      
                  </ul>

            </div>
        </div>
    );
  }
}
export default Outstanding;
