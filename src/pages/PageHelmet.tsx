import { Helmet, HelmetProvider } from "react-helmet-async";

const PageHelmet = ({ title }: { title: string }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default PageHelmet;
