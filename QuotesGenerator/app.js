let btn = document.getElementById("new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
const quotes = [
  {
    person: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    person: "Martin Luther King Jr.",
    quote:
      "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
  },
  {
    person: "Albert Einstein",
    quote: "Imagination is more important than knowledge.",
  },
  {
    person: "Helen Keller",
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  },
  {
    person: "Winston Churchill",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  },
  {
    person: "Nelson Mandela",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    person: "Maya Angelou",
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
  {
    person: "Abraham Lincoln",
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
  },
  {
    person: "Steve Jobs",
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
  },
  {
    person: "John F. Kennedy",
    quote:
      "Ask not what your country can do for you – ask what you can do for your country.",
  },
  {
    person: "Marilyn Monroe",
    quote:
      "Imperfection is beauty, madness is genius, and it's better to be absolutely ridiculous than absolutely boring.",
  },
  {
    person: "Buddha",
    quote: "The mind is everything. What you think you become.",
  },
  {
    person: "Ralph Waldo Emerson",
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  },
  {
    person: "Mark Twain",
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
  },
  {
    person: "Oscar Wilde",
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
  },
  {
    person: "Homer",
    quote: "The journey is the thing.",
  },
  {
    person: "William Shakespeare",
    quote: "All the world's a stage, and all the men and women merely players.",
  },
  {
    person: "George Orwell",
    quote: "In a time of deceit, telling the truth is a revolutionary act.",
  },
  {
    person: "J.K. Rowling",
    quote: "It does not do to dwell on dreams and forget to live.",
  },
  {
    person: "Charles Dickens",
    quote: "It was the best of times, it was the worst of times.",
  },
  {
    person: "Friedrich Nietzsche",
    quote: "He who has a why to live can bear almost any how.",
  },
  {
    person: "Vincent Van Gogh",
    quote: "I dream my painting, and then I paint my dream.",
  },
  {
    person: "Henry David Thoreau",
    quote:
      "Go confidently in the direction of your dreams! Live the life you've imagined.",
  },
  {
    person: "George Washington",
    quote: "Happiness and moral duty are inseparably connected.",
  },
  {
    person: "Mother Teresa",
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
