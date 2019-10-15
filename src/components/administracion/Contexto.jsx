import React from 'react';

const FirebaseContexto = React.createContext(null);

export const ConFirebase = Component => props => (
    <FirebaseContexto.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContexto.Consumer>
);

export default FirebaseContexto;