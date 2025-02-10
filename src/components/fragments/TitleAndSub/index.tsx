import SubTitleCategory from "@/components/elements/SubTitleCategory";
import TitleCategory from "@/components/elements/TitleCategory";

const TitleAndSub = ({ title, sub }: { title: string; sub: string }) => {
  return (
    <div className="">
      <TitleCategory>{title}</TitleCategory>
      <SubTitleCategory>{sub}</SubTitleCategory>
    </div>
  );
};

export default TitleAndSub;
