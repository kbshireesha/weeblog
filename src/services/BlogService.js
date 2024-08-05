const posts = [
  { id: 1, title: 'A city of good winds', author: 'Unknown', keywords: 'TRAVEL', image: 'https://picsum.photos/id/1011/800/450',content: 'Argentinas capital and largest city, with around 15 million people, is Buenos Aires, known as BA for short. Argentina is a highly urbanised country, with the vast majority of the population living in cities, a third of them in the wider metropolitan area of the capital. The city is located on the western shore of the Rio de la Plata, or the River Plate, which is essentially the funnel-shaped mouth of the Paraná and Uruguay rivers in the Atlantic Ocean. And it was by sea in the 16th century that Europeans arrived in the area of todays capital and named it Real de Nuestra Señora Santa Maria del Buen Ayre, after Maria Bonarska of Sardinia, known as Our Lady of the Fair Winds. After all, the first colonisers, with the blessing of the Blessed Virgin Mary of the Good Wind - which is what the name originally means in Spanish, the official language of Argentina - and with the help of the winds, reached the shores of the city. Later, the name was shortened to Buenos Aires, which can be translated as "good winds" or "good air" Todays locals are largely of European origin and call themselves Porteños, or the inhabitants of the port city, which is more than appropriate given that Buenos Aires is one of the busiest ports in South America. BA is a multicultural city where many immigrants from all over the world have found a home, but the European influence is predominant, reflected in the impressive architecture and cultural life, and the inhabitants consider themselves more European than Latin American in character.' },
  { id: 2, title: 'At the end of the world', author: 'Unknown', keywords: 'TRAVEL', image: 'https://picsum.photos/id/1043/800/450',content: 'Tierra del Fuego is an archipelago separated from mainland South America by the Strait of Magellan - named after the Portuguese explorer Ferdinand Magellan - which has the tourist slogan "the end of the world" (Fin del Mundo). The very name Tierra del Fuego is more than interesting. When the first Europeans arrived in this part of the world, they saw the land full of fires to keep the poorly dressed indigenous people warm. It is surprising that in this cold climate, the Selk`nam and Yahgan people lived almost naked, and later research has even shown that their body temperature was 1 degree higher than normal, while at the same time they anointed themselves with animal grease, which gave them some protection against the cold temperatures of the area in which they lived. Today, there are almost no indigenous people left, but there are descendants of convicts, because Ushuaia was founded as a penal colony in the 19th century Named after its location on the sheltered Bay of Beagle Channel, the city of 75,000 people is supposed to be the most southern place in the world. Puerto Williams, on the Chilean island of Isla Navarino, is further south, but it is much smaller than Ushuaia. Punta Arenas, Chile, which is home to a large number of descendants of Croatian Dalmatian immigrants, also holds this title, but is located further north of Ushuaia and has twice as many people living there. Still, Ushuaia is the southernmost point of Argentina and, for me, the southernmost place I have ever visited, and that fact alone justified the long journey for me.Like most Argentine cities, Ushuaia has a square named after the Malvinas Islands, an archipelago in the South Atlantic, better known as the Falkland Islands, over which the Argentines went to war in 1982 and which are still considered Argentine to this day, even though they lost the war and the islands are internationally part of Great Britain. The city itself, located on the Great Island (Isla Grande) of Tierra del Fuego, the largest island in South America, which Argentina shares with Chile, has few attractions, a few museums, but, as already said, its location at the end of the world makes it an attraction. With Antarctica close by, it has become the starting point for many cruises to the shores of the ice-covered continent.' },
  { id: 3 , title:'Big cats are facing big problems', author:'Olivia Swaak-Goldman',keyword:'WILD LIFE',image:'https://picsum.photos/id/1074/800/450', content:'Lions are classified as a CITES Appendix I species, meaning they are threatened with extinction. Despite this, the world’s biggest cat is still being trafficked – particularly in parts of Asia – to meet an unrelenting demand for traditional medicine, jewellery, décor, and pets. Although international trade in lions has been prohibited since 1975, during the six-year investigation of Operation Ambush, we identified numerous organised crime networks which supply the entire spectrum of the illegal lion trade, ranging from canines and claws to skin and bones, and even live lions.Lions also continue to be bred in both legal and illegal captive facilities – otherwise known as lion farms. Our new report closely examines the role of such facilities in enabling lion-related wildlife crime in Southeast Asia. While poaching remains a significant concern, the intelligence and evidence we collected under Operation Ambush suggests that lion farms in the Greater Mekong region – especially in Lao PDR, Thailand, and Vietnam – present a significant threat to the survival of lions across Southeast Asia. Contrary to claims that captive lion breeding facilities promote and encourage conservation, the Wildlife Justice Commission’s findings suggest the opposite; lion farming actually perpetuates the supply and demand for the illegal lion trade run by organised crime networks.'},
  { id: 4, title:'The secret to long-lasting strawberries',author:'Roberta Kwok', keyword:'FRUIT',image:'https://picsum.photos/id/1080/800/450',content:'The next time you bite into a juicy strawberry, thank the bees. According to a new study, these crop-pollinating insects help improve the fruit’s shelf life, thus reducing food waste.Bees play a huge role in agriculture. Animals pollinate about three-quarters of the world’s most important crops, and fruits in particular often rely on bee pollination. But “the value of pollination and other ecosystem services is still underestimated or even disregarded in national and international policies,” the study authors write in Proceedings of the Royal Society B.The team wanted to find out whether bees were even more valuable than previously thought. One major factor in determining crop value is the food’s shelf life. Many fruits, for instance, last only four days before becoming unpalatable to customers.The researchers planted nine varieties of strawberries in a field and allowed them to flower. Then they covered some of the plants with bags so that they could no longer be pollinated by bees. Instead, those strawberries were self-pollinated or pollinated by wind. Next, the team harvested the fruit and examined properties such as color, firmness, and size. Using those measurements, the researchers could calculate the market value of the crop.Bee-pollinated strawberries were worth 39 percent more than the wind-pollinated fruit and 54 percent more than self-pollinated fruit, the authors found. For instance, bee-pollinated strawberries tended to have fewer deformities and a “more intense red colour,” the authors write. And they lasted about half a day longer than wind-pollinated fruit and a day longer than self-pollinated fruit. Overall, bee pollination lowered fruit losses by 11 percent, the team estimates.Bee pollination might improve shelf life by triggering an increase in plant hormones that keep the fruit from softening. Since plant hormone levels affect other crops as well, the results might apply to more foods than just strawberries. And anything we can do to reduce food waste is good: The authors estimate that producers and customers waste about one-third to one-half of harvested fruits and vegetables'},
  { id: 5, title:'Humans are our best-friends!',author:'Abhishek Joshi',keyword:'',image:'https://picsum.photos/id/1012/800/450',content:'A few days ago, I was highly disturbed and deeply distressed. Memories of the time when the Dog’s parents had come to live with us and the Bitch had thrown such tantrums that they had to leave the house had been haunting me. To make matters worse, when the Bitch’s parents came to visit us, the Dog behaved very rudely towards them. It made me anxious about my own impending old age. Would they throw me out of the house as well? But that was until I had a hearty chat with Kaalicharan in the park, where we go to relieve ourselves.At present, I lead a comfortable life. Humans are the most loyal servants we canines can have.  The family that serves me includes a man, his wife, and their two kids.  They call me Tiger. I call them Dog, Bitch, and Puppies. What’s in a name? That which we call a bone by any other name would taste as exquisite.The Pups were little crawlers when I became the master of their house. The elder Pup is now nine, and the younger one is eight. They have grown very big towards the sky over the years. The only thing that hasn’t changed is their constant fighting. My barking doesn’t make any difference to them.When alone, the Dog and the bitch behave normally like other animals, but when they interact with other people they put on masks as if they are participating in some television drama named Hypocrisy. It is so disgusting! Another thing that irritates me is the way they consider the Pups as extensions of their own selves, expending all their time and energy in training them, without any respect for their individuality. They kind of forget that when these Pups will grow up and marry, their wives will cut the parents off with the same impunity as they themselves have done.Such thoughts were driving me crazy when I met Kaalicharan, the dog with a blog. At first, he laughed at my concern and then said, “We are not cursed with long life like humans. Believe me, they will never treat you like they treat their parents.”His sagacious words allayed my fears and restored my belief that humans were our best friends. Thank you, God, for making this wonderful world and such incredible creatures'}
];

export async function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 500);
  });
}
export async function getPostById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find(p => p.id === parseInt(id));
      if (post) {
        resolve(post);
      } else {
        reject(new Error('Post not found'));
      }
    }, 500);
  });
}

export async function addPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      post.id = posts.length + 1;
      posts.push(post);
      console.log('Post added:', post);
      console.log('Current posts:', posts);
      resolve();
    }, 500);
  });
}


export async function updatePost(updatedPost) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = posts.findIndex(post => post.id === updatedPost.id);
      posts[index] = updatedPost;
      resolve();
    }, 500);
  });
}

export async function deletePost(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = posts.findIndex(post => post.id === id);
      if (index !== -1) {
        posts.splice(index, 1);
      }
      console.log('Current posts:', posts);
      resolve();
    }, 500);
  });
}
