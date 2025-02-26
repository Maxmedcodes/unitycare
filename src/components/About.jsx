import DownloadButtons from "./DownloadButtons";

function Body_About() {
    return (

        <div className="about">


            <section className="about-us">
                <div className="about-us-content">
                    <div className="about-us-header">
                        <h1>We are United.</h1>
                    </div>
                    <div className="about-us-text">
                        <h3>What is UnityCare ?</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempora mollitia quidem, aut iusto quaerat. Officia quo laborum laudantium perspiciatis!</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptates totam nesciunt! Corporis cum consequuntur, facere mollitia doloribus non quibusdam neque exercitationem in temporibus, porro sit assumenda quas maiores, rem tenetur eaque similique error ducimus! Itaque nobis saepe, voluptates odit at quia ipsum vitae molestias pariatur dolor commodi repellendus! Eaque.</p>

                        <DownloadButtons />
                    </div>

                </div>
                <div className="about-us-images">


                    <div className="about-us-image1">
                        <img src="src\assets\images\image5.jpg" alt="" height={"100px"} width={"100px"} />

                    </div>
                    <div className="about-us-image2">
                        <img src="src\assets\images\image5.jpg" alt="" height={"100px"} width={"100px"} />

                    </div>
                    <div className="about-us-image3">
                        <img src="src\assets\images\image5.jpg" alt="" height={"100px"} width={"100px"} />

                    </div>


                </div>


            </section>
        </div>
    )
};


export default Body_About;
