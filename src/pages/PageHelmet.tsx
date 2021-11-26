import { Helmet } from "react-helmet";

const PageHelmet = ({ title }: { title: string }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default PageHelmet;
