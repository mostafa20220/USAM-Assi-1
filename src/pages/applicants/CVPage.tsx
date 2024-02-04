import ActionBox from "../../components/ActionBox";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function CVPage() {
  return (
    <>
      <Header type="applicant" />
      <main className="flex flex-col items-center content-center px-[10%] gap-8 mb-32">
        <section className="w-full min-w-28">
          <input
            className="px-4 py-3 mb-4 w-full drop-shadow-lg rounded-2xl"
            type="search"
            value="Provide your information to make professional CV"
          />
        </section>
        <section className="grid grid-cols-1  sm:grid-cols-[1fr_1fr] gap-4 sm:gap-6 w-full mb-10">
          <div className="space-y-4">
            <ActionBox
              title="Manar Khaled"
              icon="/add-logo-icon.png"
              className=" sm:items-start "
              cv={true}
            >
              <div
                className="mt-1
              grid grid-cols-2 gap-1"
              >
                <div className="text-stone-700 space-y-0.5 sm:space-y-1">
                  <p>Location:</p>
                  <p>Education:</p>
                  <p>Experience:</p>
                </div>
                <div className="text-stone-500 space-y-0.5 sm:space-y-1">
                  <p>Mansoura</p>
                  <p>Add Education</p>
                  <p>2 Years</p>
                </div>
              </div>
            </ActionBox>

            <ActionBox title="Contact Information" cv={true}>
              <div className="mt-1  grid grid-cols-2 gap-1">
                <div className="text-stone-700 space-y-0.5 sm:space-y-1">
                  <p>Email:</p>
                  <p>Mobil Number:</p>
                </div>
                <div className="text-stone-500 space-y-0.5 sm:space-y-1">
                  <p>Manarkhaled@gmail.com</p>
                  <p>Add your number</p>
                </div>
              </div>
            </ActionBox>

            <ActionBox
              title="Top 5 Specialties"
              cv={true}
              description="That will help you to stand out from other applicants"
            >
              <Button className="text-center sm:w-fit" to="">
                Add Specialty
              </Button>
            </ActionBox>

            <ActionBox
              title="Skills"
              cv={true}
              description="That will help employers to know more about your professional experience."
            >
              <Button className="text-center sm:w-fit" to="">
                Add Skill
              </Button>
            </ActionBox>
          </div>

          <div className="space-y-4">
            <ActionBox
              title="Do you have CV file?"
              description="Attaching your CV file will help employers learn further
            about your style and presentation skills."
              className="relative "
              cv={true}
            >
              <Button className="sm:absolute top-1 right-1 text-center" to="">
                Upload CV
              </Button>
            </ActionBox>
            <ActionBox title="Personal Information" cv={true}>
              <div className="mt-1  grid grid-cols-2 gap-1">
                <div className="text-stone-700 space-y-0.5 sm:space-y-1">
                  <p>Name:</p>
                  <p>Birth date:</p>
                  <p>
                    Gender{" "}
                    <img
                      className="ml-1 w-2 h-2 inline-block"
                      src="/down-icon.png"
                      alt="down-icon"
                    />
                  </p>
                  <p>
                    Nationality{" "}
                    <img
                      className="ml-1 w-2 h-2 inline-block"
                      src="/down-icon.png"
                      alt="down-icon"
                    />
                  </p>
                  <p>
                    Residence country{" "}
                    <img
                      className="ml-1 w-2 h-2 inline-block"
                      src="/down-icon.png"
                      alt="down-icon"
                    />
                  </p>
                </div>
                <div className="text-stone-500 space-y-0.5 sm:space-y-1">
                  <p>Manar khaled</p>
                  <p>Add your birthday</p>
                </div>
              </div>
            </ActionBox>

            <ActionBox title="Preferred Job" cv={true}>
              <div className="mt-1  grid grid-cols-2 gap-1">
                <div className="text-stone-700 space-y-0.5 sm:space-y-1">
                  <p>Job Title:</p>
                  <p>
                    Job Level{" "}
                    <img
                      className="ml-1 w-2 h-2 inline-block"
                      src="/down-icon.png"
                      alt="down-icon"
                    />{" "}
                  </p>
                  <p>
                    Job Location{" "}
                    <img
                      className="ml-1 w-2 h-2 inline-block"
                      src="/down-icon.png"
                      alt="down-icon"
                    />
                  </p>
                  <p>Target Salary:</p>
                </div>
                <div className="text-stone-500 space-y-0.5 sm:space-y-1 flex flex-col justify-between ">
                  <p>Add title of the job you are looking for</p>
                  <p>Add salary</p>
                </div>
              </div>
            </ActionBox>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
