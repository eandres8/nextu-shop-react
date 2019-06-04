import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import './AppFrame.css';

const AppFrame = ({body}) => {
    return (
        <div className="app-frame-content">
            <Navbar />
            <br />
            <div className="container container-backg">
                {body}
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    body: PropTypes.element.isRequired,
};

export default AppFrame;