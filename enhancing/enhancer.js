module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

  
  if(item.enhancement < 20) {

    const successfulItem = {
    name: item.name,
    durability: item.durability,
    enhancement: item.enhancement + 1,
  }
     return successfulItem
     
  } else {
      maxEnhancedItem = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement === 20
    }
    return maxEnhancedItem;
  }
 
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  
    const newItem = {
      name: item.name,
      durability: 100,
      enhancement: item.enhancement
    };
    return newItem ;
  }; 
 


function get(item) {
  return { ...item };
}
