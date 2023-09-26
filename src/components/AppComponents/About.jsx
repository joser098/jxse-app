import Profile from "./Profile";
import Skills from "./Skills";
import Speech from "./Speech";

const getProfile = async () => {
  const res = await fetch("https://server-nglt-dev.fl0.io/jxse/profile");
  const data = await res.json();

  return data;
};

const About = async () => {
  const [profile] = await getProfile();
  const { skills, about } = await profile;

  return (
    <section className="h-[calc(100vh-90px)] flex flex-col px-8 md:flex-row md:justify-around gap-5">
      <div className="">
        <Profile profile={profile} />

        <Skills skills={skills} />
      </div>

      <Speech about={about} />
    </section>
  );
};

export default About;
