import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Axios from 'axios';
import * as React from 'react';

const styles = {
    divider: {
        height: 28,
        margin: 4,
        width: 1,
    },
    iconButton: {
        padding: 10,
    },
    input: {
        flex: 1,
        marginLeft: 8,
    },
    root: {
        alignItems: 'center',
        display: 'flex',
        padding: '2px 4px',
        width: 400,
    },
};

class SearchBar extends React.Component {

    public value = "";
    
    public sendRequest = async (e: any) => {
        e.preventDefault();
        const apiKey: string = "AIzaSyBshCs4VcS5f-ILoa76OIeKXF8RT-5eaNQ";
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.value}&key=${apiKey}`;
        const res = await Axios.get(url);
        console.log(url);
        console.log(res.data.results[0].geometry.location.lat);
        console.log(res.data.results[0].geometry.location.lng);
    }

    public handleChange(e: any) {
        this.value = e.target.value;
    }

    public render() {
        const SearchBarCss = {
            left: "10vw",
            position: "absolute" as "absolute",
            top: "1vh"
        }

        return (
            <div style={SearchBarCss}>
                <Paper elevation={1}>
                    <form onSubmit={(e: any) => this.sendRequest(e)}>
                        <InputBase
                            style={{ paddingLeft: "25px" }}
                            placeholder="Search Google Maps"
                            onChange={(e: any) => this.handleChange(e)}
                        />
                        <IconButton aria-label="Search" type="submit">
                            <SearchIcon />
                        </IconButton>
                    </form>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(SearchBar);
