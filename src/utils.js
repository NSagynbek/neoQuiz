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

export const articlesTest = [
    { category: 'art', title: 'Art article 1', content: 'Lorem ipsum' },
    { category: 'history', title: 'History article 1', content: 'Lorem ipsum' },
    { category: 'literature', title: 'Literature article 1', content: 'Lorem ipsum' },
    { category: 'philosophy', title: 'Philosophy article 1', content: 'Lorem ipsum' },
    { category: 'music', title: 'Music article 1', content: 'Lorem ipsum' } 
  ];
  



