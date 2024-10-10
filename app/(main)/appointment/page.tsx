import PostsTable from "@/components/posts/Appointment";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";

const Appointment = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
      <PostsPagination />
    </>
  );
};

export default Appointment;
