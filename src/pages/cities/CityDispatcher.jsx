import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { cityComponentMap, cityAreas, getCoworkingSpacesForCity } from './cityRegistry';
import CityPageLayout from './CityPageLayout';

const CityDispatcher = () => {
  const { cityName } = useParams();

  const normalizedCity = useMemo(() => {
    if (!cityName) return 'Gurgaon';
    const clean = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    if (clean.toLowerCase() === 'gurugram') return 'Gurgaon';
    return clean;
  }, [cityName]);

  const CityComponent = cityComponentMap[normalizedCity.toLowerCase()];

  if (CityComponent) {
    return <CityComponent />;
  }

  const areas = cityAreas[normalizedCity] || ['All'];
  const spaces = getCoworkingSpacesForCity(normalizedCity);

  return (
    <CityPageLayout
      cityName={normalizedCity}
      areas={areas}
      spaces={spaces}
    />
  );
};

export default CityDispatcher;
