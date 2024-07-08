import React from 'react'
import CloudServices from '../../components/CloudConsultancy'
import Link from 'next/link'
import Footer from '../../components/Footer'
import Script from 'next/script'
import Image from 'next/image'
import MainNav from '../../components/MainNav'
import Contact from '../../components/Contact'
import BlogList from '../../components/Mobileapp/BlogList'
import ContactCTA from '../../components/contactus'
import TotalImage from '@/../public/assets/images/case-stories/total.png'


export default function Agrotech() {
    return (
        <>
            <MainNav />

            <section className='bg-black text-white py-5 hero-agrotech'>
                <div className="container-fluid py-5">
                    <div className="container pt-5">
                        <div className="col-md-10 mx-auto text-center py-5">
                            <h1 className="fw-bolder display-4 wow fadeInUp mb-4" data-wow-delay=".2s">Agrotech</h1>
                            <h2 className='h2 wow fadeInUp lh-lg' data-wow-delay=".5s">End-to-end Agrotech Solution Development
                            </h2>
                        </div>
                    </div>

                </div>

            </section>

            <section className="py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="section-title mb-5">
                                <h3 className="h2 fw-bold">Overview</h3>
                                <p className="fs-6">Our client, a leading player in the Agrotech industry is engaged in selling precision farming products & solutions to their customers. They wanted us to digitalize some of the manual operations that were done using multiple tools previously and wanted to develop a single solution that their employees and clients could use.</p>
                                <br />
                                <h3 className="h2 fw-bold">Previous Process – Manual using multiple tools</h3>
                                <p className="fs-6">Our client offers farmers (their customers), soil sampling and testing service that helps the farmers analyze the mineral content and other parameters of their farmland and can thereby take necessary actions to ensure a good harvest. Once our client is entrusted with a farmland for soil sampling, they use UAVs to collect high resolution images of the field. These images are manually loaded onto a photogrammetry software to create a single orthophoto mosaic file. This area is then divided into smaller sectors and assigned to their soil sampling tractors. Tractors are installed with a Wintex soil sampler equipment that take some samples from each sector. These samples are then collected into a bag and delivered to their soil sampling lab for testing. The test results are then made available for their clients to take necessary action on their farms.</p>
                                <p className="fs-6">Our client&apos;s operation also includes a trading wing where they sell DAVIS devices such as Vantage Pro2 and Vantage Vue weather stations and AirLink for forecasting weather and air quality for their customers.</p>
                                <br />
                                <h3 className="h2 fw-bold">Challenges:</h3>
                                <p className='fs-5 fw-bold'>Our client was facing several challenges while carrying out the processes manually:</p>
                                <ul className='list-unstyled'>
                                    <li>They were using multiple software solutions to carry out individual tasks which isolated each process and added complexity to both their customers and their internal staff</li>
                                    <li>Surveying the farmlands was done manually to calculate the net usable area which was tedious and time consuming.</li>
                                    <li>Splitting farmlands to smaller grids was also done manually outside the system causing confusions for the tractor drivers while they were driving around the farms for soil sampling</li>
                                    <li>Lack of clarity of where and when exactly the soil sample was taken</li>
                                    <li>Frequent mix-up of samples between grids which led to wrong data being populated in the lab reports</li>
                                    <li>Inability to track the efficiency of the tractor driver</li>
                                    <li>Inability to track the soil samples</li>
                                    <li>Lack of visual representation for surveyed land and soil sample status as all data was spread across multiple software solutions and manually entered in the system to generated reports in PDF formats.</li>
                                    <li>The size of farmlands was usually in hectares which lead to difficulty in analyzing the data effectively.</li>
                                </ul>
                                <br />
                                <p className='fs-5 fw-bold'>Proposed Solution for Digitalization</p>
                                <p className='fs-6'>Innobayt developed a single web-based solution which combined all our clients siloed processes into one single platform. The platform developed allows our client to upload orthophoto mosaics in a GeoTIFF format. Once the file is uploaded on the platform a farmland could be drawn on the map and data such as unique field ID, crop type, customer name etc. could be associated with the farmland. Our solution includes a custom feature where the user would be able to draw polygons directly on the map to eliminate unusable areas such as rocks, water pool, trees etc. from the farmland after which our system automatically calculates the total effective farming area. This farmland can then be divided into smaller grids of customizable sizes by just entering the required size of each grid. Once the grids are created, the user would then be able to select the number of samples that would have to be taken from each grid based on which the system generates randomized sample points within certain parameters to ensure the samples are spread across the grid and not close to each other.</p>
                                <br />
                                <p className='fs-6'>Our solution also included a native android mobile app for the tractor drivers where they could see all the farmlands assigned to them for the day. The app also had a navigation feature for guiding the drivers on exact direction to drive within open farmlands. As the driver crosses a sample point, the app sends a notification to the driver stop and collect the soil sample using geofencing. The soil collection process is also initiated digitally through the app by integrating the application with a digital switch that would then control the Wintex soil sampler equipment. This allows us to gather the exact coordinates of where the sample was collected from along with a date and time stamp.</p>
                                <br />
                                <p className='fs-6'>Once all samples are collected from a grid, the tractor driver would receive a notification on the application to print a QR code label using a handheld Zebra printer. The label is then stuck on the sample bag which enables to track the sample through the entire process. The labelled sample bags are then delivered to the soil testing laboratory where the lab admins will be able to scan these labels using a QR code scanner connected to our platform. The QR code is also scanned at the beginning of each test within the laboratory which helps to keep track of the status of the soil sample. Upon testing the samples, lab results are also uploaded on to the system. Our client & their customers will be able to log in to view the status of sample collection, as well as sample results on the system.</p>
                                <br />
                                <p className='fs-6'>We also integrated the solution with Davis weather stations and AirLink to be able to display relevant weather and air quality data on the platform. This enabled our client and their customers to perform all their tasks and access all required data through one single platform.</p>
                                <br />
                                <h3 className="h2 fw-bold">Challenges:</h3>

                                <p className='fs-6'>The solution was built fully using Opensource GIS technology stack such as QGIS, GeoServer for backend and OpenLayers & OSM basemaps for frontend. Some of the key GIS features implemented are as follows:</p>
                                <ul className='list-unstyled'>
                                    <li>Overlaying orthophotomosaic images on map</li>
                                    <li>Drawing shapes for area calculation using various shapes – square, rectangle, polygon, circle</li>
                                    <li>Automatic area calculation – net usable area calculated for field after deducting cover lands</li>
                                    <li>Dividing large fields into smaller grids, grid overlay rotation, grid numbering & grid merging.</li>
                                    <li>Optimal route identification and distance calculation for polyline connecting multiple geocoordinates</li>
                                </ul>

                                <br />
                                <h3 className="h2 fw-bold">Hardware Integrations:</h3>
                                <ul className='list-unstyled'>
                                    <li>Optimal route identification and distance calculation for polyline connecting multiple geocoordinates</li>
                                    <li>Integration with Zebra portable printer to print QR code labels – Model: ZQ 500</li>
                                    <li>Integration with SONOFF digital switch for soil sample initiation</li>
                                    <li>Integration with handheld DataLogic scanners to scan the QR code labels at the lab – Model: DS 457</li>
                                    <li>Integration with DAVIS weather stations – Model: Vantage Pro2 & Davis Vantage Vue</li>
                                    <li>Integration with Davis air quality measurement device – Model: AirLink</li>
                                </ul>

                                <br />
                                <h3 className="h2 fw-bold">Technology Stack Used:</h3>
                                <ul className='list-unstyled'>

                                    <li>Mobile app: Kotlin (Native Android), Mapbox</li>
                                    <li>Backend: Python Django, Node.js, Chirpstack, Node RED, QGIS, GeoServer,LORAWAN Gateway Development</li>
                                    <li>Frontend: React, OpenLayers, OSM basemaps</li>
                                    <li>Database: PostGIS, Inflowdb, Grafana</li>

                                </ul>



                            </div>
                        </div>
                        <div className='col-md-12 text-center'>
                            <Link className="main-btn" href="/case-stories"><i className="fa-solid fa-arrow-left"></i> Case Stories </Link>
                        </div>
                    </div>
                </div>
            </section >

            <section className="ib__cta_secondary overflow-hidden position-relative" id='contact_form'>
                <ContactCTA title={'Beyond Clouds Beyond Limits'} tagline={'Dive into the limitless possibilities of cloud computing with Innobayt&apos;s consultation services. Reach out to us to uncover unmatched flexibility, reliability, and innovation. Let&apos;s transcend boundaries, together.'} />
            </section>
            <section className='contact_form'>
                <Contact pageName="Agrotech" />
            </section>

            <Footer />
        </>
    )
}