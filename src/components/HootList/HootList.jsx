// src/components/HootList/HootList.jsx

const HootList = (props) => {
    return (
      <main>
        {props.hoots.map((hoot) => (
          <p key={hoot._id}>{hoot.title}</p>
        ))}
      </main>
    );
  };
  
  
  export default HootList;
  