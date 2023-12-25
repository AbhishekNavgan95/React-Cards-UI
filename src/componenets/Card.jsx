import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/Fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function handleLike() {
    // logic to check liked courses
    if (likedCourses.includes(course.id)) {
      // course is liked

      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("removed from Favourites");
    } else {
      // course is not liked
      // insert into liked course
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("added to Favourites");
    }
  }

  return (
    <div className="w-[300px] bg-opacity-80 bg-red-500 rounded-xl overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt="" />
        <button
          onClick={handleLike}
          className="text-3xl absolute bottom-[-15%] right-[5%] bg-white rounded-full p-2 flex justify-center items-center"
        >
          {likedCourses.includes(course.id) ? (
            <FcLike />
          ) : (
            <FcLikePlaceholder />
          )}
        </button>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="text-white mt-2">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
