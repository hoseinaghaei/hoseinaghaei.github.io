import React, {Component} from 'react';
import {withRouter} from './withRouter';
import {Link} from 'react-router-dom';


import "./Page.css";
import hamlet from '../file/HAMLET.pdf';


class Page extends Component {
  render() {
    return (
      <div>
        <div className="bio">
          <div>
            <h2>Bio</h2>
            <p>My name is <b>Hossein Aghaei</b> (حسین آقائی in Persian);
              <br/>
              I am a senior bachelor student in the computer engineering department
              at Sharif University of Technology (SUT) with a total GPA of <b>19.13/20 (19.83 in 2 last years)</b>.
              <br/>
              My research interests are <b> Database Management & Software Engineering & Distributed Systems.
              </b>
              <br/>
              For my Bachelor's thesis, I am working on <b>IoTDB (a new leading time-series database)</b> under
              the supervision by Prof. <a href="http://www.im-creator.com/free/bardiasafaei/homepage">Bardia
                Safaei</a>.
            </p>
            {/*<p>*/}
            {/*  */}
            {/*</p>*/}

            For more information see <Link to="/exp">experience</Link>

          </div>

          <div className="map">
            <script type="text/javascript" id="clustrmaps"
                    src="//clustrmaps.com/map_v2.js?d=BoOk5rTKBwGrVz_1s7lmgwhEZ5Zcg_vpGzwCf-hKBtE&cl=ffffff&w=a"></script>
          </div>

        </div>

        {/*<div className="bio">*/}
        {/*  <div>*/}
        {/*    <h2>News</h2>*/}
        {/*    <li>*/}
        {/*      <i>*/}
        {/*      </i>*/}
        {/*    </li>*/}

        {/*  </div>*/}

        {/*  <div className="map">*/}
        {/*    <script type="text/javascript" id="clustrmaps"*/}
        {/*            src="//clustrmaps.com/map_v2.js?d=BoOk5rTKBwGrVz_1s7lmgwhEZ5Zcg_vpGzwCf-hKBtE&cl=ffffff&w=a"></script>*/}
        {/*  </div>*/}

        {/*</div>*/}

      </div>


    );
  }
}

export default withRouter(Page);
