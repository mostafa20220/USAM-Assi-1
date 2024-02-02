import Button from "./Button";

type JobCardProps = {
  title: string;
  companyName: string;
  companyLogo: string;
  location: string;
  careerLevel: "Entry" | "Mid" | "Senior" | "Lead" | "Manager" | "Executive";
  yearsOfExperience: "0-2" | "2-4" | "5-7" | "8-10" | "10+";
  jobType: "Full-time" | "Part-time" | "Contract" | "Internship" | "Remote";
  datePostedInDays: number;
};

export default function JobCard({
  title,
  companyName,
  companyLogo,
  location,
  careerLevel,
  yearsOfExperience,
  jobType,
  datePostedInDays,
}: Readonly<JobCardProps>) {
  return (
    <li
      className="flex justify-between shadow-lg rounded-3xl drop-shadow-lg p-4
"
    >
      <div className="font-light text-slate-600 text-left space-y-1">
        <h3 className="font-semibold text-[0.73rem] text-[var(--color-brand-primary)]" >{title}</h3>
        <p >
          <span className="font-medium text-black">
            {companyName} -{" "}
            </span>
            {location}
        </p>
        <p>
          {careerLevel} Level. {yearsOfExperience}. Yrs of Exp. 
          <span className="text-blue-400"> {jobType}</span>
        </p>
        <p className="text-stone-400 font-light">in {datePostedInDays} days</p>

        <div className="m-0 pt-5 flex items-center gap-4">
          <Button type="secondary" to="/job-details" className="flex items-center gap-1 px-0 sm:px-0 md:px-0">
            <img className="h-3 w-3" src="/public/save-icon.png" alt="save-icon" />
            <span>Save</span>
          </Button>
          <Button type="secondary" to="/job-details" className="flex items-center gap-1 px-0 sm:px-0 md:px-0">
            <img className="h-3 w-3 " src="/public/share-icon.png" alt="save-icon" />
            <span>Share</span>
          </Button>
        </div>
      </div>
      <img className="h-8 w-8" src={companyLogo} alt="Company-Logo" />
    </li>
  );
}
