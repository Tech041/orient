import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";
import AllPatients from "@/components/posts/AllPatients";

const Appointment = () => {
  return (
    <div className="h-auto">
      <BackButton text=" Back" link="/" />
      <AllPatients />
      <PostsPagination />
    </div>
  );
};

export default Appointment;
