import React, { Component } from 'react';

class AboutUs extends Component {
    people = [
        {
            'full name': 'BOUDJENIBA Oussama',
            'last name': 'BOUDJENIBA',
            'first name': 'Oussama',
            'twitter': 'https://twitter.com/ouss1002/',
            'github': 'https://github.com/ouss1002/',
            'email': 'oboudjeniba@gmail.com',
            'organization': 'USTHB',
            'phone': '+213541285782',
            'avatar': '/imgs/oboudj.jpg',
        },
        {
            'name': 'AMMAR KHODJA Hichem',
            'last name': 'AMMAR KHODJA',
            'first name': 'Hichem',
            'twitter': 'https://twitter.com/ouss1002/',
            'github': 'https://github.com/ouss1002/',
            'email': 'oboudjeniba@gmail.com',
            'organization': 'USTHB',
            'phone': '+213876567902',
            'avatar': '/imgs/oboudj.jpg',
        },
    ]

    render() {
        return (
            <div id="aboutus" className="paddit">
                <ListCards 
                    people={this.people}
                />
            </div>
        );
    }
}

class ListCards extends Component {


    render() {
        let people = this.props.people;
        // return (
        //     <div className="list-cards">
        //         {
        //             people && people.map((person) => (
        //                 <Card 
        //                     person={person}
        //                 />
        //             ))
        //         }
        //         {
        //             !people && 
        //             <h1>Nothing</h1>
        //         }
        //     </div>
        // );
        return (
            <div>
                About Us
            </div>
        )
    }

}

class Card extends Component {

    render() {
        let person = this.props.person;
        return (
            <div className="card apply-radius">
                <div className="card-up">
                    <div className="avatar">
                        <img
                            className="img-avatar"
                            src={person['avatar']}
                            alt={person['name']}
                        ></img>
                    </div>
                </div>
                <div className="card-middle">
                    <span className="avatar-name">{
                        person['last name']
                    }</span>
                    <span className="avatar-name">{
                        person['first name']
                    }</span>
                    <div className="sep">

                    </div>
                    <span className="email">{person['email']}</span>
                    <span className="avatar-link">
                        <a
                            href={person['github']}
                        >
                            GitHub
                        </a>
                    </span>
                    <span className="avatar-link">
                        <a
                            href={person['twitter']}
                        >
                            Twitter
                        </a>
                    </span>
                    <span className="organization">{person['organization']}</span>
                </div>
                <div className="card-down">
                    <span className="phone">{person['phone']}</span>
                </div>
            </div>
        )
    }
}

export default AboutUs;