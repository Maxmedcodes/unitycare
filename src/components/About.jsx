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
                            <p>Unity Care connects volunteers with patients who need companionship during hospital stays. Founded on the belief that human connection is essential to healing, our platform makes it easy for family members, friends, or healthcare professionals to request compassionate visitors for patients experiencing isolation. Our community of volunteers brings comfort, conversation, and care to those who need it most.</p>

                        </div>
                        <div className="about-us-text-2">
                            <h3>Our Mission</h3>
                            <p>Unity Care bridges the gap between isolated hospital patients and compassionate volunteers. We believe in the healing power of human connection and work to ensure no one faces illness alone. Our platform creates meaningful interactions that benefit patients' emotional wellbeing while providing fulfilling volunteer opportunities.</p>

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
                        <img src="src\assets\images\image1.jpg" alt="" height={"400px"} width={"65%"} />
                    </div>
                    <div className="about-us-image2">
                        <img src="src\assets\images\image9.jpg" alt="" height={"400px"} width={"65%"} />
                    </div>
                    <div className="about-us-image3">
                        <img src="src\assets\images\image7.jpg" alt="" height={"400px"} width={"65%"} />
                    </div>





                </div>


            </section>
        </div>
    )
};


export default Body_About;
