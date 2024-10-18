import React, { Component } from 'react'
import { withRouter } from './withRouter'
import "./Publication.css"

class Publication extends Component {
    genPublicationHelper = (pubItem) => {
        if (!pubItem[2]) {
            return <li>{pubItem[0]}<br /><p className="authors">{pubItem[1]} (coming soon...)</p></li>
        }
        return <li>{pubItem[0]}<br /><p className="authors">{pubItem[1]}<a href={pubItem[2]}>[pdf]</a></p></li>
    }

    genPublication = () => {
        const myLists = [
            ['integrate the IoTDB with different communicating protocols suitable for IoT devices',
                'Hossein Aghaei, Bardia Safaei', false],
            ['Thermal-Aware Fault-Tolerance in Heterogeneous Multi-Core Systems Using Adaptive Machine Learning',
                'Amirhossein Ansari, Hossein Aghaei, Mohsen Ansari, DAC 2025', false]
        ];
        const listItems = myLists.map((myList) =>
            this.genPublicationHelper(myList)
        );
        return listItems
    }

    render() {
        return (
            <div className="pub">
                <div>
                    <h2>Publications</h2>
                    <ul> {this.genPublication()} </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(Publication);