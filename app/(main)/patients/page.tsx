import PostsTable from "@/components/posts/Appointment";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";
import AllAppointment from "@/components/posts/AllAppointments";
import AllPatients from "@/components/posts/AllPatients";

const Appointment = () => {
  return (
    <div className="h-auto">
      <BackButton text="Go Back" link="/" />
      <AllPatients />
      <PostsPagination />
    </div>
  );
};

export default Appointment;
