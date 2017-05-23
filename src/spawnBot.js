import {join, changeStatus, sendMessage} from './actions';
import {ONLINE, AWAY, PLAYING} from './chatStatuses';

const getRandomItem = items => items[Math.floor(Math.random() * items.length)];

const PHRASES = [
  'I’m sorry that I doubted you, I was so unfair. You were in a car crash, and you lost your hair.',
  'Little child, little child, won’t you come dance with me? I’m so sad and lonely, baby take a chance with me. ',
  'And in the end, the love you take is equal to the love you make',
  'She said, I know what it’s like to be dead.',
  'Joan was quizzical, studied pataphysical science in her home.',
  'There are places I remember all my life, though some have changed. Some forever, not for better, some have gone and some remain.',
  'JoJo was a man who thought he was a loner, but he new it wouldn’t last. JoJo left his home in Tucson, Arizona for some California grass. ',
  'Please, please me, oh yeah, like I please you.',
  'The newspaper said what are you doing in bed? I said were only trying to get some peace.',
  'My advice to those who die, declare the pennies on your eyes, cause I’m the taxman.',
  'I get high with a little help from my friends.',
  'How does it feel to be one of the beautiful people?',
  'When you told me you didn’t need me anymore, well you know I nearly broke down and cried.',
  'We all want to change the world, but when you talk about destruction, don’t you know that you can count me out, in.',
  'Here comes the sun, it’s alright.',
  'It’s getting better all the time, can’t get no worse.',
  'Man buys ring, woman throws it away, same old thing happens everyday.',
  'She’s a big teaser, she took me half the way there.',
  'When you’ve seen beyond yourself, then you may find peace of mind is waiting there.',
  'Four thousand holes in Blackburn Lancashire, and though the holes were rather small, they had to count them all. Now they know how many holes it takes to fill the Albert Hall.',
  'He got walrus gumboot, he got Ono side boards, he one spinal cracker.',
  'Limitless undying love which shines around me like a million suns, it calls me on and on across the universe.',
  'The sun is up, the sky is blue, it’s beautiful, and so are you.',
  'There’s nothing you can do that can’t be done.',
  'Let it be, let it be. There will come an answer, let it be.',
  'Life is very short and there’s no time for fussing and fighting my friend.',
  'One thing I can tell you is we got to be free.',
  'All these places have their moments with lovers and friends, I still can recall. Some are dead and some are living in my life, I’ve loved them all.',
  'I get by with a little help from my friends.',
  'In my hour of darkness, she is standing right in front of me, speaking words of wisdom, let it be.',
  'Yesterday, oh, my trouble seemed so far away...',
];

const REPLY_PHRASES = [
  'ok, whatever',
  'no, I don’t think so',
  'yes, great idea',
  'what the hell..?',
  'well, you should think twice, alright?',
  'tune in, turn on, drop out :D',
  'say that to Timothy Leary when you’ll see him next time, deal?',
  'that’s it?',
  'whatever',
  'you are amazing!',
  'are you sure?',
];

const GAMES = [
  'guitar',
  'bass',
  'drums',
  'piano',
  'clavioline',
  'synthesizer',
  'organ',
];

const doWithRandomTimeout = action =>
  setTimeout(action, 5000 + Math.random() * 30000);

const statuses = [
  () => ({type: ONLINE}),
  () => ({type: AWAY}),
  () => ({type: PLAYING, game: getRandomItem(GAMES)}),
];

const randomAction = (store, botName) => {
  if (Math.random() > 0.6) {
    store.dispatch(changeStatus(botName, getRandomItem(statuses)()));
  } else {
    store.dispatch(sendMessage(botName, getRandomItem(PHRASES)));
  }
  doWithRandomTimeout(() => randomAction(store, botName));
};

const reactToMessage = (store, botName, message) => {
  if (!message.isSystem && message.sender !== botName) {
    if (message.text.indexOf(botName) > -1) {
      store.dispatch(
        sendMessage(
          botName,
          `@${message.sender}, ${getRandomItem(REPLY_PHRASES)}`,
        ),
      );
    }
  }
};

export default (store, botName) => {
  let lastProcessedTimestamp = 0;

  store.dispatch(join(botName));
  store.subscribe(() => {
    const state = store.getState();
    const messagesToProcess = state.messages.filter(
      message => message.timestamp > lastProcessedTimestamp,
    );

    lastProcessedTimestamp = state.messages[
      state.messages.length - 1
    ].timestamp;

    messagesToProcess.forEach(message =>
      reactToMessage(store, botName, message));
  });

  doWithRandomTimeout(() => randomAction(store, botName));
};
