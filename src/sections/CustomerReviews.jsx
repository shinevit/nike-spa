import { reviews } from '../data';
import { ReviewCard } from '../components';

const CustomerReviews = () => {
  return (
    <div className="max-container ">
      <h3 className="heading-text text-center">
        What our{' '}
        <span className="text-accent">customers</span>{' '}say?
      </h3>
      <p className="info-text m-auto text-center mt-4 max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center
      max-lg:flex-col gap-14 text-black dark:text-white-400">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;