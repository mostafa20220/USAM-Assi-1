import Footer from "../../components/Footer";
import Header from "../../components/Header";
import JobCard from "../../components/JobCard";

export default function ExplorePage() {
  return (
    <>
      <Header type="applicant" />
      <main className="flex flex-col items-center content-center px-[10%] gap-8 mb-32">
        <section className="w-full min-w-28">
          <ul className="flex flex-col gap-8">
            <JobCard
              title="HR Administrative Assistant"
              companyName="Alqemam - QTech"
              companyLogo="/company-5-logo-white-bg.png"
              location="Mansoura, Egypt"
              careerLevel="Entry"
              datePostedInDays={7}
              jobType="Full-time"
              yearsOfExperience="0-2"
            />{" "}
            <JobCard
              title="HR Administrative Assistant"
              companyName="Alqemam - QTech"
              companyLogo="/company-5-logo-white-bg.png"
              location="Mansoura, Egypt"
              careerLevel="Entry"
              datePostedInDays={7}
              jobType="Full-time"
              yearsOfExperience="0-2"
            />{" "}
            <JobCard
              title="HR Administrative Assistant"
              companyName="Alqemam - QTech"
              companyLogo="/company-5-logo-white-bg.png"
              location="Mansoura, Egypt"
              careerLevel="Entry"
              datePostedInDays={7}
              jobType="Full-time"
              yearsOfExperience="0-2"
            />
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
