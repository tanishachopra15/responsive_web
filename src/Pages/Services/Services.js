import React from 'react'
import './Services.css'
import check from '../../images/check.png'

const Services = () => {
    const plans = [{
        type: "Basic",
        price: "$100",
        time:"/month",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
        features: ["Lorem ipsum, dolor sit",
            "Lorem ipsum, dolor sit",
            "Lorem ipsum, dolor sit",
            " Lorem ipsum, dolor sit ",
            " Lorem ipsum, dolor sit "
        ]
    }, {
        type: "Plus",
        price: "$250",
        time:"/month",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
        features: ["Lorem ipsum, dolor sit",
            "Lorem ipsum, dolor sit",
            "Lorem ipsum, dolor sit",
            " Lorem ipsum, dolor sit ",
            " Lorem ipsum, dolor sit "
        ]
    }, {
        type: "Pro",
        price: "$400",
        time:"/month",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
        features: ["Lorem ipsum, dolor sit",
            "Lorem ipsum, dolor sit",
            "Lorem ipsum, dolor sit",
            " Lorem ipsum, dolor sit ",
            " Lorem ipsum, dolor sit "
        ]
    }
    ]
    return (
        <div className='services'>
            <div className='services-text-box'>
                <div className='heading'>PLANS</div>
                <div className='text-heading'>Our Services</div>
                <div className='text-subtext'>Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit.</div>
            </div>
            <div className='plans'>
                {
                    plans.map((item, index) => {
                        return (
                            <div key={index} className='plan-card'>
                                <div className='plan-type'>{item.type}</div>
                                <div className='plan-price-details'>
                                <div className='plan-price'>{item.price}</div>
                                <div className='plan-time'>{item.time}</div>
                                </div>
                                <div className='plan-description'>{item.description}</div>
                                <div className='plan-feature'>
                                    {
                                        item.features.map((feature, index) => {
                                            return (<div key={index} className='plan-feature-details'>
                                              <img src={check} alt=''></img>{feature}
                                            </div>)
                                        }
                                        )
                                    }
                                </div>
                                <button className='learn-btn'>Learn More</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services