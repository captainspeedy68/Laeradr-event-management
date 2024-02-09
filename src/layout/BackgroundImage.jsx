import React from 'react';

const BackgroundImage = () => {
  return (
    // inside class can be added:  
    <div className='max-h-svh'>
      <div className="fixed top-0 left-0 right-0 z-[-1] h-2/4 bg-cover bg-no-repeat overflow-hidden">
        <img className="object-cover w-full h-full" src="https://i.ibb.co/n63MPp7/maze-runner-by-florentllamas-d86o3rt.jpg" alt="Background image" />
      </div>
    </div>



  );
};

export default BackgroundImage;
