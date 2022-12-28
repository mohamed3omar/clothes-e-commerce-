import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export default function Slider()
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image :"../../assets/images/shop logo.png",
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image:"../../assets/images/cool-fashion-banner-template_23-2148869866.webp"
        }
    ]

    return (
        <Carousel 
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img src={props.item.image} alt=".."/>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}