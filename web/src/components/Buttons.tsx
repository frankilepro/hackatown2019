import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import * as React from 'react';

export default class Buttons extends React.Component {
    public render() {
        return (
            <div>
                <Fab color="primary">
                    <AddIcon />
                </Fab>
                <Fab color="secondary">
                    <Icon>edit_icon</Icon>
                </Fab>
                <Fab variant="extended">
                    <NavigationIcon />
                    Extended
                </Fab>
                <Fab disabled={true}>
                    <DeleteIcon />
                </Fab>
            </div>
        );
    }
}