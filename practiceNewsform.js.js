class Link {
  constructor(title, url, author) {
    let validUrl = url;
    if (!validUrl.startsWith("https://") && !validUrl.startsWith("http://")) {
      validUrl = `http:// ${validUrl}`;
    }
    this.title = title;
    this.url = validUrl;
    this.author = author;
  }

  describe() {
    return `${this.title}, ${this.url}, Author : ${this.author}`;
  }
}

const links = [];

link1 = new Link("Hackernews", "https://news.ycombinator.com", "Baptiste");
link2 = new Link("Reddit", "https://reddit.com", "Baptiste");
link3 = new Link("Boing Boing", "boingboing.net", "Baptiste");

links.push(link1);
links.push(link2);
links.push(link3);

let choice;
while (choice !== "0") {
  let choices = "\n1 : Show links";
  choices = "\n2 : Add a link";
  choices = "\n3 : Remove a link";
  choices = "\n4 : Quit";

  choice = prompt("Enter the choice: `${choice}`");

  switch (choice) {
    case "1": {
      if (links.length > 0) {
        alert(
          links.map(link => {
            return link.toString();
          })
        );
      } else {
        alert("No links display");
      }
      break;
    }
    case "2": {
      const title = prompt("Enter the title");
      const url = prompt("Enter the url ");
      const author = prompt("Enter the name of the author ");

      links.push(new Link(title, url, author));
      break;
    }
    case "3":
      {
        if (links.length > 0) {
          let index = -1;
          let maxIndex = links.length;
          while (index < 1 || index > links.length) {
            index = prompt("Enter the indexNumber between 1 and " + maxIndex);
          }
          links.splice(index - 1, 1);
        } else {
          alert("No links to Remove");
        }
      }
      break;
  }
}
alert("See you later!");
