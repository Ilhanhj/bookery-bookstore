const TitleCategory = ({
  children,
  textColor = "text-emerald-800",
}: {
  children: React.ReactNode;
  textColor?: string;
}) => {
  return (
    <h1 className={`pt-5 text-2xl font-normal lg:text-3xl ${textColor}`}>
      {children}
    </h1>
  );
};

export default TitleCategory;
