import React, { Component } from 'react'

class Countries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: this.props.countries
        };
    }
    render() {
        return (
            <>
                {
                    this.state.countries.map(data => (
                        < tr >
                            <td>{data.Country}</td>
                            <td>{data.NewConfirmed}</td>
                            <td>{data.TotalRecovered}</td>
                            <td>{data.TotalDeaths}</td>
                        </tr>
                    ))
                }
            </>
        )
    }
}

export default Countries;
