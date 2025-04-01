// src/components/HootDetails/HootDetails.jsx
import { useParams } from 'react-router';

const HootDetails = () => {
    const { hootId } = useParams();
    console.log('hootId', hootId);
  
    return <main>Hoot Details</main>;
  };
  
  
  export default HootDetails;
  