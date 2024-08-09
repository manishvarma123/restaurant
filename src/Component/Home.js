import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import Welcome from './Welcome'
import Eat from './Eat'
import Speciality from './Speciality'
import Testimonial from './Testimonial'
import Feedback from './Feedback'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
        <Banner />
        <Welcome />
        <Eat />
        <Speciality />
        <Testimonial />
        <Feedback />
        <Footer />
    </div>
  )
}
