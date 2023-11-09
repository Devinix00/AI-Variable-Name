import Title from "@/components/atoms/title/Title";
import Description from "@/components/atoms/description/Description";

function HomeIntro(): JSX.Element {
  return (
    <>
      <Title title="Welcome to AI Naming Service!" />
      <Description description="Get creative names for your variables with the help of AI." />
    </>
  );
}

export default HomeIntro;
