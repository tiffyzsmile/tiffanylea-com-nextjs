import React from "react";
import { H1 } from "@/components/Typography";
import Review from "@/components/Review";
import reviews from "./reviews";

const ReviewsPage = () => {
  return (
    <section className="quotes">
      <H1>Reviews</H1>
      {reviews.map((review) => {
        return (
          <Review
            name={review.name}
            imageSrc={review.imageSrc}
            title={review.title}
            link={review.link}
          >
            {review.quote}
          </Review>
        );
      })}
    </section>
  );
};

export default ReviewsPage;
