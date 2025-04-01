// src/components/HootDetails/HootDetails.jsx
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as hootService from '../../services/hootService';


const HootDetails = () => {
    const [hoot, setHoot] = useState(null);
    const { hootId } = useParams();
    console.log('hootId', hootId);
    useEffect(() => {
        const fetchHoot = async () => {
          const hootData = await hootService.show(hootId);
          setHoot(hootData);
        };
        fetchHoot();
      }, [hootId]);
    
      // Verify the hoot state is set correctly:
      console.log('hoot state:', hoot);
    
  
    return <main>Hoot Details</main>;
  };
  

  
  export default HootDetails;
  