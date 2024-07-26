import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import HeroSlider from '../components/sliders/HeroSlider';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import SectionsHead from '../components/common/SectionsHead';
import TopProducts from '../components/product/TopProducts';
import Services from '../components/common/Services';
import commonContext from '../contexts/common/commonContext';
import Loader from '../components/common/loader/Loader';


const Home = () => {
    const { loading, setLoading } = useContext(commonContext);
    const [artists, setArtists] = useState([]);
    const [locations, setLocations] = useState([]);
    const [gigs, setGigs] = useState([]);

    useEffect(() => {
        fetchLandingPageData();
    }, []);

    const fetchLandingPageData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/common/landingPageData`);
            if (response.data.success) {
              setArtists(response.data.artists);
              setLocations(response.data.locations);
              setGigs(response.data.gigs);
            } else {
                // show error page
            }
        } catch (error) {
           console.error('Error fetching artist details:', error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <main>
            <section id="hero">
                <HeroSlider />
            </section>

            {/* <section id="featured" className="section">
                <div className="container">
                    <SectionsHead heading="Featured Products" />
                    <FeaturedSlider />
                </div>
            </section> */}

            <section id="products" className="section">
                <div className="container">
                    <SectionsHead heading="Top Vendors" />
                    <TopProducts artists={artists} gigs={gigs} />
                </div>
            </section>

            {/* <Services /> */}
        </main>
    );
};

export default Home;;