import DownloadButtons from "./DownloadButtons";

function Body_About() {
    return (

        <div className="about">


            <section className="about-us">
                <div className="about-us-content">
                    <div className="about-us-header">
                        <h1>No One </h1>
                        <h1>Heals Alone</h1>
                    </div>
                    <div className="about-us-text">
                        <div className="about-us-text-1">
                            <h3>What is UnityCare ?</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempora mollitia quidem, aut iusto quaerat. Officia quo laborum laudantium perspiciatis!</p>

                        </div>
                        <div className="about-us-text-2">
                            <h3>Our Mission</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptates totam nesciunt! Corporis cum consequuntur, facere mollitia doloribus non quibusdam neque exercitationem in temporibus, porro sit assumenda quas maiores, rem tenetur eaque similique error ducimus! Itaque nobis saepe, voluptates odit at quia ipsum vitae molestias pariatur dolor commodi repellendus! Eaque.</p>

                        </div>

                        <div className="about-us-text-3">
                            <DownloadButtons />
                        </div>


                    </div>

                </div>
                <div className="about-us-images">


                    {/* <div className="about-us-image1">
                        <img src="src\assets\images\MainImage.png" alt="Multiple Images of People in a health setting" height={"800px"} width={"100%"} />

                    </div> */}

                    <div className="about-us-image1">
                        <img src="src\assets\images\image1.jpg" alt="" height={"500px"} width={"65%"} />
                    </div>
                    <div className="about-us-image2">
                        <img src="src\assets\images\image9.jpg" alt="" height={"500px"} width={"65%"} />
                    </div>
                    <div className="about-us-image3">
                        <img src="src\assets\images\image7.jpg" alt="" height={"500px"} width={"65%"} />
                    </div>





                </div>


            </section>
        </div>
    )
};


export default Body_About;
