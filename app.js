function boxingDay([arg1, arg2, arg3]){
  let budget = Number(arg1);
  let category = arg2.toLowerCase();
  let people = Number(arg3);
  let transport;
  let forTickets;
  let normal = people * 249.99;
  let vip = people * 499.99;

  if(people > 0 && people <= 4){
    transport = budget * 0.75; 
    if(category === "normal"){
      forTickets = budget - transport - normal;
    } else{
      forTickets = budget - transport - vip;
    }
  } else if(people > 4 && people <= 9){
    transport = budget * 0.60;
    if(category === "normal"){
      forTickets = budget - transport - normal;
    } else{
      forTickets = budget - transport - vip;
    }
  } else if(people > 9 && people <= 24){
    transport = budget * 0.50;
    if(category === "normal"){
      forTickets = budget - transport - normal;
    } else{
      forTickets = budget - transport - vip;
    }
  } else if(people > 24 && people <= 49){
    transport = budget * 0.40;
    if(category === "normal"){
      forTickets = budget - transport - normal;
    } else{
      forTickets = budget - transport - vip;
    } 
  } else if(people > 49){
    transport = budget * 0.25;
    if(category === "normal"){
      forTickets = budget - transport - normal;
    } else{
      forTickets = budget - transport - vip;
    }
  }
    if(forTickets > 0){
      console.log("Yes! You have " + forTickets.toFixed(2) + " leva left");
  } else if(forTickets < 0){
      console.log("Not enough money! You need " + (Math.abs(forTickets)).toFixed(2) + " leva");
  }
}

boxingDay([10000,"vip",3]);
