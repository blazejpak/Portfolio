import { useParams } from "react-router";
import DictionaryDetail from "./DictionaryDetail";
import TodoDetail from "./TodoDetail";
import EntertainmentDetail from "./EntertainmentDetail";
import PlanetFactsDetail from "./PlanetFactsDetail";
import RestCountriesDetail from "./RestCountriesDetail";
import AudioECommerceDetail from "./AudioECommerceDetail";

const PortfolioDetail = () => {
  const { id } = useParams();

  let site;
  if (id === "dictionary") site = <DictionaryDetail />;
  else if (id === "audio") site = <AudioECommerceDetail />;
  else if (id === "todo") site = <TodoDetail />;
  else if (id === "entertainment") site = <EntertainmentDetail />;
  else if (id === "restcountries") site = <RestCountriesDetail />;
  else if (id === "planetfacts") site = <PlanetFactsDetail />;

  return <main className="detail">{site}</main>;
};

export default PortfolioDetail;
