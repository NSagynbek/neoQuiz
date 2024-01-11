export const colors = [
    "#FFE0A3",
    "#CCFFF6", 
    "#FFCCFD", 
    "#ADD3FF", 
    "#FFA9A3", 
    "#CCFFD4", 
    "#D0CCFF", 
    "#FDFFAD",
    "#FFA0A0",
    "#CBF89E",
    "#9CC7FA",
    "#DAB5FF",
    "#FFB6C1",
    "#7FFFD4",
    "#FFD700",
    "#40E0D0",
    "#DDA0DD",
    "#FF6347",
    "#87CEEB",
    "#8A2BE2"
  ];
  
  

export const generateRandomColor = (colors)=>{
    const randomIndex = Math.floor(Math.random()*colors.length);
    return colors[randomIndex];
}

export const generateRandomBoxShadow = () => {
    const randomColor = generateRandomColor(colors);
    return `${randomColor} 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px`;
}


  





