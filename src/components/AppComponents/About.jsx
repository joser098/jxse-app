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
    <section className="h-full flex flex-col p-8 md:flex-row md:justify-around gap-5 md:px-0">
      <div className="flex flex-col h-full">
        <Profile profile={profile} />

        <Skills skills={skills} />
      </div>

      <Speech about={about} />
    </section>
  );
};

export default About;
