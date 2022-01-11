let server = message.guild.id
const user=await User.findOne({ID: [server]})
const count= await User.findOne({count: 445})

if(count){
  message.reply('You have completed all the 445 questions!')
  scheduledMessage.stop()
}


while(true){
  var x= Math.floor(Math.random() * (446 - 1)) + 0;
  var y="q"+x;
  const boolval =await User.findOne({[y]: false});
  if(boolval){
    const filter2 = {ID: [server]};
    const update2 = { $inc: { count: 1}};
    const user2= await User.findOneAndUpdate(filter2, update2, {new: true});
    break;
  }
}

  message.reply(x+'\n'+'Topic -> '+Type[x]+'\n'+Qname[x]+'\n'+Ques[x]+'\n');
      if(!user){
            message.reply('Cannot find the user!')
        }
      else{
            const filter = { ID: [server] };
            const update = { [y]: true };
            const user=await User.findOneAndUpdate(filter, update, {new: true});
            
        }