import {feedback} from "../data"
import styles from "../style";
import FeedbackCard from "./FeedbackCard"


const Testimonials = () => (

   <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

    <div className="absolute z=[0] w-[60%] h-[60%] -right-[50%] rounded-full blue_gradient"/>

    <div className="w-full justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
<h1 className={styles.heading2}>
What people are <br className="sm:block hidden"/>saying about us
</h1>
<div className="w-full md:mt-0 mt-6 ">

  <p className={`${styles.paragraph} text-left max-w-[450px]`}>
  Everything you need to accept card payments and grow your business anywhere on the planet. 
  </p>

</div>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative x-[1]">
{
  feedback.map((feed) =>(
    <FeedbackCard key={feed.id} {...feed}/>
  ))
}
    </div>
   </section>
   )

export default Testimonials;